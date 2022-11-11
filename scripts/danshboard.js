import container from "../components/container.js";
import exportPage from "../components/exportPage.js";

import fot from "../components/fot.js";
import project_comp from "../components/project-comp.js";
import ScriptLoader from "../components/script-loader.js";
import timeAlways from "../components/time-always-comp.js";
import utility from "../components/utility-tab.js";

let wsTogggle = 0
let acTogggle = 0
let bTogggle = 0
let userData=[]
let createToggle=0
const BASE_URL ="https://boiling-basin-61695.herokuapp.com"


// let loader=new ScriptLoader("/scripts/time-always.js");


document.body.innerHTML=container()

let content = document.querySelector("#content");
content.innerHTML=timeAlways()

document.querySelector("#desktime").style.backgroundColor="#4EA819";
document.querySelector("#desktime").style.color="white";
document.querySelector("#desktime").style.borderRadius="10px";
setUserArrivalTime()
enableLeftTime()
desktop()




close()
document.querySelector("#desktime").onclick=(event)=>{
    content.innerHTML=""
    content.innerHTML=timeAlways()
    desktop()

  }
  document.querySelector("#projects").onclick=(event)=>{
    projectsFun()
    

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
    let actual_data = data
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

  function projectsFun(){
    let nuser;
    content.innerHTML=""
    content.innerHTML=project_comp()
    document.querySelector("#footer").innerHTML=fot()
    document.querySelector("#p-utility").innerHTML=utility()

    let user = JSON.parse(localStorage.getItem("user-data"));

    getUserBase()

async function getUserBase(){

    let res = await fetch(`${BASE_URL}/users/${user.id}`);
    let data = await res.json()
    // console.log(data)
    nuser=data

    userData=data.projects
    document.querySelector("#total-projects").innerText=userData.length
    document.querySelector("#created-month").innerText=data.ptm
    document.querySelector("#created-week").innerText=data.ptw
 
    appendProjects(data.projects)

    console.log(userData)
}

  

    
    document.querySelector("#new-project-btn").onclick=()=>{
      document.getElementById("create-card").classList.toggle("active");
    
    }

     
    document.querySelector("#create-new-btn").onclick=()=>{
      let pn = document.querySelector("#pn");
      let phr = document.querySelector("#phr");
      let ec = document.querySelector("#ec");
      let eh = document.querySelector("#eh");

      let obj = {
        name:pn.value,
        phr:phr.value,
        ec:ec.value,
        eh:eh.value,
        tasks:[],
        cdate:myDate()
      }

      if(obj.name==""||obj.phr==""||obj.ec==""||obj.eh==""){

        alert("Please enter all details")

      }else{
        userData.push(obj)

        pushNewProject(userData,nuser)



      }
      
     
    }




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

    document.querySelector("#create-close").onclick=()=>{
      createToggle=0
      document.getElementById("create-card").classList.toggle("active");
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

    
    document.querySelector("#create-close-cross").onclick=()=>{
      createToggle=0

      document.getElementById("create-card").classList.toggle("active");
  }


  

  }


async function pushNewProject(data,nuser){

  let obj={
    projects:data,
    ptm: nuser.ptm+1,
    ptw: nuser.ptw+1
  }

  let res = await fetch(`${BASE_URL}/users/${nuser.id}`,{
    method:"PATCH",
    body:JSON.stringify(obj),
    headers:{
      "Content-Type":"application/json"
    }
  })

  let ndata = await res.json()
  console.log(ndata)
  document.getElementById("create-card").classList.toggle("active");
  createToggle=0
  pn.value=""
  phr.value=""
  ec.value=""
  eh.value=""
  projectsFun()




  }


  function myDate(){
 const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
return currentDate
  }



  async function setUserArrivalTime(){
    const BASE_URL ="https://boiling-basin-61695.herokuapp.com"
    let d = new Date()
    let user = JSON.parse(localStorage.getItem("user-data"));
    console.log("user-arrived")
   
    let obj={

        at:d.getHours()+":"+d.getMinutes()

    }
    let res = await fetch(`${BASE_URL}/users/${user.id}`,{
        method:"PATCH",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    })

    let data = await res.json()
    console.log(data)
    console.log("done")


  }


function enableLeftTime(){

     setInterval(async() => {

      const BASE_URL ="https://boiling-basin-61695.herokuapp.com"
      let d = new Date()
      let user = JSON.parse(localStorage.getItem("user-data"));
      console.log("user-arrived")
     
      let obj={
  
          lt:d.getHours()+":"+d.getMinutes()
  
      }
      let res = await fetch(`${BASE_URL}/users/${user.id}`,{
          method:"PATCH",
          body:JSON.stringify(obj),
          headers:{
              "Content-Type":"application/json"
          }
      })
  
      let data = await res.json()
      console.log(data)
      console.log("done")
      
    }, 60000);

  }

  function appendProjects(data){

    let allProjects=document.querySelector("#all-projects");
    allProjects.innerHTML=""

    data.forEach((el,index) => {

      let div = document.createElement("div");
      let checkBox = document.createElement("input");
      checkBox.setAttribute("type","checkbox");
      console.log(el.name)
      let pname = document.createElement("p");
      pname.innerText=el.name
      let date = document.createElement("p");
      date.innerText=el.cdate
      let logo = document.createElement("img");
      logo.src="../assets/logo.png"
      let fdiv= document.createElement("div");
      fdiv.setAttribute("id","fdiv");
      fdiv.append(checkBox,pname)
      let taskCount = document.createElement("p")
      taskCount.innerText=el.tasks.length
      let sdiv = document.createElement("div");
      sdiv.setAttribute("id","sdiv");

      let editIcon = document.createElement("i");
      editIcon.setAttribute("class","fa-solid fa-pen-to-square");
      let dIcon = document.createElement("i");
      dIcon.setAttribute("class","fa-solid fa-trash-can");
      sdiv.append(editIcon,dIcon)
      div.append(fdiv,date,logo,taskCount,sdiv)
      allProjects.append(div)




      
    });
    


  }