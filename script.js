var filterknop = document.querySelector(".filterknop");
var filtermenu = document.querySelector(".filterOption");

function openfiltermenu(){
    console.log("click");
    filtermenu.classList.toggle("openfilter");
    filterknop.classList.toggle("closemenu");
}

filterknop.addEventListener("click", openfiltermenu);

var searchKnop = document.querySelector("main section div button");
var searchInput = document.querySelector("main section input");

function opensearcharea(){
    console.log("click search");
    searchInput.classList.toggle("opensearch");
}

searchKnop.addEventListener("click", opensearcharea);
