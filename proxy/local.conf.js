/**
 * prevent browser call
 * @param req - the request
 * @returns
 */
const preventBrowserCalls = (req) => {
    if (req.headers.accept && req.headers.accept.indexOf('html') !== -1) {
        return '/index.html';
    }
    req.headers['X-Custom-Header'] = 'yes';
};
/**
 * Local Proxy Configurations
 * @type {*[]}
 */
const PROXY_CONFIG = [{
    context: [
        '/users',
        '/oauth'
    ],
    target: 'http://localhost:8080',
    secure: false,
    bypass: preventBrowserCalls
}];
module.exports = PROXY_CONFIG;



