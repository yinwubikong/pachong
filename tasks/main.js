let read=require('./read');
let write=require('./wtite');
let async=require('async');
let url="http://top.baidu.com/buzz?b=26";
let Movie=require('../model').movie;
let debug=require('debug')('crawl:main');
async.waterfall([
    function(callback){
        Movie.remove({},callback);
    },
    function(data,callback){
        read(url,callback);
    },
    function(data,callback){
        write(data,callback)

    }
],function(err,result){
    //console.log('wabi');
    debug(`完成电影`);
});