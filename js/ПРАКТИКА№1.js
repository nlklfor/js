"use strict";
// ========= ПРАКТИКА №1 ==========

// ----- 1 -----
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?" , "");

// ----- 2 -----

const movies = {};
const actors = {};
const genres = [];
const privat = false;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

console.log(personalMovieDB.count);

// ----- 3 -----

const LastSeenFilm = prompt("Один из последних просмотренных фильмов?" , "") ;
const FilmRating = prompt("На сколько оцените данный фильм?" , "");
const LastSeenFilm1 = prompt("Один из последних просмотренных фильмов?" , "") ;
const FilmRating1 = prompt("На сколько оцените данный фильм?" , "");


//movies = {
//    LastSeenFilm: FilmRating,
//    LastSeenFilm1: FilmRating1
//}

personalMovieDB.movies[LastSeenFilm] = FilmRating;
personalMovieDB.movies[LastSeenFilm1] = FilmRating1;

console.log(personalMovieDB);

// ========= /ПРАКТИКА №1 ==========