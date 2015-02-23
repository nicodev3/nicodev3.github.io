module.exports = function() {
    var config = {
        // css
        sass: [
            './_sass/**/*.scss'
        ],
        // all js to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        css: './css'
    };
    return config;
};