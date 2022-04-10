
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
var chatbotbox = document.querySelector("main > section.chatbot-box");
var VragenListKnop = document.querySelector("main section.chatbot-box > p:first-of-type");

var vragenList = document.querySelector("main section.chatbot-box dl");
var detailTitles = document.querySelectorAll("main section.chatbot-box dl dt");
var detailDescription = document.querySelectorAll("main section.chatbot-box dl dd");
var elementArray = Array.from(detailTitles);

elementArray.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        detailDescription[index].classList.toggle("closedslid");
        element.classList.toggle("closedslid");
    });
});

function OpenChatbot() {
    console.log("Open de chatbot");
    chatbotKnop.classList.toggle("openchat");
    chatbotbox.classList.toggle("openchat");
}

function Openvragenlist() {
    console.log("Open de vragen lijst");
    VragenListKnop.classList.toggle("closelist");
    vragenList.classList.toggle("closelist");
}

chatbotKnop.addEventListener("click", OpenChatbot);
VragenListKnop.addEventListener("click", Openvragenlist);









