import container from "../components/container.js";
import exportPage from "../components/exportPage.js";

import fot from "../components/fot.js";
import project_comp from "../components/project-comp.js";
import report_comp from "../components/report-comp.js";
import ScriptLoader from "../components/script-loader.js";
import timeAlways from "../components/time-always-comp.js";
import utility from "../components/utility-tab.js";
import { BaseUrl } from "./base_url.js";


let wsTogggle = 0;
let acTogggle = 0;
let bTogggle = 0;
let userData = [];
let taskToggle = 0;
let createToggle = 0;

let id;
let projectsData = [];
const BASE_URL = BaseUrl();

// let loader=new ScriptLoader("/scripts/time-always.js");

document.body.innerHTML = container();

let content = document.querySelector("#content");
content.innerHTML = timeAlways();

document.querySelector("#desktime").style.backgroundColor = "#4EA819";
document.querySelector("#desktime").style.color = "white";
document.querySelector("#desktime").style.borderRadius = "10px";
setUserArrivalTime();
enableLeftTime();
desktop();
webTimer();
let desc = document.querySelector("#desc");
let selectProject = document.querySelector("#select-project");
let selectPref = document.querySelector("#select-pref");
let taskName = document.querySelector("#task-name");

close();
document.querySelector("#desktime").onclick = (event) => {
  content.innerHTML = "";
  content.innerHTML = timeAlways();
  desktop();
  setStats()
};
document.querySelector("#projects").onclick = (event) => {
  projectsFun();
};

document.querySelector("#work-sch").onclick = (event) => {
  wsTogggle = 1;
  if (bTogggle == 1) {
    document.getElementById("popup-2").classList.toggle("active");
    bTogggle = 0;
  }

  if (acTogggle == 1) {
    document.getElementById("popup-3").classList.toggle("active");
    acTogggle = 0;
  }

  document.getElementById("popup-1").classList.toggle("active");
};
document.querySelector("#booking").onclick = (event) => {
  bTogggle = 1;

  if (wsTogggle == 1) {
    document.getElementById("popup-1").classList.toggle("active");
    wsTogggle = 0;
  }

  if (acTogggle == 1) {
    document.getElementById("popup-3").classList.toggle("active");
    acTogggle = 0;
  }

  document.getElementById("popup-2").classList.toggle("active");
};
document.querySelector("#ac").onclick = (event) => {
  acTogggle = 1;

  if (wsTogggle == 1) {
    document.getElementById("popup-1").classList.toggle("active");
    wsTogggle = 0;
  }

  if (bTogggle == 1) {
    document.getElementById("popup-2").classList.toggle("active");
    bTogggle = 0;
  }

  document.getElementById("popup-3").classList.toggle("active");
};
document.querySelector("#reports").onclick = (event) => {
  reports();
};
document.querySelector("#exports").onclick = (event) => {
  exports();
};
document.querySelector("#settings").onclick = (event) => {};

function desktop() {
  console.log("working");
  document.querySelector("#utility").innerHTML = utility();
  document.querySelector("#footer").innerHTML = fot();

  let user = JSON.parse(localStorage.getItem("user-data"));
  let stats = document.querySelector("#stats");
  const BASE_URL = BaseUrl();
  let user_projects = [];

  let user_at = 0;
  let user_lt = 0;
  let user_ptm = 0;
  let user_ptw = 0;

  getUserData();
  async function getUserData() {
    let res = await fetch(`${BASE_URL}/users/${user.id}`);
    let data = await res.json();
    let actual_data = data;
    user_projects = actual_data.projects;
    user_at = actual_data.at;
    user_lt = actual_data.lt;
    user_ptm = actual_data.ptm;
    user_ptw = actual_data.ptw;
    appendData();
    console.log(actual_data.projects);
    projectsData = actual_data.projects;
    addTasksData(projectsData);

    console.log("working");
  }

  function appendData() {
    stats.innerHTML = "";

    

    function returnAMPM(time){
    try {
      let x = time.split(":");
      if(x[0]>=12){
       return " PM"
 
      }else{
       return " AM"
      }
      
    } catch (error) {
      return ""
    }

    }

    let arr = [user_at+returnAMPM(user_at), user_lt+returnAMPM(user_lt), 0, 0, 0, 0, 0, 0];
    let names = [
      "Arrival Time",
      "Left Time",
      "Productive Time",
      "Desk Time",
      "Time At Work",
      "Unproductive time",
      "effectiveness",
      "productivity",
    ];

    let mkid = 0;

    for (let i = 0; i < arr.length; i++) {
      let card = document.createElement("div");
      let title = document.createElement("p");
      title.innerText = names[i].toLocaleUpperCase();
      let number = document.createElement("h1");
      number.innerText = arr[i];
      number.setAttribute("id", `${"d" + mkid}`);
      card.append(title, number);
      stats.append(card);
      mkid++;
    }
    console.log("working");
  }

  

  document.querySelector("#date").innerHTML=fullDateFormat()
  utilityContols()

}

