const numberOfFilms= +prompt ('Сколько фильмов вы уже просмтрели?', '' ) ;
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false
 };

 const a = prompt ("Один из последних просмотренных фидьм", ''),
       b = prompt ("На сколько его оцените?", ''),
       c = prompt ("Один из последних просмотренных фидьм", ''),
       d = prompt ("На сколько его оцените?", '');

    personalMovieDB.movies[a]=b;
    personalMovieDB.movies[d]=c;
    console.log(personalMovieDB);