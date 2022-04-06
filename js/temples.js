const templeURL = "/templeinn/data/temples.json";

fetch(templeURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