function exports() {
  content.innerHTML = "";
  content.innerHTML = exportPage();
  document.querySelector("#utility-1").innerHTML = utility();
  document.querySelector("#footer").innerHTML = fot();
  document.querySelector("#utility-1").style.width = "95%";
  document.querySelector("#utility-1").style.margin = "auto";
  utilityContols()
}

function projectsFun() {
  let nuser;
  content.innerHTML = "";
  content.innerHTML = project_comp();
  document.querySelector("#footer").innerHTML = fot();
  document.querySelector("#p-utility").innerHTML = utility();

  let user = JSON.parse(localStorage.getItem("user-data"));

  getUserBase();

  async function getUserBase() {
    let res = await fetch(`${BASE_URL}/users/${user.id}`);
    let data = await res.json();
    // console.log(data)
    nuser = data;

    userData = data.projects;
    document.querySelector("#total-projects").innerText = userData.length;
    document.querySelector("#created-month").innerText = data.ptm;
    document.querySelector("#created-week").innerText = data.ptw;

    appendProjects(data.projects);

    console.log(userData);

    //filter and sort

    document.querySelector("#project-name").addEventListener("input", function () {
        let x = userData.filter((el) => {
          if (
            el.name
              .toLowerCase()
              .includes(document.querySelector("#project-name").value.toLowerCase())
          ) {
            return el;
          }
        });

        appendProjects(x);
      });


      document.querySelector("#date-created").addEventListener("input", function () {
        let x = userData.filter((el) => {
          if (
            el.cdate
              .toLowerCase()
              .includes(document.querySelector("#date-created").value)
          ) {
            return el;
          }
        });

        appendProjects(x);
      });


      // document.querySelector("#tasks").addEventListener("input", function () {
      //  userData.forEach((el) => {
      //     // console.log(el)

      //   let x = el.tasks.filter(el2=>{
      //       if (
      //         el2.taskName
      //           .toLowerCase()
      //           .includes(document.querySelector("#tasks").value)
      //       ) {


      //         return el
      //       }

      //     })
      //     appendProjects(x);


      //   });



      // });
  }

  document.querySelector("#new-project-btn").onclick = () => {
    document.getElementById("create-card").classList.toggle("active");
  };

  document.querySelector("#create-new-btn").onclick = () => {
    let pn = document.querySelector("#pn");
    let phr = document.querySelector("#phr");
    let ec = document.querySelector("#ec");
    let eh = document.querySelector("#eh");

    let obj = {
      name: pn.value,
      phr: phr.value,
      ec: ec.value,
      eh: eh.value,
      tasks: [],
      cdate: myDate(),
    };

    if (obj.name == "" || obj.phr == "" || obj.ec == "" || obj.eh == "") {
      alert("Please enter all details");
    } else {
      userData.push(obj);

      pushNewProject(userData, nuser);
    }
  };

  utilityContols()
}

