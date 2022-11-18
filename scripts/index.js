import msgbox  from "/components/massagebox.js";
import fot from "../components/fot.js";
import nav from "../components/nav.js";
import Presenter from "../Presenter/presenter.js"


document.querySelector("#navbar").innerHTML=nav()
document.querySelector("#footer").innerHTML=fot()


//Do your all index.html functionalities below



let bigmsg = document.getElementById("bigmsg")
bigmsg.innerHTML = msgbox()

let q1 = document.getElementById("q1").onclick = ()=>{
    ans1q()
}
let q2 = document.getElementById("q2").onclick = ()=>{
    ans2q()
}
let q3 = document.getElementById("q3").onclick = ()=>{
    ans3q()
}
let q4 = document.getElementById("q4").onclick = ()=>{
    ans4q()
}

const ans1q=()=>{

    let ans1  = document.getElementById("ans1")

    if(ans1.style.display=="block"){
        ans1.style.display="none"
    }
    else{
        ans1.style.display="block"
    }
}
const ans2q=()=>{

    let ans2  = document.getElementById("ans2")
    if(ans2.style.display=="block"){
        ans2.style.display="none"
    }
    else{
        ans2.style.display="block"
    }
}
const ans3q=()=>{

    let ans3  = document.getElementById("ans3")
    if(ans3.style.display=="block"){
        ans3.style.display="none"
    }
    else{
        ans3.style.display="block"
    }
}
const ans4q=()=>{

    let ans4  = document.getElementById("ans4")
    if(ans4.style.display=="block"){
        ans4.style.display="none"
    }
    else{
        ans4.style.display="block"
    }
}
//code for to append navbar ( to use this navbar just make your script type = "module" in html file and paste below code)

