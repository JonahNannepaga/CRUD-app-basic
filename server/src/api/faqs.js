const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');

// const db = monk(process.env.MONGO_URI);
// const faqs = db.get('faqs');

// const schema = Joi.object({
//   question: Joi.string().trim().required(),
//   answer: Joi.string().trim().required(),
// });

const router = express.Router();

// READ ALL
router.get('/', (req, res, next) => {
  try {
    // const items = faqs.find({});
    // res.json(items);
    res.json({
      message: 'Hello READ ALL',
    })
  } catch (error) {
    next(error);
  }
});

// READ One
router.get('/:id', async (req, res, next) => {
  try {
    // const {
    //   id
    // } = req.params;
    // const item = await faqs.findOne({
    //   _id: id,
    // });
    res.json({
      message: 'Hello READ one',
    })
  } catch (error) {
    next(error);
  }
});

// Create one
router.post('/', async (req, res, next) => {
  try {
    // const value = await schema.validateAsync(req.body);
    // const inserted = await faqs.insert(value);
    // res.json(inserted);
    res.json({
      message: 'Hello CREATE one',
    })
  } catch (error) {
    next(error);
  }
});

// Update one
router.put('/:id', (req, res, next) => {
  res.json({
    message: 'Hello UPDATE one',
  })
});

// delete one
router.delete('/:id', (req, res, next) => {
  res.json({
    message: 'Hello DELETE one',
  })
});

module.exports = router;