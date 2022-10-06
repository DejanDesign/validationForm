alert('correct user: new_user & correct password: 123456789')

let checkFirst = document.getElementsByClassName("checkFirst");
let checkSecond = document.getElementsByClassName("checkSecond");
let errFirst = document.getElementsByClassName("errFirst");
let errSecond = document.getElementsByClassName("errSecond");

const user = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorDiv = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (user.value === "" && password.value === "") {
    messages.push("* please, enter username");
    messages.push("* please, enter password");
    errFirst[0].style.display = "block";
    errFirst[0].style.color = "red";
    errSecond[0].style.display = "block";
    errSecond[0].style.color = "red";
    user.style.borderColor = "red";
    password.style.borderColor = "red";
  }

  if (user.value === "new_user" && password.value === "123456789") {
    user.style.borderColor = "green";
    password.style.borderColor = "green";
    checkFirst[0].style.display = "block";
    checkFirst[0].style.color = "green";
    checkSecond[0].style.display = "block";
    checkSecond[0].style.color = "green";
    messages.push("Successful login");
    e.preventDefault();
  }
  if (user.value !== "new_user" && user.value !== "") {
    user.style.borderColor = "red";
    messages.push("* please, enter valid username");
    errFirst[0].style.display = "block";
    errFirst[0].style.color = "red";

    e.preventDefault();
  }
  if (password.value !== "123456789" && password.value !== "") {
    password.style.borderColor = "red";
    messages.push("* please, enter valid password");

    errSecond[0].style.display = "block";
    errSecond[0].style.color = "red";
    e.preventDefault();
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorDiv.innerText = messages.join(",");
  }
});

/*form.addEventListener("submit", (e) => {
  let messages = [];
  if (
    user.value === "" ||
    (user.value == null && password.value === "") ||
    password.value == null
  ) {
    messages.push("* please, enter username");
    messages.push("* please, enter password");
    user.style.borderColor = "red";
    password.style.borderColor = "red";
  }

  if (user.value === "new_user" && password.value === "123456789") {
    user.style.borderColor = "green";
    password.style.borderColor = "green";
    e.preventDefault();
  }
  if (!(user.value === "new_user")) {
    user.style.borderColor = "red";
    messages.push("* please, enter valid username");
    e.preventDefault();
  }
  if (password.value !== "123456789") {
    password.style.borderColor = "red";
    messages.push("* please, enter valid password");
    e.preventDefault();
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorDiv.innerText = messages.join(",");
  }
});*/
