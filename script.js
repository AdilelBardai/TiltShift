
    // Filters actiens
var filterknop = document.querySelector("main section:first-of-type h2");
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









