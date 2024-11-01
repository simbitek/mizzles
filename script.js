const av_title = document.getElementById("av_title");
const av_body = document.getElementById("av_body");


av_title.addEventListener("click", hide);


function hide(event) {// revealed passed event argument, part of addEventListener
    console.log("blah")
    var x = event.target; //Passed clicked element to variable
    toggleVis(av_body);
    setTimeout(function() {
      toggleVis(av_body);// Inserted into annon function to pass x for reveal after
    }, 2000);
  }

  function toggleVis(target) {
    if (target.style.display === "none") {
      target.style.display = "block";
    } else {
      target.style.display = "none";
    }
  }



