"use strict";



const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  showMyDB() {
    if (!this.privat) {
      console.log(this);
    }
  },
  writeYourGenres() {
    let counter = 0;
    while (counter <= 2) {
      const genre = prompt(`Ваш любимый жанр под номером ${counter+1}`)
      if (genre == null || genre.length == 0) {
        continue
      }
      counter ++;
      this.genres.push(genre);
    }
    this.genres.forEach(genre, i => console.log(`Любимый жанр ${i+1} - это ${genre}`));
  },
  writeYourMovies() {
    let counter = 0;
    while (counter <= 0) {
      const movie = prompt("Один из последних просмотренных фильмов?", ""),
            rate = prompt("На сколько оцените его?", "");
    if (movie == null || rate == null || movie.length == 0 || rate.length == 0 || movie.length > 50) {
      continue;
    }
    counter++;
    this.movies[movie] = rate;
    }
  },
  toggleVisibleMyDB() {
    this.privat = !this.privat
  },


};




writeYourGenres();


if (numberOfFilms < 10){
  alert("Просмотрено довольно мало фильмов");
} else if (numberOfFilms < 31) {
  alert("Вы классический зритель");
} else if (numberOfFilms > 30){
  alert("Вы киноман");
} else {
  alert("Произошла ошибка")
}


showMyDB();