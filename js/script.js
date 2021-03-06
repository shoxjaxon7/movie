let elForm = document.querySelector(".form");
let elResult = document.querySelector(".movies__result");
let elList = document.querySelector(".movies__list");
let elFilmsSelect = document.querySelector(".select");

elFilmsSelect.innerHTML = " ";
elResult.textContent = films.length;
const generateGenres = function (films) {
  const uniqueGenres = [];
  films.forEach((film) => {
    film.genres.forEach((genre) => {
      if (!uniqueGenres.includes(genre)) {
        uniqueGenres.push(genre);
      }
    });
  });

  uniqueGenres.forEach((genre) => {
    let newFilmOpt = document.createElement("option");

    newFilmOpt.value = genre;
    newFilmOpt.textContent = genre;

    elFilmsSelect.appendChild(newFilmOpt);
  });
};

const renderFilms = function (filmsArray, element) {
  filmsArray.forEach((movie) => {
    //CREATE
    let newItem = document.createElement("li");
    let newCard = document.createElement("div");
    let newImg = document.createElement("img");
    let newCardBody = document.createElement("div");
    let newCardTitle = document.createElement("h5");
    let newCardGenresList = document.createElement("ul");

    movie.genres.forEach((genre) => {
      let newCardGenres = document.createElement("li");

      newCardGenres.textContent = genre;

      newCardGenresList.appendChild(newCardGenres);
    });

    //SET ATTRIBUTE
    newItem.setAttribute("class", "movies__item");
    newCard.setAttribute("class", "card movies__card");
    newImg.setAttribute("class", "card-img-top");
    newImg.setAttribute("src", movie.poster);
    newCardBody.setAttribute("class", "card-body");

    //TEXT CONTENT
    newCardTitle.textContent = movie.title;

    //APPEND CHILD
    element.appendChild(newItem);
    newItem.appendChild(newCard);
    newCard.appendChild(newImg);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newCardTitle);
    newCardBody.appendChild(newCardGenresList);
  });
};

renderFilms(films, elList);
generateGenres(films);

elForm.addEventListener("submit", function (event) {
  event.preventDefault();
  elList.innerHTML = "";
  let filterFilm = [];
  let selectInput = elFilmsSelect.value;
  films.forEach((film) => {
    if (film.genres.includes(selectInput)) {
      filterFilm.push(film);
    }
  });
  // console.log(filterFilm);
  renderFilms(filterFilm, elList);
  // console.log(selectInput);
});