function close() {
  document.querySelector("#pop1-close").onclick = () => {
    wsTogggle = 0;
    document.getElementById("popup-1").classList.toggle("active");
  };
  document.querySelector("#pop2-close").onclick = () => {
    bTogggle = 0;

    document.getElementById("popup-2").classList.toggle("active");
  };
  document.querySelector("#pop3-close").onclick = () => {
    acTogggle = 0;
    document.getElementById("popup-3").classList.toggle("active");
  };

  document.querySelector("#create-close").onclick = () => {
    createToggle = 0;
    document.getElementById("create-card").classList.toggle("active");
  };
  document.querySelector("#pop1-cross").onclick = () => {
    wsTogggle = 0;

    document.getElementById("popup-1").classList.toggle("active");
  };

  document.querySelector("#pop2-cross").onclick = () => {
    bTogggle = 0;

    document.getElementById("popup-2").classList.toggle("active");
  };
  document.querySelector("#pop3-cross").onclick = () => {
    acTogggle = 0;

    document.getElementById("popup-3").classList.toggle("active");
  };

  document.querySelector("#create-close-cross").onclick = () => {
    createToggle = 0;

    document.getElementById("create-card").classList.toggle("active");
  };
}

async function pushNewProject(data, nuser) {
  let obj = {
    projects: data,
    ptm: nuser.ptm + 1,
    ptw: nuser.ptw + 1,
  };

  let res = await fetch(`${BASE_URL}/users/${nuser.id}`, {
    method: "PATCH",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let ndata = await res.json();
  console.log(ndata);
  document.getElementById("create-card").classList.toggle("active");
  createToggle = 0;
  pn.value = "";
  phr.value = "";
  ec.value = "";
  eh.value = "";
  projectsFun();
}

function myDate() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  return currentDate;
}

async function setUserArrivalTime() {
  const BASE_URL = BaseUrl();
  let d = new Date();
  let user = JSON.parse(localStorage.getItem("user-data"));
  console.log("user-arrived");

  let obj = {
    at: d.getHours() + ":" + d.getMinutes(),
  };
  let res = await fetch(`${BASE_URL}/users/${user.id}`, {
    method: "PATCH",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  console.log(data);
  console.log("done");
}

function enableLeftTime() {
  setInterval(async () => {
    const BASE_URL = BaseUrl();
    let d = new Date();
    let user = JSON.parse(localStorage.getItem("user-data"));
    console.log("user-arrived");

    let obj = {
      lt: d.getHours() + ":" + d.getMinutes(),
    };
    let res = await fetch(`${BASE_URL}/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
    console.log("done");
  }, 60000);
}

function appendProjects(data) {
  let allProjects = document.querySelector("#all-projects");
  allProjects.innerHTML = "";

  data.forEach((el, index) => {
    let div = document.createElement("div");
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    console.log(el.name);
    let pname = document.createElement("p");
    pname.innerText = el.name;
    let date = document.createElement("p");
    date.innerText = el.cdate;
    let logo = document.createElement("img");
    logo.src = "../assets/logo.png";
    let fdiv = document.createElement("div");
    fdiv.setAttribute("id", "fdiv");
    fdiv.append(checkBox, pname);
    let taskCount = document.createElement("p");
    taskCount.innerText = el.tasks.length;
    let sdiv = document.createElement("div");
    sdiv.setAttribute("id", "sdiv");

    let editIcon = document.createElement("i");
    editIcon.setAttribute("class", "fa-solid fa-pen-to-square");
    editIcon.style.display="none"
    let dIcon = document.createElement("i");
    dIcon.style.cursor="pointer"

    dIcon.setAttribute("class", "fa-solid fa-trash-can");



    dIcon.onclick=async()=>{


      data.splice(index,1);
      let user = JSON.parse(localStorage.getItem("user-data"));
      let res=await fetch(`${BASE_URL}/users/${user.id}`)
      let fetchedData = await res.json();
      fetchedData.projects=data;
      fetchedData.ptm=fetchedData.ptm-1
      fetchedData.ptw=fetchedData.ptw-1

      let newRes = await fetch(`${BASE_URL}/users/${user.id}`,{
        method:"PATCH",
        body:JSON.stringify(fetchedData),
        headers:{
          "Content-Type":"application/json"
        }
      })

      let result = await newRes.json();
      // appendProjects(result.projects)
      projectsFun()

      

    }

    sdiv.append(editIcon, dIcon);
    div.append(fdiv, date, logo, taskCount, sdiv);
    allProjects.append(div);
  });
}

function reports() {
  content.innerHTML = "";
  content.innerHTML = report_comp();
  let footer = document.getElementById("footer");
  footer.innerHTML = fot();

  //FIRST PRODUCTIVE WORK DIV

  let Product_btn = document.getElementById("productive");
  let pmodal = document.getElementById("productive_div");
  let span = document.getElementsByClassName("close-view-card")[0];
  document.querySelector("#date").innerText=fullDateFormat()
  Product_btn.onclick = function () {
    pmodal.style.display = "block";
    // console.log('go it');
  };
  span.onclick = function () {
    pmodal.style.display = "none";
  };
  //SECOND UNPRODUCTIVE WORK DIV

  let unproductive_btn = document.getElementById("unproductive");
  let uModal = document.getElementById("unproductive_div");
  let uSpan = document.getElementsByClassName("close-view-card")[1];
  unproductive_btn.onclick = function () {
    uModal.style.display = "block";
  };
  uSpan.onclick = function () {
    uModal.style.display = "none";
  };
  //THIRD EFFECTIVE WORK DIV

  let effect_btn = document.getElementById("effect");
  let eModal = document.getElementById("effect_div");
  let eSpan = document.getElementsByClassName("close-view-card")[2];

  effect_btn.onclick = function () {
    eModal.style.display = "block";
  };
  eSpan.onclick = function () {
    eModal.style.display = "none";
    console.log("clicked");
  };
  //FOURTH DESKTIME WORK DIV
  let desk_btn = document.getElementById("desktime-card");
  let dModal = document.getElementById("desktime_div");
  let dSpan = document.getElementsByClassName("close-view-card")[3];

  desk_btn.onclick = function () {
    dModal.style.display = "block";
  };
  dSpan.onclick = function () {
    dModal.style.display = "none";
  };
  //CLOSE ONCLICKING WINDOW ANYWHERE EXCEPT BOX
  window.onclick = function (event) {
    if (event.target == pmodal) {
      pmodal.style.display = "none";
    }
    if (event.target == uModal) {
      uModal.style.display = "none";
    }
    if (event.target == eModal) {
      eModal.style.display = "none";
    }
    if (event.target == dModal) {
      dModal.style.display = "none";
    }
  };
}

function addTasksData() {
  selectProject.innerHTML = "";
  console.log(projectsData);
  projectsData.forEach((el) => {
    let option = document.createElement("option");
    option.setAttribute("value", `${el.name}`);
    option.innerText = el.name;
    selectProject.append(option);
  });
}

async function sendData(l_hours, l_minutes, l_seconds) {
  function getRecordedTime(h, m, s) {
    return { h, m, s };
  }

  let toSendTask = JSON.parse(localStorage.getItem("current-task")) || {};
  // console.log(toSendTask)
  toSendTask.totalTime = getRecordedTime(
    +l_hours.innerText,
    +l_minutes.innerText,
    +l_seconds.innerHTML
  );

  let data = await getCurrentUserData();
  data.projects.forEach((el) => {
    if (el.name == selectProject.value) {
      el.tasks.push(toSendTask);
      return;
    }
  });

  let res = await fetch(`${BASE_URL}/users/${data.id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(await res.json());
  localStorage.removeItem("current-task");
}

function webTimer() {
  let l_hours = document.querySelector("#hour");
  let l_minutes = document.querySelector("#minute");
  let l_seconds = document.querySelector("#second");
  let watchToggle = 0;
  let playBtn = document.querySelector("#play");
  playBtn.onclick = () => {
    if (watchToggle == 0) {
      playBtn.setAttribute("class", "fa-solid fa-stop");
      playBtn.style.color = "red";
      stopWatch();

      document.getElementById("timer-card").classList.toggle("active");
    } else {
      stop();

      if (taskToggle == 1) {
        sendData(l_hours, l_minutes, l_seconds);
        taskToggle = 0;
      } else {
        document.getElementById("timer-card").classList.toggle("active");
      }

      reset();
    }
  };

  document.querySelector("#timer-close-cross").onclick = () => {
    document.getElementById("timer-card").classList.toggle("active");
    stop();
    reset();
  };

  document.querySelector("#timer-close").onclick = () => {
    document.getElementById("timer-card").classList.toggle("active");
    stop();
    reset();
  };

  document.querySelector("#add-new-btn").onclick = async () => {
    if (checkValidation()) {
      taskToggle = 1;
      let task = {
        desc: desc.value,
        projectName: selectProject.value,
        taskName: taskName.value,
        pref: selectPref.value,
        cdate: myDate(),
        totalTime: null,
      };

      localStorage.setItem("current-task", JSON.stringify(task));
      document.getElementById("timer-card").classList.toggle("active");
    } else {
      alert("Enter all details");
    }
  };

  function checkValidation() {
    if (
      selectProject.value == null ||
      desc.value == "" ||
      taskName.value == "" ||
      selectPref.value == ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  function stop() {
    playBtn.setAttribute("class", "fa-solid fa-play");
    playBtn.style.color = "green";

    clearInterval(id);
    watchToggle = 0;
  }

  function reset() {
    l_hours.innerText = "00";
    l_minutes.innerText = "00";
    l_seconds.innerText = "00";
  }

  function stopWatch() {
    watchToggle = 1;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    id = setInterval(() => {
      seconds++;
      console.log();
      if (String(seconds).length == 1) {
        // console.log("yes")
        l_seconds.innerText = `0${seconds}`;
      } else {
        l_seconds.innerText = seconds;
      }

      if (seconds == 60) {
        seconds = 0;
        l_seconds.innerText = `0${seconds}`;
        minutes++;
        if (String(minutes).length == 1) {
          // console.log("yes")
          l_minutes.innerText = `0${minutes}`;
        } else {
          l_minutes.innerText = minutes;
        }
      }

      if (minutes == 60) {
        minutes = 0;
        l_minutes.innerText = `0${minutes}`;
        hours++;
        if (String(hours).length == 1) {
          // console.log("yes")
          l_hours.innerText = `0${hours}`;
        } else {
          l_hours.innerText = hours;
        }
      }
    }, 1000);
  }

  dragElement(document.querySelector("#drag"));

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
async function getCurrentUserData() {
  let user = JSON.parse(localStorage.getItem("user-data")) || {};
  let res = await fetch(`${BASE_URL}/users/${user.id}`);
  let data = await res.json();
  let actual_data = data;
  return actual_data;
}



async function setStats() {
  let productive = [];
let unproductive = [];
let neutral = [];
  let proTime=null
  let unproTime =null
  let neuTime=null
  let finalProductiveTime =null
  let finalUnproductiveTime=null
  let finalNeutralTime =null
  let totalUnproductiveTime
  let totalProductiveTime=null
  let totalNeutralTime=null
  let finalDeskTime=null
  let productivityPercentage =null
  let data = await getCurrentUserData();

  let taskData = data.projects;

  taskData.forEach((el, index) => {
    el.tasks.forEach((task) => {
      if (task.pref == "productive") {
        productive.push(task);
      } else if (task.pref == "unproductive") {
        unproductive.push(task);
      } else {
        neutral.push(task);
      }
    });
  });

  // console.log(productive,unproductive,neutral)

  totalProductiveTime = appendTask("#productive_apps>div", productive);

  totalUnproductiveTime = appendTask(
    "#unproductive_apps>div",
    unproductive
  );

   totalNeutralTime = appendTask("#neutral_apps>div", neutral);

  proTime= calculateAccurateTime(
    totalProductiveTime.th,
    totalProductiveTime.tm,
    totalProductiveTime.ts
  );
 unproTime= calculateAccurateTime(
    totalUnproductiveTime.th,
    totalUnproductiveTime.tm,
    totalUnproductiveTime.ts
  );
neuTime = calculateAccurateTime(
    totalNeutralTime.th,
    totalNeutralTime.tm,
    totalNeutralTime.ts
  );

  finalProductiveTime= `${proTime.h}h ${proTime.m}m ${proTime.s}s`;
  finalUnproductiveTime = `${unproTime.h}h ${unproTime.m}m ${unproTime.s}s`;
 finalNeutralTime = `${neuTime.h}h ${neuTime.m}m ${neuTime.s}s`;
   finalDeskTime = calculateAccurateTime(
    proTime.h + unproTime.h + neuTime.h,
    proTime.m + unproTime.m + neuTime.m,
    proTime.s + unproTime.s + neuTime.s
  );

  document.querySelector("#pa-time").innerHTML = finalProductiveTime;
  document.querySelector("#upa-time").innerHTML = finalUnproductiveTime;
  document.querySelector("#na-time").innerHTML = finalNeutralTime;
  document.querySelector("#d2").innerHTML = finalProductiveTime;

  document.querySelector(
    "#d3"
  ).innerHTML = `${finalDeskTime.h}h ${finalDeskTime.m}m ${finalDeskTime.s}s`;
  document.querySelector("#d4").innerHTML = finalProductiveTime;
  document.querySelector("#d5").innerHTML = finalUnproductiveTime;
  document.querySelector("#d6").innerHTML =
    (Math.random() * 100).toFixed(1) + " %";

  productivityPercentage =
    (((proTime.h * 60 + proTime.m + proTime.s / 60) /
      (finalDeskTime.h * 60 + finalDeskTime.m + finalDeskTime.s / 60)) *
    100)||0
  document.querySelector("#d7").innerHTML =
    productivityPercentage.toFixed(1) + " %";

  console.log(proTime.h, proTime.m, proTime.s);
  console.log(unproTime.h, unproTime.m, unproTime.s);
  console.log(neuTime.h, neuTime.m, neuTime.s);
}

setStats();

function appendTask(id, data) {
  let th = 0;
  let tm = 0;
  let ts = 0;

  let container = document.querySelector(`${id}`);
  container.innerHTML = "";
  data.forEach((el) => {
    th += +el.totalTime.h;
    tm += +el.totalTime.m;
    ts += +el.totalTime.s;
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = "../assets/logo.png";
    let tname = document.createElement("h6");
    tname.innerText = el.taskName;

    let pname = document.createElement("p");
    pname.innerText = el.projectName;

    let tt = document.createElement("p");
    tt.innerHTML = `${el.totalTime.h} <span>h</span> ${el.totalTime.m} <span>m</span> ${el.totalTime.s} <span>s</span>`;

    div.append(image, pname, tname, tt);
    container.append(div);
  });

  return { th, tm, ts };
}

function calculateAccurateTime(h, m, s) {
  if ((h == 0, m == 0 && s < 60)) {
    return { h: 0, m: 0, s: s };
  }

  let hrs = 0;
  let min = 0;
  while (m >= 60) {
    m = m - 60;
    hrs++;
  }

  console.log(m);

  while (s >= 60) {
    s = s - 60;
    min++;
  }

  h += hrs;
  m += min;
  return { h, m, s };
}


function fullDateFormat(){
  let Date =myDate()
  let x=Date.split("-");
  console.log(x)
  let obj={
    "1":"January",
    "2":"Februrary",
    "3":"March",
    "4":"April",
    "5":"May",
    "6":"June",
    "7":"July",
    "8":"August",
    "9":"September",
    "10":"October",
    "11":"November",
    "12":"December"
  }

  let makeDate = `${obj[x[1]]} ${x[0]}, ${x[2]}`
  return makeDate
}

function utilityContols(){
  document.querySelector("#stt").onclick=()=>{
    document.querySelector("#play").click()

  }

  document.querySelector("#create").onclick=()=>{
    document.querySelector("#projects").click()
    setTimeout(() => {
      document.querySelector("#new-project-btn").click()

      
    }, 500);

  }
  document.querySelector("#desktop-app").onclick=()=>{
    window.location.href="https://desktime.com/download"

  }

  document.querySelector("#wt").onclick=()=>{
    document.querySelector("#play").click()

  }


}