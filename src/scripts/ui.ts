// Mobile menu + «Розділ у розробці» dialog. Page content works without JS.
const btn = document.querySelector<HTMLButtonElement>("[data-menu]");
const nav = document.getElementById("nav");
const setMenu = (open: boolean, focusBtn = false) => {
  if (!btn || !nav) return;
  nav.classList.toggle("is-open", open);
  btn.setAttribute("aria-expanded", String(open));
  if (!open && focusBtn) btn.focus();
};
btn?.addEventListener("click", () => setMenu(!nav?.classList.contains("is-open")));
nav?.addEventListener("click", (e) => { if ((e.target as HTMLElement).closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav?.classList.contains("is-open")) setMenu(false, true); });

const dlg = document.getElementById("future-dialog") as HTMLDialogElement | null;
let opener: HTMLElement | null = null;
const openFuture = (el: HTMLElement) => { if (!dlg || dlg.open) return; opener = el; dlg.showModal(); };
document.addEventListener("click", (e) => { const el = (e.target as HTMLElement).closest<HTMLElement>("[data-future]"); if (el) openFuture(el); });
document.addEventListener("keydown", (e) => {
  const el = (e.target as HTMLElement).closest?.<HTMLElement>("[data-future]");
  if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openFuture(el); }
});
dlg?.addEventListener("close", () => opener?.focus());
dlg?.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
