
// AJAX code

var request = new XMLHttpRequest();
var tableinfo = document.querySelector(".lijst table");
var pagination2Knop1 = document.querySelector(".pagination2 button:nth-of-type(1)");
console.log("pagination2Knop1 ",pagination2Knop1);
var pagination2Knop2 = document.querySelector(".pagination2 button:nth-of-type(2)");
var pagination2Knop3= document.querySelector(".pagination2 button:nth-of-type(3)");

// page 1 info 

function page1 () {
    request.open('GET', 'tableinfo1.html');
    request.onload = function (){
        console.log("table info 1");
        tableinfo.innerHTML = this.responseText;
    };
    request.send();

    pagination2Knop2.classList.add("active");
    pagination2Knop3.classList.remove("active");
}

pagination2Knop1.addEventListener("click", page1);
pagination2Knop2.addEventListener("click", page1);

// page 2 info 

function page2 () {
    request.open('GET', 'tableinfo2.html');
    request.onload = function (){
        console.log("table info 2");
        tableinfo.innerHTML = this.responseText;
    };
    request.send();

    pagination2Knop2.classList.remove("active");
    pagination2Knop3.classList.add("active");
}

pagination2Knop3.addEventListener("click", page2);



    // view functions

    var paginaview = document.querySelector ("html");
    var bolkjesviewknop = document.querySelector ("main section:first-of-type div button:nth-of-type(2)"); //blokjes
    var lijstviewknop = document.querySelector ("main section:first-of-type div button:nth-of-type(3)"); //table
    
    function lijstview(){
      request.open('GET', 'lijstview.html');
          request.onload = function (){
              console.log("open lijst view");
              paginaview.innerHTML = this.responseText;
          };
      request.send();
    }
    
    lijstviewknop.addEventListener("click", lijstview);
    
    
    
    function bolkjesview(){
      request.open('GET', 'index.html');
          request.onload = function (){
              console.log("open bolkjes view");
              paginaview.innerHTML = this.responseText;
          };
      request.send();
    }
    
    bolkjesviewknop.addEventListener("click", bolkjesview);


