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

