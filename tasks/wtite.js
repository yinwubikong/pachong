let Movie=require('../model').movie;
let async=require('async');
let debug=require('debug')('crawl:wtite');
module.exports=function(movies,callback){
    async.forEach(movies, function (movie,cb) {
        Movie.create(movie,cb);
        debug(`写入电影:${movie.name}`);
    },callback);
    //Movie.create(movies,callback);
};








