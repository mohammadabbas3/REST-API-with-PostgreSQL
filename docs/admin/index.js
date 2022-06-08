const getSample = require('./getSample');
// const getAllAccounts = require('./getSample');
// const getAccount = require('./getAccount');
// const registerAccount = require('./registerAccount');
// const deleteAccount = require('./deleteAccount');

module.exports = {
    paths: {
        // '/user': {
        //     ...getAllAccounts,
        //     ...registerAccount
        // },
        // '/user/:id': {
        //     ...getAccount,
        //     ...deleteAccount
        // }
        '/apis/get/get-user': {
                ...getSample
            }
    }
}