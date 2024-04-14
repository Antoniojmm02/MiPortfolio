const tabla = document.querySelector("#proyectos");
const section = document.querySelector("#datos");

const requestURL = "./json/Proyectos.json"


  const request = new XMLHttpRequest();
  request.open("GET", requestURL);

  request.responseType = "json";
request.send();


request.onload = function () {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  };


  function populateHeader(jsonObj) {
    const mytytle1 = document.createElement("h2");
    mytytle1.textContent = jsonObj["titulo"];
    tabla.appendChild(mytytle1);
  }


  function showHeroes(jsonObj) {
    const heroes = jsonObj["proyectos"];
  
    for (var i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement("article");
      const myH3 = document.createElement("h3");
      const myList = document.createElement("ul");
      const myImg = document.createElement("img");
  
      myH3.textContent = heroes[i].name;
      myImg.src = heroes[i].imagen;
  
      const superPowers = heroes[i].lenguajes;
      for (var j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement("li");
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
  
      myArticle.appendChild(myH3);
      myArticle.appendChild(myImg);
      myArticle.appendChild(myList);
      section.appendChild(myArticle);

    }
  }
