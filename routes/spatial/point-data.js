const {
    save, getList, update
} = require('../../controller/point');

module.exports = (router) => {
    router.post('/point', save);
    router.get('/point', getList);
    router.patch('/point/:id', update);
};
