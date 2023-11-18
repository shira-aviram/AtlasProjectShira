
import Country from "./classCountry.js";
import { declareEvents } from "./searchCountry.js";



const c_arr = ["israel", "usa", "thailand", "france"];
const init = async () => {
  declareEvents()
  for (let i = 0; i < c_arr.length; i++) {
    doApi(c_arr[i]);
  }

  const c1 = document.getElementById("countryInputbtn1");
  c1.addEventListener("click", () => {
    const countryInput = document.getElementById("countryInput1");
      doApi2(countryInput.className);
  })
  const c2 = document.getElementById("countryInputbtn2");
  c2.addEventListener("click", () => {
    const countryInput = document.getElementById("countryInput2");
      doApi2(countryInput.className);
  })
  const c3 = document.getElementById("countryInputbtn3");
  c3.addEventListener("click", () => {
    const countryInput = document.getElementById("countryInput3");
      doApi2(countryInput.className);
  })
  const c4 = document.getElementById("countryInputbtn4");
  c4.addEventListener("click", () => {
    const countryInput = document.getElementById("countryInput4");
      doApi2(countryInput.className);
  })
 
};

const doApi = async (country) => {
  let url = `https://restcountries.com/v3.1/name/${country}`;
  $.get(url, function (resp) {
    if (Array.isArray(resp) && resp.length > 0) {
      CountryDetails(resp[0]);
    } else {
      console.error("Invalid response:", resp);
    }
  });
};
const doApi2 = async (country) => {
  let url = `https://restcountries.com/v3.1/name/${country}`;
  $.get(url, function (resp) {
    if (Array.isArray(resp) && resp.length > 0) {
      CountryDetails2(resp[0]);
    } else {
      console.error("Invalid response:", resp);
    }
  });
};


const CountryDetails = (resp) => {
  let country = new Country("#id_row", resp);
  country.render();
};
const CountryDetails2 = (resp) => {
  document.querySelector("#id_row").innerHTML = `<button  class="bth btnBack">  <a href="mainPage.html">HOME</a></button>;`
  let country = new Country("#id_row", resp);
  country.render();
};
init();




