const tabs = document.querySelectorAll("div.tabs");
const tabName = ["Home", "Play", "Connect", "Settings"];
const app = document.getElementById("app");

function selectTab(elementNum) {
  Object.keys(tabs).map((key) => {
    tabs[key].classList.remove("text-blue-500");
    tabs[key].classList.add("text-gray-700");
  });
  tabs[elementNum].classList.remove("text-gray-700");
  tabs[elementNum].classList.add("text-blue-500");
}

async function changeTabs(elementNum) {
  const views = [
    { path: "home", view: new home() },
    { path: "home", view: new home() },
    { path: "home", view: new home() },
    { path: "home", view: new home() },
  ];
  app.innerHTML = await views[elementNum].view.getHtml();
  await selectTab(elementNum);
}

class ViewTemp {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}

class home extends ViewTemp {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }
  async getHtml() {
    return `<h1>Hello Home</h1>`;
  }
}
