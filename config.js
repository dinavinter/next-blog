const production = process.env.NODE_ENV === 'production'
const baseurl = production ? '/next-blog' : '';

module.exports = {
    pathPrefix: baseurl, // This path is subpath of your hosting https://domain/portfolio
    baseurl: baseurl,
    assetPrefix: `${baseurl}/`

};
