var filterknop = document.querySelector(".filterknop");
var filterknop2 = document.querySelector(".filterknop2");
var filtermenu = document.querySelector(".filterOptions");
var filtermenu2 = document.querySelector(".filterOptions2");

function openfiltermenu(){
    console.log("click");
    filtermenu.classList.toggle("openfilter");
    filterknop.classList.toggle("closemenu");
}

function openfiltermenu2(){
    console.log("click");
    filtermenu2.classList.toggle("openfilter");
    filterknop2.classList.toggle("closemenu");
}


filterknop.addEventListener("click", openfiltermenu);
filterknop2.addEventListener("click", openfiltermenu2);

var searchKnop = document.querySelector("main section div button");
var searchInput = document.querySelector("main section input");

function opensearcharea(){
    console.log("click search");
    searchInput.classList.toggle("opensearch");
}

searchKnop.addEventListener("click", opensearcharea);
