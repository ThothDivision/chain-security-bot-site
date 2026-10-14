document.documentElement.classList.add("js");
// Open external incident/source links in a new tab, keep in-page anchors as-is.
for (const a of document.querySelectorAll('a[href^="http"]')) { a.target = "_blank"; a.rel = "noopener"; }
// Waitlist: never submit an empty issue title.
const wf = document.querySelector(".wait__form");
if (wf) wf.addEventListener("submit", () => { const t = wf.querySelector("#w-chain"); if (!t.value.trim()) t.value = "Early access request"; });
