import fot from "/components/fot.js"
let footer = document.getElementById("footer")
footer.innerHTML=fot()

//FIRST PRODUCTIVE WORK DIV

let Product_btn=document.getElementById('productive');
let pmodal=document.getElementById('productive_div');
let span=document.getElementsByClassName('close')[0];
Product_btn.onclick=function()
{
    pmodal.style.display='block';
    // console.log('go it');
}
span.onclick=function()
{
  pmodal.style.display='none';
}
//SECOND UNPRODUCTIVE WORK DIV

let unproductive_btn=document.getElementById('unproductive');
let uModal=document.getElementById('unproductive_div');
let uSpan=document.getElementsByClassName('close')[1];
unproductive_btn.onclick=function()
{
    uModal.style.display='block';
}
uSpan.onclick=function()
{
    uModal.style.display='none';
}
//THIRD EFFECTIVE WORK DIV

let effect_btn=document.getElementById('effect');
let eModal=document.getElementById('effect_div');
let eSpan=document.getElementsByClassName('close')[2];

effect_btn.onclick=function()
{
    eModal.style.display='block';
}
eSpan.onclick=function()
{
    eModal.style.display='none';
}
//FOURTH DESKTIME WORK DIV
let desk_btn=document.getElementById('desktime');
let dModal=document.getElementById('desktime_div');
let dSpan=document.getElementsByClassName('close')[3];

desk_btn.onclick=function()
{
    dModal.style.display='block';
}
dSpan.onclick=function(){
    dModal.style.display='none';
}
//CLOSE ONCLICKING WINDOW ANYWHERE EXCEPT BOX
window.onclick=function(event)
{
    if(event.target == pmodal)
    {
        pmodal.style.display='none';
    }
    if(event.target == uModal)
    {
        uModal.style.display='none'
    }
    if(event.target == eModal)
    {
        eModal.style.display='none';
    }
    if(event.target == dModal)
    {
        dModal.style.display='none';
    }
}