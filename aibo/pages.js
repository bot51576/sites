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

  async getSummry()  {
    return /*html*/ `
    <div class=""></div>
    <div class="flex text-2xl bottom-60 notifi
                font-extrabold absolute justify-between 
                flex justify-center items-center">
          <ion-icon class="text-blue-500 inline-block align-middle"
          name="notifications-outline"></ion-icon>
          通知
        </p>
        <ion-icon name="chevron-forward-outline"></ion-icon>
    </div>
      <div class="justify-center flex items-center">
      </div>
    `
  }

  async getHtml() {
    this.setState("Home", 0);
    if (this.turn === true) {
      return /*html*/ `
            <div class="flex justify-center cursor-pointer">
              <div class="mt-16 flex justify-center  mx-10">
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
            </div>
            ${await this.getSummry()}`;
    } else {
      return /*html*/ `
      <div class="flex justify-center">
        <div onclick="views[0].view.turn = true;router() "
        class="monitor_f mt-16 w-full h-auto wrapper block
                w-48 h-48 content-center cursor-pointer	
                flex flex-col justify-center items-center"
        >見守り対象外</div>
      </div>
      ${await this.getSummry()}`;
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
