import msgbox  from "/components/massagebox.js";

let bigmsg = document.getElementById("bigmsg")
bigmsg.innerHTML = msgbox()

let scrollR = document.getElementById("scrollR")
scrollR.onclick = ()=>{

    scrollRight()
}

const scrollRight =()=>{

    let div = document.getElementById("msgimg")
    
    div.scrollBy(980,0)
    console.log("X")
}
let scrollL = document.getElementById("scrollL")
scrollL.onclick = ()=>{

    scrollLeft()
}

const scrollLeft =()=>{

    let div = document.getElementById("msgimg")
    
    div.scrollBy(-980,0)
    console.log("X")
}

let btn1  = document.getElementById("b1")
btn1.onclick= ()=>{
    firstdiv()
}
let btn2  = document.getElementById("b2")
btn2.onclick= ()=>{
    middiv()
}
let btn3  = document.getElementById("b3")
btn3.onclick= ()=>{
    lastdiv()
}

const firstdiv=()=>{
    let div1=document.getElementById("div1")
    div1.scrollIntoView()
    
    btn1.style.backgroundColor = "#333c43"
    btn2.style.backgroundColor = "#d3d3d3"
    btn3.style.backgroundColor = "#d3d3d3"
}
const middiv=()=>{
    let div2=document.getElementById("div2")
    div2.scrollIntoView()
    btn2.style.backgroundColor = "#333c43"
    btn1.style.backgroundColor = "#d3d3d3"
    btn3.style.backgroundColor = "#d3d3d3"
}
const lastdiv=()=>{
    let div3=document.getElementById("div3")
    div3.scrollIntoView()
    btn3.style.backgroundColor = "#333c43"
    btn1.style.backgroundColor = "#d3d3d3"
    btn2.style.backgroundColor = "#d3d3d3"
}

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