
    // Filters actiens
var filterknop = document.querySelector(".filtertitel");
var filtermenu = document.querySelector(".filterOptions");

function openfiltermenu(){
    console.log("click");
    filtermenu.classList.toggle("openfilter");
    filterknop.classList.toggle("closemenu");
}

filterknop.addEventListener("click", openfiltermenu);



// AJAX code

// view knop switch between blokjes & table

var viewKnop = document.querySelector("main section:first-of-type div button:nth-of-type(2)");
var viewImage = document.querySelector("main section:first-of-type div button:nth-of-type(2) img");

var pagination=document.querySelector(".pagination");

var myul = document.querySelector("main ul");
var mytable = document.querySelector("main table");

var currentPage = 1;
var style =  "table";
var Body = document.body;

// JSON Data
var requestfile = "json\\database.json";
var request = new Request(requestfile);
var response;
var algoritmes;
var themaArray=[];

/* pagination / page nummer */
function createPagination(num){
    if(num<2)return; //guard block
    console.log("here");
    if(currentPage!==1){
    var btnPrev = document.createElement("button");
    btnPrev.textContent= "<";
    pagination.appendChild(btnPrev);
    }
    for(var i = 1;i<=num;i++){
        var btn = document.createElement("button");
        if(currentPage===i) btn.classList.add("active");
        btn.textContent= i;
        pagination.appendChild(btn);
    }
    if(currentPage !== num){ 
        var btnNext = document.createElement("button");
        btnNext.innerText= ">";
        pagination.appendChild(btnNext);
        }

}
function showMore(event){
    var pageNum;
    if(event.target.textContent===">"){
    pageNum=currentPage+1;
    currentPage++;
}
    else if(event.target.textContent==="<"){
    pageNum=currentPage-1;
    currentPage--;    
}
    else{
    pageNum= +event.target.textContent;
}

    currentPage=pageNum;
    pagination.replaceChildren();
    if(style==="table"){
    getalgoritmestable(pageNum);
    }else{
        getalgoritmesblokjes(pageNum);
    }
   console.log(currentPage);
}

pagination.addEventListener("click",showMore);

function noItems(){
    if(!algoritmes) return;
    if(algoritmes.length===0)
    {
     
        if (style === "table") {
        var myTdEmpty = document.createElement("td");
        var myTrEmpty = document.createElement("tr");
        myTdEmpty.textContent= "Geen resultaten gevonden.";
        myTrEmpty.appendChild(myTdEmpty);
        mytable.appendChild(myTrEmpty);
        myTdEmpty.classList.add("no-item");
        myTdEmpty.colSpan="6";
       }
        else{
            var myLiEmpty = document.createElement("li");
            myLiEmpty.textContent = "Geen resultaten gevonden.";
            myul.appendChild(myLiEmpty);
            myLiEmpty.classList.add("no-item");
        
        }
    }
}



async function switchview() {
currentPage=1;
    if (style === "table") {
        console.log("Bolkjes view");
        style = "Bolkjes";
        viewImage.src = "images/stripe-list-icon.png";

        localStorage.setItem("style", "Bolkjes");
    } else {
        console.log("Table view");
        style = "table";
        viewImage.src = "images/list-option.png";


        localStorage.setItem("style", "table");
    }

    getalgoritmes(currentPage);
    noItems();
}



async function requestData() {
    response = await fetch(request);
    algoritmes = await response.json();
    
}

function getalgoritmes(index) {
    currentPage = index;
    console.log(currentPage);

    if (style === "Bolkjes") {
        getalgoritmesblokjes(index);
        console.log("Blokjes");
    } else {
        console.log("Table");
        getalgoritmestable(index);
    }

    
}

// ******************************
// making Bolkjes****************
// ******************************

