window.onload=()=>{

    //do your work here

  let sidebar= document.querySelector("#side_navbar");
  let tabNames = document.querySelectorAll(".navTab>h3");
  let tabs = document.querySelectorAll(".navTab");
  let toggle = 0
  let image_div= document.querySelector("#image_div>img");

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
        image_div.style.width="100%"
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
        toggle=0



    }
   

  }


}
  




