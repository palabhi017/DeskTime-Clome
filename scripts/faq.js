//import navbar
import nav from '/components/nav.js';

let navbar=document.getElementById('navbar');
navbar.innerHTML=nav();

//import footer
import fot from '/components/fot.js';

let footer=document.getElementById('footer');
footer.innerHTML=fot();

let faq_data=[
    // 1
    {
        h2:"Getting started",
        p1:"How to set up my account (Sign up, download, launch)?",
        p2:"What is MyDeskTime page and what can I find there?",
        p3:"What systems does DeskTime support?",
        btn_faq:"VIEW ALL(24)"
    },
    // 2
    {
        h2:"General",
        p1:"How does the application work?",
        p2:"How does the Mobile app work?",
        p3:"What is Private Time?",
        btn_faq:"VIEW ALL(22)"
    },
    // 3
    {
        h2:"Settings and Accounts",
        p1:"What are the settings that can be edited for Account, Teams and even Team members?",
        p2:"How to add new categories?",
        p3:"How to set up IP restrictions for locations?",
        btn_faq:"VIEW ALL(16)"
    },
    // 4
    {
        h2:"Shifts Scheduling",
        p1:"How to create a shift?",
        p2:"How to edit or delete a shift?",
        p3:"How to approve shift requests?",
        btn_faq:"VIEW ALL(24)"
    },
    // 5
    {
        h2:"Booking",
        p1:"What is the Booking section?",
        p2:"How to set up the Booking section?",
        p3:"How does the Booking work with the Work Schedules and the Absence Calendar?",
        btn_faq:"VIEW ALL(24)"
    },
    // 6
    {
        h2:"Projects",
        p1:"What is Projects section?",
        p2:"How to create a project?",
        p3:"How to start tracking a project?",
        btn_faq:"VIEW ALL(14)"
    },
    // 7
    {
        h2:"Offline Times",
        p1:"What is offline time and how to enable/disable offline time?",
        p2:"How can I log offline time?",
        p3:"How can I approve/decline employees offline time?",
        btn_faq:"VIEW ALL(3)"
    },
    // 8
    {
        h2:"Screenshots",
        p1:"How to enable screen capture?",
        p2:"How do auto screenshots work?",
        p3:"Where can I find the taken screenshots?",
        btn_faq:"VIEW ALL(6)"
    },
    // 9
    {
        h2:"Reports",
        p1:`What is "Reports" section?`,
        p2:"How to set up email reports?",
        p3:`How "Report" section works?`,
        btn_faq:"VIEW ALL(3)"
    },
    // 10
    {
        h2:"Exports",
        p1:"How to generate an export?",
        p2:"What data does each export type show?",
        p3:"Who can create exports?",
        btn_faq:"VIEW ALL(4)"
    },
    // 11
    {
        h2:"Integrations",
        p1:"What can I do with integrations?",
        p2:"How to integrate your Project Management apps?",
        p3:"How do Calendar integrations work?",
        btn_faq:"VIEW ALL(12)"
    },
    // 12
    {
        h2:"Billing",
        p1:"How can I subscribe?",
        p2:"How much does DeskTime cost?",
        p3:"What is the per-user pricing policy?",
        btn_faq:"VIEW ALL(14)"
    },
];
let tick=`<i class="fa-solid fa-check" style="color=green"></i>`

let ques=document.getElementById('questions');
const appendQ=(data)=>{
    data.forEach(el=>{
       let card=document.createElement('div');
       card.className="Qcard"
       let h=document.createElement('h2');
       let p1=document.createElement('p');
       let p2=document.createElement('p');
       let p3=document.createElement('p');
       let button=document.createElement('button');

       h.innerHTML=el.h2;
       p1.innerHTML=tick + el.p1;
       p2.innerHTML=tick + el.p2;
       p3.innerHTML=tick + el.p3;
       button.innerHTML=el.btn_faq;

       card.append(h,p1,p2,p3,button);

       ques.append(card)

    })
};
appendQ(faq_data);
