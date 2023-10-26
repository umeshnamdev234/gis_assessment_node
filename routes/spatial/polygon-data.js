const {
    save, getList, update
} = require('../../controller/polygon');

module.exports = (router) => {
    router.post('/polygon', save);
    router.get('/polygon', getList);
    router.patch('/polygon/:id', update);
};