async function getalgoritmesblokjes(index) {
   
    // Er was error want de data was nog niet gereed daarom heb ik await gebruikt
    if(!algoritmes) await requestData();
    if (selectFilter.value!=="organisatie"){
        algoritmes= algoritmes.filter(algoritm=>algoritm["ORGANISATIE"]===selectFilter.value);
        }
    //  add activated class to the previous selected filters 
    if(themaArray.length>0){
        algoritmes= algoritmes.filter(algoritm=>themaArray.includes(algoritm["THEMA"]));
        for (const btn of document.querySelectorAll(".filterOptions button")) {
            if (themaArray.includes(btn.textContent)) {
              btn.classList.add("activated");
            }
          }
          
    }
    myul.classList.remove("hidden");
    mytable.classList.add("hidden");
    Body.classList.remove("lijstbackground");

    let x = myul.hasChildNodes()
    if (x > 0) {
        myul.replaceChildren();
    }
    pagination.replaceChildren();
    var start =(index-1)*6;//1*66
    var end = (index-1)*6 + 6<=algoritmes.length?(index-1)*6+6:algoritmes.length;
    for (let n = start; n < end; n++) {

        var myimage = document.createElement("img");
        var div = document.createElement("div");
        var myli = document.createElement("li");
        var link = document.createElement("a");
        var myh3 = document.createElement("h3");
        var themaicon = document.createElement("img");
        var mypara = document.createElement("p");
        var leeslink = document.createElement("a");
        var leestekst = document.createElement("p");
        var myicon = document.createElement("img");

        myimage.src = `${algoritmes[n]["IMAGE"]}`;
        myh3.textContent = `${algoritmes[n]["NAAM"]}`;
        themaicon.src = `${algoritmes[n]["THEMA-ICON"]}`;
        mypara.textContent = `${algoritmes[n]["BESCHRIJVING"]}`;
        leeslink.href = `${algoritmes[n]["LINK"]}`;
        leestekst.textContent = `Lees meer`;
        myicon.src = `${algoritmes[n]["ICON"]}`;
        link.href = `${algoritmes[n]["LINK"]}`;

        if (`${algoritmes[n]["THEMA"]}` === "Openbare orde") {
            div.classList.add("Openbareorde-box");

        } else if (`${algoritmes[n]["THEMA"]}` === "Sociale zekerheid") {
            div.classList.add("Financien-box");

        } else if (`${algoritmes[n]["THEMA"]}` === "Verkeer") {
            div.classList.add("Verkeer-box");

        } else if (`${algoritmes[n]["THEMA"]}` === "Sociale zekerheid") {
            div.classList.add("Socialezekerheid-box");

        } else if (`${algoritmes[n]["THEMA"]}` === "Bestuur") {
            div.classList.add("Bestuur-box");

        } else if (`${algoritmes[n]["THEMA"]}` === "Onderwijs") {
            div.classList.add("Onderwijs-box");

        } else {
            console.log("Geen thema gevonden");
        }

        console.log("Blokjes loop");

        div.appendChild(mypara);
        div.appendChild(myicon);
        link.appendChild(myh3);
        link.appendChild(themaicon);
        div.appendChild(link);
        myli.appendChild(div);
        myli.appendChild(myimage);
        leeslink.appendChild(leestekst);
        div.appendChild(leeslink);
        myul.appendChild(myli);

    }
    createPagination(Math.ceil(algoritmes.length/6));
}


// ******************************
// making tabel *****************
// ******************************

