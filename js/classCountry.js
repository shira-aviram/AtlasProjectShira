
export default class Country {
  constructor(_parent, _item) {

    this.parent = _parent;
    this.flag = _item.flags.png;
    this.name = _item.name.common;
    this.pop = _item.population;
    this.languages = Object.values(_item.languages).join(", ");
    this.coin = Object.keys(_item.currencies).join(", ");
    this.capital = _item.capital[0];
    this.lat = _item.latlng[0];
    this.lon = _item.latlng[1];
    this.map = _item.maps.openStreetMaps;
    this.borders = _item.borders;
  }

  render() {
    let div = document.createElement("div");
    div.className = "col-10 m-2 p-5 box";
    document.querySelector(this.parent).append(div);
    div.innerHTML += `
          <div class="d-flex  ">
           <img src=${this.flag} >
           <div class="p-3 ">
        <h2><strong>${this.name}</strong></h2>
        <h3>POP: ${this.pop}</h3>
        <h3>LANGUAGES: ${this.languages}</h3>
        <h3>COIN: ${this.coin}</h3>
        <h3>CAPITAL: ${this.capital}</h3>
           </div>
          </div>
        <iframe width="100%" height="50%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
            src="https://maps.google.com/maps?q=${this.lat},${this.lon}&hl=es&z=14&amp;output=embed">
            </iframe>
            <h3>States with borders:</h3>
        <h3 class="id_borders text-black "></h3>
        
        
      `;
    let span = div.querySelector(".id_borders");
    if (this.borders) {
      this.borders.forEach(async (item) => {
        if (item != "PSE") {
          span.innerHTML += `${item}  `;
          span.addEventListener("click", () => {
            let url = `https://restcountries.com/v3.1/name/${item}`;
            $.get(url, function (resp) {
              if (Array.isArray(resp) && resp.length > 0) {
                CountryModule(resp[0]);
              } else {
                console.error("Invalid response:", resp);
              }
            });
            const CountryModule = (resp) => {
              document.querySelector("#id_row").innerHTML = "";
              let country = new Country("#id_row", resp);
              country.render();
            };

          })
        }
      });
    }
    else (span.innerHTML += `none`)

  }
}

{/* <iframe src=${this.map} width="100%" height="300px"></iframe> */ }