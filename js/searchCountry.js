import Country from "./classCountry.js";

export const declareEvents = () => {
  let search_btn = document.querySelector("#search_btn");
  search_btn.addEventListener("click", function () {
    let input_val = document.querySelector("#id_input").value;
    doApi(input_val);
  });

  CountrySelect();
};

const doApi = (item) => {
  let url = `https://restcountries.com/v3.1/name/${item}`;
  $.get(url, function (resp) {
    CountryDetails(resp);
  });
};

const CountryDetails = (resp) => {
  document.querySelector("#id_row").innerHTML = "";
  resp.forEach((item) => {
    let country = new Country("#id_row", item);
    country.render();
  });
};

const CountrySelect = () => {
  let url = `https://restcountries.com/v3.1/all`;
  $.get(url, function (resp) {
    const countries = resp.map((country) => country.name.common);
    const selectElement = document.getElementById("id_select_country");

    selectElement.addEventListener("change", () => {
      const selectedCountry = selectElement.value;
      doApi(selectedCountry);
    });

    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country;
      option.text = country;
      selectElement.appendChild(option);
    });
  });
};


