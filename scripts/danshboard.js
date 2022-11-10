import container from "../components/container.js";
import exportPage from "../components/exportPage.js";

import fot from "../components/fot.js";
import ScriptLoader from "../components/script-loader.js";
import timeAlways from "../components/time-always-comp.js";
import utility from "../components/utility-tab.js";

let wsTogggle = 0
let acTogggle = 0
let bTogggle = 0



// let loader=new ScriptLoader("/scripts/time-always.js");


document.body.innerHTML=container()

let content = document.querySelector("#content");
content.innerHTML=timeAlways()

document.querySelector("#desktime").style.backgroundColor="#4EA819";
document.querySelector("#desktime").style.color="white";
document.querySelector("#desktime").style.borderRadius="10px";
desktop()




close()
document.querySelector("#desktime").onclick=(event)=>{
    content.innerHTML=""
    content.innerHTML=timeAlways()
    desktop()

  }
  document.querySelector("#projects").onclick=(event)=>{
  }



  document.querySelector("#work-sch").onclick=(event)=>{
    wsTogggle=1
    if(bTogggle==1){
        document.getElementById("popup-2").classList.toggle("active");
        bTogggle=0

    }

    if(acTogggle==1){
        document.getElementById("popup-3").classList.toggle("active");
        acTogggle=0

    }
    

    document.getElementById("popup-1").classList.toggle("active");

  }
  document.querySelector("#booking").onclick=(event)=>{
    bTogggle=1

    if(wsTogggle==1){
        document.getElementById("popup-1").classList.toggle("active");
        wsTogggle=0

    }

    if(acTogggle==1){
        document.getElementById("popup-3").classList.toggle("active");
        acTogggle=0

    }

    document.getElementById("popup-2").classList.toggle("active");

  }
  document.querySelector("#ac").onclick=(event)=>{
    acTogggle=1

    if(wsTogggle==1){
        document.getElementById("popup-1").classList.toggle("active");
        wsTogggle=0

    }

    if(bTogggle==1){
        document.getElementById("popup-2").classList.toggle("active");
        bTogggle=0

    }

    document.getElementById("popup-3").classList.toggle("active");

  }
  document.querySelector("#reports").onclick=(event)=>{
  }
  document.querySelector("#exports").onclick=(event)=>{
    exports()
  }
  document.querySelector("#settings").onclick=(event)=>{
  }




function desktop(){
    
console.log("working")
document.querySelector("#utility").innerHTML=utility()
document.querySelector("#footer").innerHTML=fot()


let user = JSON.parse(localStorage.getItem("user-data"));
let stats = document.querySelector('#stats');
const BASE_URL ="https://boiling-basin-61695.herokuapp.com"
let user_projects=[]

let user_at=0
let user_lt=0
let user_ptm=0
let user_ptw=0


getUserData()
async function getUserData(){

    let res = await fetch(`${BASE_URL}/users/${user.id}`)
    let data = await res.json();
    let actual_data = data.data
    user_projects=actual_data.projects
    user_at=actual_data.at
    user_lt=actual_data.lt
    user_ptm=actual_data.ptm
    user_ptw=actual_data.ptw
    appendData()
    console.log(actual_data.projects)
    console.log("working")


    

}


function appendData(){

    stats.innerHTML=""
    let arr =[user_at,user_lt,0,0,0,0,0,0]
    let names =["Arrival Time","Left Time","Productive Time", "Desk Time","Time At Work","Unproductive time","effectiveness","productivity"]

  for(let i =0; i<arr.length; i++){
    let card = document.createElement("div")
    let title = document.createElement("p")
    title.innerText=names[i].toLocaleUpperCase()
    let number = document.createElement("h1");
    number.innerText=arr[i]
    card.append(title,number)
    stats.append(card)
  }
  console.log("working")


}
  }

  function exports(){
    content.innerHTML=""
    content.innerHTML=exportPage()
    document.querySelector("#utility-1").innerHTML=utility()
    document.querySelector("#footer").innerHTML=fot()
    document.querySelector("#utility-1").style.width="95%"
    document.querySelector("#utility-1").style.margin="auto"

  }


  function close(){
    document.querySelector("#pop1-close").onclick=()=>{
        wsTogggle=0
        document.getElementById("popup-1").classList.toggle("active");
    }
    document.querySelector("#pop2-close").onclick=()=>{
      bTogggle=0

        document.getElementById("popup-2").classList.toggle("active");
    }
    document.querySelector("#pop3-close").onclick=()=>{
        acTogggle=0
        document.getElementById("popup-3").classList.toggle("active");
    }
    document.querySelector("#pop1-cross").onclick=()=>{
        wsTogggle=0

        document.getElementById("popup-1").classList.toggle("active");
    }
    document.querySelector("#pop2-cross").onclick=()=>{
        bTogggle=0

        document.getElementById("popup-2").classList.toggle("active");
    }
    document.querySelector("#pop3-cross").onclick=()=>{
        acTogggle=0

        document.getElementById("popup-3").classList.toggle("active");
    }

  }

 