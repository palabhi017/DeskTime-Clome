
import nav from "../components/nav.js";
document.getElementById("navbar").innerHTML=nav();
import fot from "../components/fot.js";
document.querySelector("#footer").innerHTML=fot()

const basicfeatures=["Automatic time tracking","URL and app tracking","Integrated web timer","Productivity calculation","Idle time tracking","Project time tracking","Mobile app","User integrations"];
const proplus=["Automatic screenshots","Absence calendar","Shift Scheduling","Booking","Invoicing","Company integrations","Offline time approval","IP restrictions"]
const premiumplus=["VIP support","Personalized onboarding","Unlimited projects","Unlimited tasks","Unlimited data history","Custom API functions"]
const desktimelite=["Automatic time tracking","URL and app tracking","Integrated web timer","Mobile app"]

const BasicFeatures=(data)=> {
    
    data.forEach((el)=> {
        const p=document.createElement("p");
        p.innerText=el
        const i=document.createElement("i");
        i.setAttribute("class","fa-solid fa-check")

        const tickMarkDiv=document.createElement("div");
        tickMarkDiv.setAttribute("class","tickmark")
        tickMarkDiv.append(i,p)
        document.querySelector("#basic_features").append(tickMarkDiv)
    })
}
BasicFeatures(basicfeatures)

const ProPlus=(data)=>{

    data.forEach((el)=> {
        const p=document.createElement("p");
        p.innerText=el
        const i=document.createElement("i");
        i.setAttribute("class","fa-solid fa-check")

        const tickMarkDiv=document.createElement("div");
        tickMarkDiv.setAttribute("class","tickmark")
        tickMarkDiv.append(i,p)      
        document.querySelector("#pro_plus").append(tickMarkDiv)

    })

}
ProPlus(proplus)

const PremiumPlus= (data)=>{

    data.forEach((el)=> {
        const p=document.createElement("p");
        p.innerText=el
        const i=document.createElement("i");
        i.setAttribute("class","fa-solid fa-check")

        const tickMarkDiv=document.createElement("div");
        tickMarkDiv.setAttribute("class","tickmark")
        tickMarkDiv.append(i,p)
        document.querySelector("#premium_plus").append(tickMarkDiv)
    })
}
PremiumPlus(premiumplus)

const DeskTimeLite= (data)=> {

    data.forEach((el)=> {
        const p=document.createElement("p");
        p.innerText=el
        const i=document.createElement("i");
        i.setAttribute("class","fa-solid fa-check")

        const tickMarkDiv=document.createElement("div");
        tickMarkDiv.setAttribute("class","tickmark")        
        tickMarkDiv.append(i,p)
        document.querySelector("#deskTime_lite_2").append(tickMarkDiv)
    })
}
DeskTimeLite(desktimelite)

