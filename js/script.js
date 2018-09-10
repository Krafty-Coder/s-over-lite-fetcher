window.addEventListener('click', getPosts);

document.getElementById('get').addEventListener('click', getPosts)

function getPosts() {
  fetch('https://s-over-lite.herokuapp.com/api/v1/')
    .then((res) => res.json())
    .then((data) => {
      let output = <h2> Questions </h2>;
      data.forEach(function(questions){
        output +=`
          <div class="question">
            <h3> ${question}</h3>
            <p> ${question.datetime}</p>
            <p> ${question.body}</p>
          </div>
          `;
      });
      .catch((err) => console.log(err))
      document.getElementById('output').innerHTML = output;
    })
}
