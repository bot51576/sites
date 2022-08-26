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
    this.notifiList = [
      { id: 0, title: "Title", date: "2022/01/01", text: "Goo" },
    ];
  }

  async getSummry() {
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
        ',<div class="flex justify-center items-center mx-auto mt-7 py-3">
          <div class="flex mx-3 -m-4 rounded-lg bg-blue-50 flex flex-wrap -m-4"> 
              <div class="w-fit md:w-1/2 p-2">
                  <h2 class="text-lg text-gray-900 font-medium">通知タイトル</h2>
                  <p class="text-sm text-gray-400">2022/1/01</p>
                  <p class="text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
          </div>
        </div>
        <div class="flex justify-center items-center mx-auto mt-7">
          <div class="flex mx-3 -m-4 rounded-lg bg-blue-50 flex flex-wrap -m-4"> 
              <div class="w-fit md:w-1/2 p-2">
                  <h2 class="text-lg text-gray-900 font-medium">通知タイトル</h2>
                  <p class="text-sm text-gray-400">2022/1/01</p>
                  <p class="text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
          </div>
        </div>
    `;
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
            </div>${await this.getSummry()}`;
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
    return `<h1>遊ぶを選ぶ</h1>
            
      `;
  }
}

class Connect extends ViewTemp {
  constructor(params) {
    super(params);
    this.codeIdF = 356;
    this.codeIdE = 234;
  }
  async getCode() {
    this.codeIdF = 234;
    this.codeIdE = 565;
  }
  async getHtml() {
    this.setState("Connect", 2);
    this.getCode();
    return /*html*/ `<h1 class="text-2xl text-center mt-7 font-medium">
                      認証コード
                    </h1>
            <div class="mb-20 mt-20 w-40 h-20 flex justify-center items-center mx-auto text-7xl">
              <div class="">
                <span class="mr-5">${views[2].view.codeIdF}</span><span class="ml-5">${views[2].view.codeIdE}</span>
              </div>
            </div>
            <div class="flex justify-center">
              <button type="button" 
              class="w-448 h-20 text-white bg-gradient-to-r from-cyan-500 to-blue-500 items-center content-center
                      hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                      focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium 
                      rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-lg"
                      onclick="views[2].view.getHtml();router();"
                      >認証コードを発行</button>
            </div>
            `;
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
