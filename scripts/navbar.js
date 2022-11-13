

    window.onload=()=>{
        isUserAvailable()
    // do your all navbar functionalities here 

    document.querySelector("#logo").onclick=()=>{
        window.location.href="../index.html"
    }

    //for login btn
    document.querySelector("#login_btn").onclick=()=>{
        window.location.href="../login.html"
    }

    //for register btn
    document.querySelector("#signup_btn").onclick=()=>{
        if(document.querySelector("#signup_btn").innerText=="SIGN UP"){
            window.location.href="../register.html"


        }else{
            window.location.href="../danshboard.html"
            // setUserArrivalTime()

        }
    }

    function isUserAvailable(){
        let presence = JSON.parse(localStorage.getItem("user-data"))||0
        if(presence==0){
            return
        }else{
            document.querySelector("#signup_btn").innerText= "DASHBOARD"

            document.querySelector("#login_btn").style.display="none"

            
        }
      }


 
    }