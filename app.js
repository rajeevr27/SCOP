let delayTimer;

function timerFunction() {
    delayTimer = setTimeout(showPage, 3000);//Calls the showPage function after 3 seconds upon index.html page finishes loading.
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("front").style.opacity = "1";
}
