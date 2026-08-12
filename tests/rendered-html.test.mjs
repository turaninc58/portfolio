import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Turan's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Turan İnceöz/);
  assert.match(html, /From.*signal.*to.*system/i);
  assert.match(html, /Emotion Recognition/);
  assert.match(html, /Istanbul Technical University/);
  assert.match(html, /inceoz\.benim\.58@gmail\.com/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("keeps portfolio metadata and assets production-ready", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Turan-Inceoz-CV\.pdf/);
  assert.match(page, /turan-inceoz\.jpg/);
  assert.match(layout, /og\.png/);
  assert.match(layout, /summary_large_image/);
  assert.match(packageJson, /"name": "turan-inceoz-portfolio"/);
  assert.doesNotMatch(page + layout + packageJson, /_sites-preview|codex-preview/);
});
