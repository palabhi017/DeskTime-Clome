

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