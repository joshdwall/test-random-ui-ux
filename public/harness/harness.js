const frame = document.getElementById("stage");
const drawer = document.getElementById("drawer");
const burger = document.getElementById("burger");
const list = document.getElementById("example-list");
const note = document.getElementById("example-note");
const label = document.getElementById("step-label");

const catalog = await fetch("/examples/catalog.json").then((res) => res.json());
const examples = catalog.examples;
const params = new URLSearchParams(location.search);
let index = Math.max(
  0,
  examples.findIndex((row) => row.id === (params.get("e") || catalog.defaultId)),
);

function show(next) {
  index = (next + examples.length) % examples.length;
  const row = examples[index];
  frame.src = row.path;
  note.textContent = row.notes;
  label.textContent = row.title;
  list.querySelectorAll("button").forEach((btn, i) => {
    btn.classList.toggle("is-on", i === index);
  });
  const url = new URL(location.href);
  url.searchParams.set("e", row.id);
  history.replaceState(null, "", url);
}

for (const row of examples) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = row.title;
  btn.addEventListener("click", () => {
    show(examples.indexOf(row));
  });
  li.appendChild(btn);
  list.appendChild(li);
}

function setDrawer(open) {
  drawer.hidden = !open;
  burger.setAttribute("aria-expanded", open ? "true" : "false");
}

burger.addEventListener("click", () => setDrawer(drawer.hidden));
document.getElementById("drawer-close").addEventListener("click", () => setDrawer(false));
document.getElementById("prev").addEventListener("click", () => show(index - 1));
document.getElementById("next").addEventListener("click", () => show(index + 1));

document.addEventListener("keydown", (event) => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
  if (event.key === "ArrowLeft") show(index - 1);
  else if (event.key === "ArrowRight") show(index + 1);
  else if (event.key === "Escape") setDrawer(false);
});

show(index < 0 ? 0 : index);
