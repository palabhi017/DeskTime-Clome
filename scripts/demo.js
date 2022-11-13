//import navbar
import nav from '/components/nav.js';

let navbar=document.getElementById('navbar');
navbar.innerHTML=nav();

//import footer
import fot from '/components/fot.js';

let footer=document.getElementById('footer');
footer.innerHTML=fot();


// <!-- Demo 4 cards -->
// <!-- import scrolling cards -->
import msgbox from '/components/massagebox.js';

let scroll_box=document.getElementById('bigmsg');
scroll_box.innerHTML=msgbox();



  


