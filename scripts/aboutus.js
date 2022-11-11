import nav from "/components/nav.js"
import fot from "/components/fot.js"

let navbar = document.getElementById("navbar")
navbar.innerHTML=nav()

let footer = document.getElementById("footer")
footer.innerHTML=fot()