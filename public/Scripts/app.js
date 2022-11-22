// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();

(function () {
    function Start() {
      console.log("App Started...");
      let deletebuttons = document.querySelectorAll(".editA");
      for (button of deletebuttons) {
        button.addEventListener("click", (event) => {
          if (!confirm("Congratulations! You have successfully created an account!")) {
            event.preventDefault();
            window.location.assign("/survey-list");
          }
        });
      }
    }
    window.addEventListener("load", Start);
  })();