var xhr = new XMLHttpRequest();
var data;
var userChoice;
var latitude = 0;
var longtitude = 0;
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

    function displayData(choice) {
      let dataReturn = data.filter(cname => cname.name === choice); 
      document.getElementById("c_name").innerHTML = dataReturn[0].name;
      document.getElementById("c_cap").innerHTML = dataReturn[0].capital;
      document.getElementById("c_pop").innerHTML = dataReturn[0].population;
      document.getElementById("c_area").innerHTML = dataReturn[0].area;
      document.getElementById("c_currency").innerHTML = dataReturn[0].currencies[0].name;
      document.getElementById("c_language").innerHTML = dataReturn[0].languages[0].name;
      document.getElementById("c_region").innerHTML = dataReturn[0].region;
      document.getElementById("c_dial").innerHTML = dataReturn[0].callingCodes;
      document.getElementById("c_lat").innerHTML = dataReturn[0].latlng;
      document.getElementById("c_time").innerHTML = dataReturn[0].timezones;
      document.getElementById("c_native").innerHTML = dataReturn[0].nativeName;
      document.getElementById("c_name").innerHTML = dataReturn[0].name;
      document.getElementById("flag_img").src = dataReturn[0].flag;
      }


