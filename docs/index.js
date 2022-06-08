const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
// const accounts = require('./accounts');
const accounts = require('./admin');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...accounts
};