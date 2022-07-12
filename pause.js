

axios.get('/timer').then(result => {console.log(result.data)})

window.addEventListener("DOMContentLoaded", () => {

    const pauseBtn = document.getElementById("pause");
    console.log(pauseBtn);
    pauseBtn.addEventListener("click", () => {
      console.log("pause");
      pauseBtn.classList.toggle("active");
      if (pauseBtn.classList.contains("active")) {
        pauseBtn.innerHTML = "Resume";
      } else {
        pauseBtn.innerHTML = "Pause";
      }
    }
    );
   

}
)