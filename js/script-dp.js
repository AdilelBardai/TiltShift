// Zoekbalk actions
var searchKnopDP = document.querySelector("#detail-page section div button");
var searchInputDP = document.querySelector("#detail-page section:first-of-type input");

function opensearchareaDP(){
    console.log("click search 2");
    searchInputDP.classList.toggle("opensearchDP");
}

searchKnopDP.addEventListener("click", opensearchareaDP);






// //popup
var popUp = document.getElementById("popUp");

// Get the button that opens the modal
var img = document.querySelector(".notificationBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
img.onclick = function () {
    popUp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    popUp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == popUp) {
        popUp.style.display = "none";
    }
}


var gereedKnop = document.querySelector(".gereed");
var popUpContent = document.querySelector(".popUp-content ");
var myInput = document.querySelector(".popUp-content form input");

function gereedinfo (){

    if(myInput.value==="" || myInput.value.indexOf("@") ===-1 || myInput.value.indexOf("@") === myInput.value.length-1){
    return;
}



    popUpContent.replaceChildren();
    popUpContent.classList.add("gelukt");

    var gelukttitel = document.createElement("h5");
    var myp = document.createElement("p");
    var bedanktKnop = document.createElement("button");
    var close = document.createElement("span");
   
    close.innerHTML="&times;";
    close.className = "close";

    gelukttitel.textContent = "Gelukt!";
    myp.textContent = `Via '${myInput.value}' blijft u op de hoogte.`
    bedanktKnop.textContent = "Bedankt";
    bedanktKnop.className = "gereed";



    popUpContent.appendChild(gelukttitel);
    popUpContent.appendChild(myp);
    popUpContent.appendChild(bedanktKnop);
    popUpContent.appendChild(close);
    img.src = "images/icons/notification-aan-icon.svg";
    img.style.width = "2em";
    [close,bedanktKnop,].forEach(element=>element.addEventListener("click", () =>{
        popUp.style.display = "none";
    }));

}

gereedKnop.addEventListener("click" , gereedinfo);


// tabs actions

var titelsBar = document.querySelectorAll(".detail-page .tabbed .titels > button");
var tabsContainer = document.querySelectorAll(".detail-page .tabbed .tabs > div");

titelsBar.forEach((titel,index) =>{
    titel.addEventListener("click",()=>{
        tabsContainer.forEach((tabContainer)=>{
            tabContainer.classList.remove("opentab");
            
        });
        titelsBar.forEach((titel)=>{
            titel.classList.remove("opentab");
            console.log("clicked");
        });

        tabsContainer[index].classList.add("opentab");
        titelsBar[index].classList.add("opentab");
    });
});



// Chatbot actions 
var chatbotKnop = document.querySelector(".detail-page .chatbot");
var chatbotbox = document.querySelector(".detail-page > section:last-of-type");
var VragenListKnop = document.querySelector(".detail-page section:last-of-type>p:first-of-type");

var vragenList = document.querySelector(".detail-page section:last-of-type dl");
var detailTitles = document.querySelectorAll(".detail-page section:last-of-type dl dt");
var detailDescription = document.querySelectorAll(".detail-page section:last-of-type dl dd");
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
    console.log(chatbotbox);
}

function Openvragenlist() {
    console.log("Open de vragen lijst");
    VragenListKnop.classList.toggle("closelist");
    vragenList.classList.toggle("closelist");
}

chatbotKnop.addEventListener("click", OpenChatbot);
VragenListKnop.addEventListener("click", Openvragenlist);