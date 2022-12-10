import nav from "../components/nav.js";
import fot from "../components/fot.js";
import Presenter from "../Presenter/presenter.js";
import { BaseUrl } from "./base_url.js";



document.querySelector("#navbar").innerHTML = nav();
document.querySelector("#footer").innerHTML = fot();
isUserAvailable();

let userData = [];

const BASE_URL = BaseUrl();
getUserBase();

async function getUserBase() {
  let res = await fetch(`${BASE_URL}/users`);
  let data = await res.json();
  // console.log(data)
  userData = data;
}

//write your code here
let ptoggle = 0;

// event listner on sigup btn
document.querySelector("#registerBtn").onclick = () => {
  createAccount();
};

//create account after validation
async function createAccount() {
  let obj = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    projects: [],
    at: 0,
    lt: 0,
    ptm: 0,
    ptw: 0,
  };

  if (checkValdation(obj.email, obj.password, obj.name)) {
    let status = 0;

    for (let i = 0; i < userData.length; i++) {
      if (userData[i].email == obj.email) {
        status = 1;
        break;
      }
    }

    if (status == 1) {
      showError("Account already exist");
      status = 0;
    } else {
      let res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let data = await res.json();
      console.log(data);
      window.location.href = "../login.html";
    }
  } else {
    console.log("Validation falied");
  }
}

// Realtime check email validation
document.querySelector("#email").addEventListener("input", checkEmail);

function checkEmail(event) {
  let ec =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (ec.test(this.value)) {
    this.style.border = "2px solid green";
    ptoggle = 1;
    console.log(ptoggle);
  } else {
    this.style.border = "2px solid red";
    showError("Invalid email format");
    ptoggle = 0;
    console.log(ptoggle);
  }
}

// Realtime check password validation

document.querySelector("#password").addEventListener("input", checkP);
function checkP(event) {
  let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (re.test(this.value)) {
    this.style.border = "2px solid green";
    ptoggle = 1;
    console.log(ptoggle);
  } else {
    this.style.border = "2px solid red";
    showError(
      "Password should be in like Captital letters, small letters, special charcters, numbers"
    );
    ptoggle = 0;
    console.log(ptoggle);
  }
}

//validation for null value, email and password format

function checkValdation(e, p, cp) {
  if (e == "" || p == "" || cp == "") {
    showError("Invalid details");
  } else if (p.length < 8) {
    showError(
      "Password must be of 8 characters including special character,numbers,alphabets"
    );
  } else if (ptoggle == 0) {
    showError(
      "Password should be in like Captital letters, small letters, special charcters, numbers"
    );
  } else {
    console.log(ptoggle);
    return true;
  }
}

//custom alterbox for showing error

function showError(error) {
  let box = document.querySelector("#alertBox");
  box.style.visibility = "visible";
  box.innerText = error;

  setTimeout(function () {
    box.style.visibility = "hidden";
    box.innerText = "";
  }, 2000);
}

function isUserAvailable() {
  let presence = JSON.parse(localStorage.getItem("user-data")) || 0;
  if (presence == 0) {
    return;
  } else {
    window.location.href = "../danshboard.html";
  }
}

