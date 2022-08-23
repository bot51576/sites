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
    <div class="">
      <div class="flex text-2xl notifi mt-16
                  font-extrabol justify-between 
                 justify-center items-center">
            <div class="">
              <ion-icon class="text-blue-500 inline-block align-middle -mt-1 ml-2"
              name="notifications-outline"></ion-icon>
            </div>
            <p href="#notifi" class="whitespace-nowrap -ml-3">通知</p>
          <a href="#notifi"><ion-icon class="arrow ml-64 mr-4" name="chevron-forward-outline"></ion-icon></a>
      </div>
      <div class="flex justify-center items-center w-full mx-auto mt-12">
        <div class="flex justify-between rounded-lg bg-blue-200"> 
          <div class="p-3">通知内容</div>
          <div class="ml-64">見る</div>
        </div>
      </div>
    </div>
    `
  }

  async getHtml() {
    this.setState("Home", 0);
    if (this.turn === true) {
      return /*html*/ `
            <div class="flex justify-center">
                <div onclick="views[0].view.turn = false;router()" class="monitor_t 
                mt-16 w-full h-auto wrapper block
                w-60 h-60 content-center cursor-pointer	
                flex flex-col justify-center items-center"
                >見守り中</div>  
            </div>
            ${await this.getSummry()}`;
    } else {
      return /*html*/ `
      <div class="flex justify-center">
        <div onclick="views[0].view.turn = true;router() "
        class="monitor_f mt-16 w-full h-auto wrapper block
                w-60 h-60 content-center cursor-pointer	
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
