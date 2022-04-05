
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
var requestfile = "json\\database.json";
var request = new Request(requestfile);
var response;
var algoritmes;


async function switchview() {
    if (style === "Bolkjes") {
        console.log("Table view");
        style = "table";
        viewImage.src = "images/stripe-list-icon.png";
        var pageResultaten = document.querySelector(".pagination p");
        pageResultaten.innerHTML = "Resultaten: 1-7 van 14";

        page2knop.classList.add("active");

        localStorage.setItem("viewImage", JSON.stringify(true));

    } else {
        console.log("Bolkjes view");
        style = "Bolkjes";
        viewImage.src = "images/list-option.png";

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

    if (style === "Bolkjes") {
        getalgoritmesblokjes(index, index+6);
        console.log("Blokjes");
    } else {
        console.log("Table");
        getalgoritmestable(index, index+7);
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

    // let pagenum = entry === undefined ?? 0 ;

    for (let n = 0; n < end; n++) {
        // pagenum = index;

        var myimage = document.createElement("img");
        var div = document.createElement("div");
        var myli = document.createElement("li");
        var link = document.createElement("a");
        var myh3 = document.createElement("h3");
        var mypara = document.createElement("p");
        var leeslink = document.createElement("a");
        var leestekst = document.createElement("p");
        var myicon = document.createElement("img");

        myimage.src = `${algoritmes[index * end + n]["IMAGE"]}`;
        myh3.textContent = `${algoritmes[index * end + n]["NAAM"]}`;
        mypara.textContent = `${algoritmes[index * end + n]["BESCHRIJVING"]}`;
        leeslink.href = `${algoritmes[index * end + n]["LINK"]}`;
        leestekst.textContent = `Lees meer`;
        myicon.src = `${algoritmes[index * end + n]["ICON"]}`;
        link.href = `${algoritmes[index * end + n]["LINK"]}`;

        if (`${algoritmes[index * end + n]["THEMA"]}` === "Openbare orde") {
            div.classList.add("Openbareorde-box");
            myh3.classList.add("Openbareorde");

        } else if (`${algoritmes[index * end + n]["THEMA"]}` === "Sociale zekerheid") {
            div.classList.add("Financien-box");
            myh3.classList.add("Financien");

        } else if (`${algoritmes[index * end + n]["THEMA"]}` === "Verkeer") {
            div.classList.add("Verkeer-box");
            myh3.classList.add("Verkeer");

        } else if (`${algoritmes[index * end + n]["THEMA"]}` === "Sociale zekerheid") {
            div.classList.add("Socialezekerheid-box");
            myh3.classList.add("Socialezekerheid");

        } else if (`${algoritmes[index * end + n]["THEMA"]}` === "Bestuur") {
            div.classList.add("Bestuur-box");
            myh3.classList.add("Bestuur");

        } else if (`${algoritmes[index * end + n]["THEMA"]}` === "Onderwijs") {
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
function getalgoritmestable(index,end) {
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

console.log(end)
    // 7 -end
    for (let n = 0; n < end; n++) {

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

        mya1.href = `${algoritmes[index * end + n]["LINK"]}`;
        mya2.href = `${algoritmes[index * end + n]["LINK"]}`;

        myimage.src = `${algoritmes[index * end + n]["IMAGE"]}`;
        mya2.textContent = `${algoritmes[index * end + n]["NAAM"]}`;
        mytd3.textContent = `${algoritmes[index * end + n]["ORGANISATIE"]}`;
        mytd4.textContent = `${algoritmes[index * end + n]["DATUM"]}`;
        mytd5.textContent = `${algoritmes[index * end + n]["STATUS"]}`;
        mytd6.textContent = `${algoritmes[index * end + n]["TYPE"]}`;

        mya1.appendChild(myimage);
        mytd1.appendChild(mya1);
        mytd2.appendChild(mya2);

        mytr2.appendChild(mytd1);
        mytr2.appendChild(mytd2);
        mytr2.appendChild(mytd3);
        mytr2.appendChild(mytd4);
        mytr2.appendChild(mytd5);
        mytr2.appendChild(mytd6);

        if(`${algoritmes[index * end + n]["type"]}` === "images/icons/Zelflerend-systeem.icon.png"){
            mytype.src = `${algoritmes[index * end + n]["TYPE"]}`;
            mytr2.appendChild(mytd6);
            mytd6.appendChild(mytype);
            console.log("nice");
        }else{
            mytd6.textContent = `${algoritmes[index * end + n]["TYPE"]}`;
            mytr2.appendChild(mytd6);
        }

        mytable.appendChild(mytr2);
    }

}

requestData();
if (localStorage.getItem('viewImage')==="true"){
    viewImage.innerHTML = "Bolkjes";
}

viewKnop.addEventListener("click", switchview);

page1knop.addEventListener("click", getalgoritmes(0) );
page2knop.addEventListener("click", getalgoritmes(0) );
page3knop.addEventListener("click", getalgoritmes(1) );


// organisatie filter
// selectoption1.addEventListener("click", organisatiefilter);
// selectoption2.addEventListener("click", organisatiefilter);
// selectoption3.addEventListener("click", organisatiefilter);





