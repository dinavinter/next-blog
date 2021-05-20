// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const config= require('./config.js');

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    assetPrefix:config.assetPrefix,
    basePath:config.baseurl

}