window.onload=()=>{

  

  let sidebar= document.querySelector("#side_navbar");
  let tabNames = document.querySelectorAll(".navTab>h3");
  let tabs = document.querySelectorAll(".navTab");
  let toggle = 0
  let image_div= document.querySelector("#image_div>img");
  let star= document.querySelectorAll(".fa-star");
  
let content = document.querySelector("#content");
  isUserAvailable();

  document.querySelector("#image_div>img").onclick = () => {
    window.location.reload();
  };

  document.querySelector("#logout").onclick = () => {
    localStorage.removeItem("user-data");
    window.location.href = "../index.html";
  };

  function isUserAvailable() {
    let presence = JSON.parse(localStorage.getItem("user-data")) || 0;
    if (presence == 0) {
      window.location.href = "../login.html";
      return;
    } else {
      setUser(presence);
    }
  }

  function setUser(user) {
    document.querySelector("#username").innerText = user.name;
    document.querySelector("#icon").innerText = user.name
      .substring(0, 1)
      .toUpperCase();
  }



  document.querySelector("#menu").onclick=()=>{

    if(toggle==0){
     sidebar.style.animation="shrink 0.2s"
     sidebar.style.maxWidth="70px"
        tabNames.forEach(el => {
    
            el.style.display="none"
            
        });
        tabs.forEach(el => {
    
            el.style.padding="8px"
            
        });

        star.forEach(el=>{
          el.style.marginLeft="-8px"
          el.style.backgroundColor = "transparent";

        })
        image_div.src="../assets/Screenshot 2022-11-10 084832.png"
        image_div.style.margin="16px"
       
        toggle=1
        
    }else{

      sidebar.style.animation="expand 0.2s"
      sidebar.style.maxWidth="300px"
        tabNames.forEach(el => {
    
            el.style.display="block"
            
        });
        tabs.forEach(el => {

            el.style.padding="0px 8px"
            
        });
        star.forEach(el=>{
          el.style.marginLeft="0px"
          el.style.backgroundColor = "#4EA819";
        })
        image_div.src="../assets/Screenshot 2022-11-09 111625.png"
        image_div.style.width="50%"

        toggle=0



    }
   

  }

  tabs.forEach(el=>{
    el.addEventListener("click",function(){
     tabs.forEach(el2=>{
      el2.style.backgroundColor="transparent"
      el2.style.color="rgb(148, 148, 148)"
     })
     
     el.style.backgroundColor="#4EA819"
     el.style.color="white"
     el.style.borderRadius="10px"
    })
  })


 









}
  
    //do your work here

    // let loader=new ScriptLoader("/scripts/time-always.js");
    // loader.load("ta").then(e=>console.log(e)).catch(e=>console.error(e))

