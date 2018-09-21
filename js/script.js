console.log("working");
const route = `https://s-over-lite.herokuapp.com/`

window.onload = function home(){
  fetch( route, {
    method: "GET",
    headers:{
      "Content-Type":"application/json"
    }
  })
  .then((response) => response.json())
    .then((data)=>{
      document.getElementById("output").innerHTML = data["message"]
    })
  .catch((err) => console.log(err));
  console.log('home query initiated');
};

window.onload = function questions() {
  fetch(route+`/api/v1/questions` , {
    method: "GET",
    headers:{
      "Content-Type":"application/json"
    }
  })
  .then((response) => response.json())
    .then((data)=>{
      document.getElementById("questions").innerHTML = data["message"]
    })
  .catch((err) => console.log(err));
  console.log('questions query initiated');
}

window.onload = function login() {
  const newUser = {
    'username': document.getElementById('username').value,
    'password': document.getElementById('password').value
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }

  fetch(route+`api/v1/login`, options)
  .then((response) => response.json())
    .then((data)=>{
      console.log(data["message"])
    })
  console.log('login function called');
  window.location.href = "http://kraftycoder.ml/s-over-lite-fetcher/dashboard.html";
};


