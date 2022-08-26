const tabs = document.querySelectorAll("div.tabs");
const app = document.getElementById("app");
const tabName = ["", "#play", "#connect", "#settings"];
const views = [
  { path: "", view: new Home() },
  { path: "#play", view: new Play() },
  { path: "#connect", view: new Connect() },
  { path: "#settings", view: new Settings() },
];

window.onload = (e) => {
  router();
};

const router = async () => {
  const hash = location.hash;
  const tab = tabName.indexOf(hash);
  app.innerHTML = await views[tab].view.getHtml();
};

window.addEventListener("hashchange", router, false);
/*
setInterval(() => {
  router();
}, 10000);
*/
