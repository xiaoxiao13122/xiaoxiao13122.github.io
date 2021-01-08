/* 
    第三方的插件
    gulp-scss
    gulp-minify-css
    gulp-rename
*/
const gulp = require("gulp");
const scss = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");

/* 
    index.scss => index.css => index.min.css(重命名)
*/
gulp.task("scss",function(){
    return gulp.src("stylesheet/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

// 批量处理

/* gulp.task("scssAll",function(){
    return gulp.src("css/*.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
}) */

// 处理  js
gulp.task("scripts",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

//处理 html
gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})

//处理数据
gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

//处理图片
gulp.task("img",function(){
    return gulp.src("img/**/*")
    .pipe(gulp.dest("dist/img"))
    .pipe(connect.reload());
})

// 一次性执行多个任务
gulp.task("bulid",["scss","script","copy-html","data","scssAll","images"],function(){
    console.log("项目建立成功");
})


/* 建立监听 */
gulp.task("watch",function(){
    gulp.watch("css/index.scss",["scss"]);
    gulp.watch("css/*.scss",["scssAll"]);
    gulp.watch(["js/*.js","!gulpfile.js"],["script"]);
    gulp.watch("pages/*.html",["copy-html"]);
    gulp.watch(["js/*.json","!package.json"],["data"]);
    gulp.watch("img/**/*",["images"]);
})

// 启动一个服务器 gulp-connect
const connect = require("gulp-connect");
gulp.task("sever",function(){
    connect.server({
        root:"dist",
        port:8888,  //0~65535
        livereload:true
    })
})

//启动一个默认的任务
gulp.task("default",["watch","server"]);