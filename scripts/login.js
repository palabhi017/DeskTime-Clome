import nav from "../components/nav.js";
import fot from "../components/fot.js";

document.querySelector("#navbar").innerHTML=nav()
document.querySelector("#footer").innerHTML=fot()

let userData=[];

const BASE_URL ="https://boiling-basin-61695.herokuapp.com"
getUserBase()

async function getUserBase(){

    let res = await fetch(`${BASE_URL}/users`);
    let data = await res.json()
    // console.log(data)
    userData=data
    

}


document.querySelector("#loginBtn").onclick=()=>{
    createAccount()
}


//create account after validation
async function createAccount(){
    let obj ={
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value
    }

    if(email!=""&&password!=""){
        let status = 0
        let user ={}
        
     for(let i =0; i<userData.length; i++){
        if(userData[i].email==obj.email&&userData[i].password==obj.password){
            user=userData[i]
            status=1
            break
        }
     }

        if(status==1){
            showError("Login successful")
            localStorage.setItem("user-data",JSON.stringify(user))
            status=0
            window.location.href="../index.html"
        }else{
            showError("Incorrect email/password")
        }


    }else{
        showError("Please enter details correctly")


    }

}

function showError(error) {
    let box = document.querySelector("#alertBox");
    box.style.visibility = "visible";
    box.innerText = error;
  
    setTimeout(function () {
      box.style.visibility = "hidden";
      box.innerText = "";
    }, 2000);
  }