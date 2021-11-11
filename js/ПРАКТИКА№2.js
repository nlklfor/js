// ========= ПРАКТИКА №2 ==========

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?" , "");

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

// ----- 1 -----


for (let i=0 ; i < 2; i++){
    const LastSeenFilm = prompt("Один из последних просмотренных фильмов?" , "") ;
    const FilmRating = prompt("На сколько оцените данный фильм?" , "");

// ----- 2 -----

    if ( LastSeenFilm != "" && FilmRating != "" && LastSeenFilm != null && FilmRating != null &&  LastSeenFilm.length < 50){

        personalMovieDB.movies[LastSeenFilm] = FilmRating;
        console.log("Done");

    }  else{
        console.log("Error");
        i--;
    }

    // // ----- 3 -----

    if (personalMovieDB.count < 10){
        console.log("Просмотренно слишком мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зриель");
    }else if(personalMovieDB.count >= 30 && personalMovieDB.count < 100){
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка!");
    }
}
    console.log(personalMovieDB);

// // ----- 4 -----

    let i = 0;
    while ( i < 2){
        const LastSeenFilm = prompt("Один из последних просмотренных фильмов?" , "") ;
        const FilmRating = prompt("На сколько оцените данный фильм?" , "");
        i++
    }

    let i = 0;
    do{
        const LastSeenFilm = prompt("Один из последних просмотренных фильмов?" , "") ;
        const FilmRating = prompt("На сколько оцените данный фильм?" , "");
        i++;
    }
    while ( i < 2);


// ========= /ПРАКТИКА №2 ==========