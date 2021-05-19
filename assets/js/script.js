var xhr = new XMLHttpRequest();
var data;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
       data = JSON.parse(this.responseText);
        selectCountry(data);
    }
};

xhr.open("GET", "https://restcountries.eu/rest/v2/region/europe/");

xhr.send();

function selectCountry(obj) {
    var select = document.getElementById("countryList"); 
    for(var i = 0; i < obj.length; i++) {
    var countryName = obj[i].name;
    var optionElement = document.createElement("option");
    optionElement.textContent = countryName;
    optionElement.value = countryName;
    select.appendChild(optionElement);
   }
  return '';
    }

/* ------- Populate the array with country names -----------
var globalData= []; 
var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://restcountries.eu/rest/v2/region/europe/');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
       ourData = ourRequest.responseText;
       globalData  = JSON.parse(ourData);
      selectCountry(globalData)
       } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();

function selectCountry(options) {
     var select = document.getElementById("countryList"); 
     for(var i = 0; i < options.length; i++) {
    var opt = options[i].name;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
    }
   return '';
     }

     ----------------- */

/*
var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
        questions:[
            {
                q:'What is the name of the river',
                options: ['Danube', 'Niger', 'Congo', 'Limpopo'],
                answer:1
            },
            {
                q:'What is the name of the Deadly virus',
                options: ['Antrax', 'Killvi', 'Corona', 'Wuhanvi'],
                answer:2
            }            
        ],
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.questions.length + "/" + this.score;
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();

    */

/*  country objet Keys & Values ---------------------/

let country = [{"name":"Åland Islands",
 	 "topLevelDomain":[".ax"],
	  "alpha2Code":"AX",
	 "alpha3Code":"ALA",
	"callingCodes":["358"],
	"capital":"Mariehamn",
	"altSpellings":["AX","Aaland","Aland","Ahvenanmaa"],
	"region":"Europe",
	"subregion":"Northern Europe",
	"population":28875,
	"latlng":[60.116667,19.9],
	"demonym":"Ålandish",
	"area":1580.0,
	"gini":null,
	"timezones":["UTC+02:00"],
	"borders":[],
	"nativeName":"Åland",
	"numericCode":"248",
	"currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],
	"languages":[{"iso639_1":"sv","iso639_2":"swe","name":"Swedish","nativeName":"svenska"}],
	"translations":{"de":"Åland","es":"Alandia","fr":"Åland","ja":"オーランド諸島","it":"Isole Aland","br":"Ilhas de Aland","pt":"Ilhas de Aland","nl":"Ålandeilanden","hr":"Ålandski otoci","fa":"جزایر الند"},
	"flag":"https://restcountries.eu/data/ala.svg",
	"regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],
	"cioc":""},

var countryname = country[0].name;
var population = country[0].population;
var area = country[0].area;
var capital = country[0].capital;
var currency = country[0].currencies[0].name;
var laguage = country[0].languages[0].name;

------------------------------ */