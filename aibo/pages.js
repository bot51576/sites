class ViewTemp {
  constructor(params) {
    this.params = params;
  }

  setState(title, eleNum) {
    document.title = title;
    Object.keys(tabs).map((key) => {
      tabs[key].classList.remove("text-blue-500");
      tabs[key].classList.add("text-gray-700");
    });
    tabs[eleNum].classList.remove("text-gray-700");
    tabs[eleNum].classList.add("text-blue-500");
  }

  async getHtml() {
    return "";
  }
}

class Home extends ViewTemp {
  constructor(params) {
    super(params);
    this.turn = true;
  }
  async getHtml() {
    this.setState("Home", 0);
    if (this.turn === true) {
      return /*html*/ `
            <div class="flex justify-center">
              <div class="fadeL mt-20 flex justify-center">
                <div onclick="views[0].view.turn = false;router()" class="monitor_t 
                  w-40 h-40
                  sm:w-60 sm:h-60
                  flex flex-col justify-center items-center"
                >見守り中</div>
                <div class="w-40 h-40
                  sm:w-60 sm:h-60
                  flex flex-col items-center content-center">
                  <img src="./img/aibo.png" />
                </div>    
              </div>
            </div>`;
    } else {
      return /*html*/ `
      <div class="flex justify-center">
        <div onclick="views[0].view.turn = true;router() "class="fadeR monitor_f mt-20 w-full h-auto wrapper block
                w-60 h-60 content-center
                flex flex-col justify-center items-center"
        >見守り対象外</div>
      <div>`;
    }
  }
}

class Play extends ViewTemp {
  constructor(params) {
    super(params);
  }
  async getHtml() {
    this.setState("Play", 1);
    return `<h1>Hello Play</h1>`;
  }
}

class Connect extends ViewTemp {
  constructor(params) {
    super(params);
  }
  async getHtml() {
    this.setState("Connect", 2);
    return `<h1>Hello Connect</h1>`;
  }
}

class Settings extends ViewTemp {
  constructor(params) {
    super(params);
  }
  async getHtml() {
    this.setState("Settings", 3);
    return `<h1>Hello Settings</h1>`;
  }
}
