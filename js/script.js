window.addEventListener('click', getQuestions);

function getQuestions() {
  fetch('https://s-over-lite.herokuapp.com/api/v1/questions')
  .then((res) => res.json())
    .then((data) => {
      let output = <h2> Questions </h2>;
      data.forEach(function(question){
        output +=`
          <div class="question">
            <h3> ${question.message}</h3>
            <p> ${question.datetime}</p>
            <p> ${question.body}</p>
          </div>
          `;
      });
      .catch((err) => console.log(err))
      document.getElementById('output').innerHTML = output;
    })
}
