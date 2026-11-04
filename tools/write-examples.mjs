import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const examples = [
  { id: "tpt-01", cls: "", brand: "__BRAND__" },
  { id: "tpt-02", cls: "v-larger v-lower", brand: "__BRAND__" },
  { id: "tpt-03", cls: "v-larger v-lower v-moss", brand: "__BRAND__" },
  { id: "tpt-04", cls: "v-larger v-lower v-bold", brand: "__BRAND__" },
  { id: "tpt-05", cls: "v-larger v-lower v-split", brand: '<span class="brand-a">ThePlaceholder</span><span class="brand-b">Text</span>' },
];

const page = (cls, brand) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ThePlaceholderText — We fit where you need.</title>
    <link rel="stylesheet" href="/examples/shared.css" />
    <link rel="stylesheet" href="/examples/variants.css" />
  </head>
  <body class="home ${cls}">
    <main class="page-field">
      <img class="page-bg" src="/examples/media/moss-rocks.jpg" alt="" />
      <div class="page-shade" aria-hidden="true"></div>
      <section class="hero">
        <div class="hero-stage">
          <div class="hero-copy">
            <h1 class="hero-brand">${brand}</h1>
            <p class="hero-tag">We fit where you need.</p>
          </div>
          <p class="panel-label">What we put in place</p>
          <div class="hero-cards">
            <article class="hero-card"><h3>Workflows become automations</h3><p>Watch the real sequence. Encode it.</p></article>
            <article class="hero-card"><h3>Less friction between desks</h3><p>One shared path. No inbox death.</p></article>
            <article class="hero-card"><h3>Tools people will use</h3><p>Fit the fix to the screen already open.</p></article>
            <article class="hero-card"><h3>Learned on the job</h3><p>Exceptions from the people who hit them.</p></article>
            <article class="hero-card"><h3>More paid work, same desk</h3><p>Busywork leaves. The person stays.</p></article>
          </div>
          <div class="contact-copy">
            <p class="eyebrow">Contact</p>
            <h2 class="contact-title">Talk with us</h2>
            <p class="intro">A person reads this and replies.</p>
          </div>
          <form class="contact-form" action="#" method="post" onsubmit="return false">
            <label class="contact-field">Email<input type="email" required /></label>
            <label class="contact-field contact-field--message">Message<textarea rows="2" required></textarea></label>
            <div class="contact-actions"><button class="button" type="submit">Send</button></div>
          </form>
        </div>
      </section>
    </main>
  </body>
</html>
`;

for (const ex of examples) {
  const brand = ex.brand === "__BRAND__" ? "ThePlaceholderText" : ex.brand;
  const dir = path.join(root, "public", "examples", ex.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page(ex.cls, brand));
}
console.log("wrote", examples.length);
