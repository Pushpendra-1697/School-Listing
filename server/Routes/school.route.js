const { Router } = require('express');
const SchoolModel = require('../Models/school.model');
const schoolRouter = Router();
const multer = require('multer');

// Set up multer to handle file uploads and School Image should upload in 'schoolImages' directory / folder
const upload = multer({ dest: 'schoolImages' });
schoolRouter.post('/upload', upload.single('image'), (req, res) => {
    const file = req.file;
    res.json({ msg: 'Image uploaded successfully', file });
});


// **************** end points: "/school/store" for storinging any new school ****************
schoolRouter.post('/store', async (req, res) => {
    const payload = req.body;
    try {
        const school = new SchoolModel(payload);
        await school.save();
        res.send({ msg: "School added Successfully in DB" });
    } catch (e) {
        res.send({ msg: e.message });
    }
});

// **************** end points: "/school/get" for getting any available schools ****************
schoolRouter.get('/get', async (req, res) => {
    res.send('get router')
});


module.exports = { schoolRouter };