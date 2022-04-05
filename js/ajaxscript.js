
// AJAX code

// view knop switch between blokjes & table

var viewKnop = document.querySelector("main section:first-of-type div button:nth-of-type(2)");
var viewImage = document.querySelector("main section:first-of-type div button:nth-of-type(2) img");

var myul = document.querySelector("main ul");
var mytable = document.querySelector("main table");

var page1knop = document.querySelector(".pagination button:nth-of-type(1)");
var page2knop = document.querySelector(".pagination button:nth-of-type(2)");
var page3knop = document.querySelector(".pagination button:nth-of-type(3)");
var currentPage = 0;
var style = "table";
var Body = document.body;

// organisatie filter
var selectbar = document.querySelector("main section:first-of-type div select");
var selectoption1 = document.querySelector("main section:first-of-type div select option:nth-of-type(1)");
var selectoption2 = document.querySelector("main section:first-of-type div select option:nth-of-type(2)");
var selectoption3 = document.querySelector("main section:first-of-type div select option:nth-of-type(3)");

// JSON Data
var requestURL = "json\\database.json";
var request = new Request(requestURL);
var response;
var algoritmes;




async function switchview() {
    if (style === "table") {

        console.log("Bolkjes view");
        style = "Bolkjes";
        viewImage.src = "images/list-option.png";

        localStorage.setItem("viewImage", JSON.stringify(true));
    } else {
        console.log("Table view");
        style = "table";
        viewImage.src = "images/stripe-list-icon.png";
        var pageResultaten = document.querySelector(".pagination p");
        pageResultaten.innerHTML = "Resultaten: 1-7 van 14";

        page2knop.classList.add("active");

        localStorage.setItem("viewImage", JSON.stringify(false));
    }

    getalgoritmes(currentPage);
}

async function requestData() {
    response = await fetch(request);
    algoritmes = await response.json();
}

function getalgoritmes(index) {
    currentPage = index;
    console.log(currentPage);

    if (style === "table") {
        console.log("Table");
        getalgoritmestable(index);
    } else {
        getalgoritmesblokjes(index);
        console.log("Blokjes");
    }
}


// ******************************
// making Bolkjes****************
// ******************************

function getalgoritmesblokjes(index,end) {
    myul.classList.remove("hidden");
    mytable.classList.add("hidden");
    Body.classList.remove("lijstbackground");

    let x = myul.hasChildNodes()
    if (x > 0) {
        myul.replaceChildren();
    }

    for (let n = 0; n < end; n++) {

        var myimage = document.createElement("img");
        var div = document.createElement("div");
        var myli = document.createElement("li");
        var link = document.createElement("a");
        var myh3 = document.createElement("h3");
        var mypara = document.createElement("p");
        var leeslink = document.createElement("a");
        var leestekst = document.createElement("p");
        var myicon = document.createElement("img");

        myimage.src = `${algoritmes[index * 6 + n]["IMAGE"]}`;
        myh3.textContent = `${algoritmes[index * 6 + n]["NAAM"]}`;
        mypara.textContent = `${algoritmes[index * 6 + n]["BESCHRIJVING"]}`;
        leeslink.href = `${algoritmes[index * 6 + n]["LINK"]}`;
        leestekst.textContent = `Lees meer`;
        myicon.src = `${algoritmes[index * 6 + n]["ICON"]}`;
        link.href = `${algoritmes[index * 6 + n]["LINK"]}`;

        if (`${algoritmes[index * 6 + n]["THEMA"]}` === "Openbare orde") {
            div.classList.add("Openbareorde-box");
            myh3.classList.add("Openbareorde");

        } else if (`${algoritmes[index * 6 + n]["THEMA"]}` === "Sociale zekerheid") {
            div.classList.add("Financien-box");
            myh3.classList.add("Financien");

        } else if (`${algoritmes[index * 6 + n]["THEMA"]}` === "Verkeer") {
            div.classList.add("Verkeer-box");
            myh3.classList.add("Verkeer");

        } else if (`${algoritmes[index * 6 + n]["THEMA"]}` === "Sociale zekerheid") {
            div.classList.add("Socialezekerheid-box");
            myh3.classList.add("Socialezekerheid");

        } else if (`${algoritmes[index * 6 + n]["THEMA"]}` === "Bestuur") {
            div.classList.add("Bestuur-box");
            myh3.classList.add("Bestuur");

        } else if (`${algoritmes[index * 6 + n]["THEMA"]}` === "Onderwijs") {
            div.classList.add("Onderwijs-box");
            myh3.classList.add("Onderwijs");

        } else {
            console.log("Geen thema gevonden");
        }

        console.log("Blokjes loop");

        div.appendChild(mypara);
        div.appendChild(myicon);
        link.appendChild(myh3);
        div.appendChild(link);
        myli.appendChild(div);
        myli.appendChild(myimage);
        leeslink.appendChild(leestekst);
        div.appendChild(leeslink);
        myul.appendChild(myli);
    }


}

// ******************************
// making tabel *****************
// ******************************
// index,end
function getalgoritmestable(index) {
    myul.classList.add("hidden");
    mytable.classList.remove("hidden");
    Body.classList.add("lijstbackground");

    let y = mytable.hasChildNodes()
    if (y > 0) {
        mytable.replaceChildren();
    }

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


    // 7 -end
    for (let n = 0; n < 7; n++) {

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

        // console.log("myimage",myimage);

        mya1.href = `${algoritmes[index * 7 + n]["LINK"]}`;
        mya2.href = `${algoritmes[index * 7 + n]["LINK"]}`;

        myimage.src = `${algoritmes[index * 7 + n]["IMAGE"]}`;
        mya2.textContent = `${algoritmes[index * 7 + n]["NAAM"]}`;
        mytd3.textContent = `${algoritmes[index * 7 + n]["ORGANISATIE"]}`;
        mytd4.textContent = `${algoritmes[index * 7 + n]["DATUM"]}`;
        mytd5.textContent = `${algoritmes[index * 7 + n]["STATUS"]}`;
        mytd6.textContent = `${algoritmes[index * 7 + n]["TYPE"]}`;

        mya1.appendChild(myimage);
        mytd1.appendChild(mya1);
        mytd2.appendChild(mya2);

        mytr2.appendChild(mytd1);
        mytr2.appendChild(mytd2);
        mytr2.appendChild(mytd3);
        mytr2.appendChild(mytd4);
        mytr2.appendChild(mytd5);
        mytr2.appendChild(mytd6);

        if(`${algoritmes[index * 7 + n]["type"]}` === "images/icons/Zelflerend-systeem.icon.png"){
            mytype.src = `${algoritmes[index * 7 + n]["TYPE"]}`;
            mytr2.appendChild(mytd6);
            mytd6.appendChild(mytype);
            console.log("nice");
        }else{
            mytd6.textContent = `${algoritmes[index * 7 + n]["TYPE"]}`;
            mytr2.appendChild(mytd6);
            console.log("not nice");
        }

        mytable.appendChild(mytr2);
    }

}

requestData();
if (localStorage.getItem('viewImage')==="true"){
    viewImage.innerHTML = "table";
}

viewKnop.addEventListener("click", switchview);

// page1knop.addEventListener("click", getalgoritmes(0,6) );
// page2knop.addEventListener("click", getalgoritmes(0,6) );
// page3knop.addEventListener("click", getalgoritmes(7,12) );


// organisatie filter
// selectoption1.addEventListener("click", organisatiefilter);
// selectoption2.addEventListener("click", organisatiefilter);
// selectoption3.addEventListener("click", organisatiefilter);






