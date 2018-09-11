console.log("working");

window.onload = function home(){
  fetch("https://s-over-lite.herokuapp.com/", {
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
};

window.onload = function questions() {
  fetch("https://s-over-lite.herokuapp.com/api/v1/questions", {
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
}


