const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    
});

// @route POST api/items
// @desc Create An Item
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem
    .save()
    .then(item => res.status(201).json(item));

});

// @route DELETE api/items/1
// @desc Delete An Item
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => {
      res.json({
        message: "Item deleted!"
      })
    }))
    .catch(err => res.status(404).json({
      message: "Could not find item with that ID!"
    }));

});

module.exports = router;