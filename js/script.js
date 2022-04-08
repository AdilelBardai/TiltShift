

  //popup
  var popUp = document.getElementById("popUp");

  // Get the button that opens the modal
  var img = document.getElementById("notificationBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  img.onclick = function() {
    popUp.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    popUp.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == popUp) {
      popUp.style.display = "none";
    }
  }
  


    // Filters actiens
var filterknop = document.querySelector(".filtertitel");
var filtermenu = document.querySelector(".filterOptions");

function openfiltermenu(){
    console.log("click");
    filtermenu.classList.toggle("openfilter");
    filterknop.classList.toggle("closemenu");
}

filterknop.addEventListener("click", openfiltermenu);




    // Zoekbalk actions
var searchKnop = document.querySelector("main section div button");
var searchInput = document.querySelector("main section:first-of-type input");

function opensearcharea(){
    console.log("click search");
    searchInput.classList.toggle("opensearch");
}

searchKnop.addEventListener("click", opensearcharea);





    // Chatbot actions 
var chatbotKnop = document.querySelector("button.chatbot");
var chatbotbox = document.querySelector("main section:last-of-type");
var VragenListKnop = document.querySelector("main section:last-of-type>p:first-of-type");

var vragenList = document.querySelector("main section:last-of-type dl");
var detailTitles = document.querySelectorAll("main section:last-of-type dl dt"); 
var detailDescription = document.querySelectorAll("main section:last-of-type dl dd");
var elementArray = Array.from(detailTitles);

elementArray.forEach((element, index) => {
  element.addEventListener("click", (event) => { 
    detailDescription[index].classList.toggle("closedslid");
    element.classList.toggle("closedslid");
  });
});

function OpenChatbot(){
    console.log("Open de chatbot");
    chatbotKnop.classList.toggle("openchat");
    chatbotbox.classList.toggle("openchat");
}

function Openvragenlist(){
    console.log("Open de vragen lijst");
    VragenListKnop.classList.toggle("closelist");
    vragenList.classList.toggle("closelist");
}

chatbotKnop.addEventListener("click", OpenChatbot);
VragenListKnop.addEventListener("click", Openvragenlist);