async function getalgoritmestable(index) {
    
    if(!algoritmes) await requestData();
    if (selectFilter.value!=="organisatie"){
        algoritmes= algoritmes.filter(algoritm=>algoritm["ORGANISATIE"]===selectFilter.value);
        }
    //  add activated class to the previous selected filters 
    if(themaArray.length>0){
        algoritmes= algoritmes.filter(algoritm=>themaArray.includes(algoritm["THEMA"]));
        for (const btn of document.querySelectorAll(".filterOptions button")) {
            if (themaArray.includes(btn.textContent)) {
              btn.classList.add("activated");
            }
          }
          
    }
    myul.classList.add("hidden");
    mytable.classList.remove("hidden");
    Body.classList.add("lijstbackground");

    let y = mytable.hasChildNodes();
    if (y > 0) {
        mytable.replaceChildren();
    }
    pagination.replaceChildren();

    var mytr1 = document.createElement("tr");
    var myth1 = document.createElement("th");
    var myth2 = document.createElement("th");
    var myth3 = document.createElement("th");
    var myth4 = document.createElement("th");
    var myth5 = document.createElement("th");
    var myth6 = document.createElement("th");

    myth1.textContent = `IMAGE`;
    myth2.textContent = `NAAM`;
    myth3.textContent = `ORGANISATIE`;
    myth4.textContent = `DATUM`;
    myth5.textContent = `STATUS`;
    myth6.textContent = `TYPE`;

    mytr1.appendChild(myth1);
    mytr1.appendChild(myth2);
    mytr1.appendChild(myth3);
    mytr1.appendChild(myth4);
    mytr1.appendChild(myth5);
    mytr1.appendChild(myth6);
    mytable.appendChild(mytr1);
    var start =(index-1)*7;//1*66
    var end = (index-1)*7 + 7<=algoritmes.length?(index-1)*7+7:algoritmes.length;
    for (let n = start; n < end; n++) {
        var mytr2 = document.createElement("tr");
        var myimage = document.createElement("img");

        var mya1 = document.createElement("a");
        var mya2 = document.createElement("a");

        var mytd1 = document.createElement("td");
        var mytd2 = document.createElement("td");
        var mytd3 = document.createElement("td");
        var mytd4 = document.createElement("td");
        var mytd5 = document.createElement("td");
        var mytd6 = document.createElement("td");
        var mytype = document.createElement("img");

        console.log(n);

        mya1.href = `${algoritmes[n]["LINK"]}`;
        mya2.href = `${algoritmes[n]["LINK"]}`;

        myimage.src = `${algoritmes[n]["IMAGE"]}`;
        mya2.textContent = `${algoritmes[n]["NAAM"]}`;
        mytd3.textContent = `${algoritmes[n]["ORGANISATIE"]}`;
        mytd4.textContent = `${algoritmes[n]["DATUM"]}`;
        mytd5.textContent = `${algoritmes[n]["STATUS"]}`;

        mya1.appendChild(myimage);
        mytd1.appendChild(mya1);
        mytd2.appendChild(mya2);

        mytr2.appendChild(mytd1);
        mytr2.appendChild(mytd2);
        mytr2.appendChild(mytd3);
        mytr2.appendChild(mytd4);
        mytr2.appendChild(mytd5);
        mytr2.appendChild(mytd6);

        if((`${algoritmes[n]["TYPE"]}` === "Rule based") || (`${algoritmes[n]["TYPE"]}` === "?")){
            mytd6.textContent = `${algoritmes[n]["TYPE"]}`;
            mytr2.appendChild(mytd6);
            console.log("its a text");
        }else{
            mytype.src = `${algoritmes[n]["TYPE"]}`;
            mytd6.appendChild(mytype);
            mytr2.appendChild(mytd6);
            console.log("its an icon");
        }

        mytable.appendChild(mytr2);

        
    }


    createPagination(Math.ceil(algoritmes.length/7));
}

viewKnop.addEventListener("click", switchview);

document.addEventListener('DOMContentLoaded', function() { //window.onload=>accept more than 1 func
    var dataFilter=JSON.parse(localStorage.getItem("myFilters"));
    if(dataFilter){
        themaArray=dataFilter.themaArray;
        console.log(dataFilter.city);
        selectFilter.value=dataFilter.city;
        localStorage.removeItem("myFilters");
    }

    if(localStorage.getItem("style")==="table"){
        style="Bolkjes";
    }
    switchview();

});

// organisatie filter
var selectbar = document.querySelector("main section:first-of-type div select");
const selectFilter=document.querySelector("select[name=filter]:first-of-type");

async function filterCity(){
    currentPage=1;
    if (selectFilter.value!=="organisatie"){
        algoritmes= algoritmes.filter(algoritm=>algoritm["ORGANISATIE"]===selectFilter.value);
        }
        algoritmes=themaArray.length>0? algoritmes.filter(algoritm=>themaArray.includes(algoritm["THEMA"])):algoritmes;
 

            if (style === "Bolkjes") {
                getalgoritmesblokjes(1);
                console.log("Blokjes");
            } else {
                console.log("Table");
                getalgoritmestable(1);
            }

}
async function organisatiefilter (event){
    await requestData(); //get the algorithm array
    await filterCity();
}

selectFilter.addEventListener("change",organisatiefilter);


// Thema filter 
async function filterData(event){
    
    if (event.target.textContent==="") return;
    await requestData();
    if(!event.target.classList.contains("activated")){
        themaArray.push(event.target.textContent);
    }else {

        themaArray.splice(themaArray.indexOf(event.target.textContent),1);
    }
        event.target.classList.toggle("activated");

        filterCity();
        noItems();
    } 

const bloklist=document.querySelector(".bloklist");
const tablelist=document.querySelector(".tablelist");

[tablelist,bloklist].map((element)=> element.addEventListener("click",(event)=>{
    if(event.target.tagName==="H3" || event.target.tagName==="A")
    {
        localStorage.setItem("myFilters", JSON.stringify({
            city:selectFilter.value,
            themaArray:themaArray
        }));
    }
}));

const selectBtns=document.querySelector(".filterOptions");
selectBtns.addEventListener("click",filterData);


