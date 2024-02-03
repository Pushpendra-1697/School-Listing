const { Router } = require('express');
const schoolRouter = Router();

schoolRouter.post('/store', async (req, res) => {
    res.send('store router')
});

schoolRouter.get('/get', async (req, res) => {
    res.send('get router')
});


module.exports = { schoolRouter };