const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll().then((categoryList) => {
    res.json(categoryList);
  });
  // be sure to include its associated Products
  const prodData = Product.findOne({ where: { id: req.body.id } });
  if (!prodData) {
    res
      .status(400)
      .json({ message: 'No product associated with this category!' })
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try {
    const cateData = Category.findByPk(req.params.id);
    if (!cateData) {
      res.status(404).json({ message: 'No category associated with this ID!' });
      return;
    }
    res.status(200).json(cateData);
  } catch (err) {
    res.status(400).json(err);
  };
  // be sure to include its associated Products
  try {
    let prodData = Product.findByPk(req.params.id);
    if (!prodData) {
      res.status(404).json({ message: 'No category associated with this ID!' });
      return;
    }
    res.status(200).json(prodData);
  } catch (err) {
    res.status(400).json(err);
  };
});

router.post('/', (req, res) => {
  // create a new category
  try {
    let cateData = User.create(req.body);
    res.status(200).json(cateData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    let cateData = User.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!cateData[0]) {
      res.status(404).json({ message: 'No category associated with this id!' });
      return;
    }
    res.status(200).json(cateData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    let cateData = Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!cateData) {
      res.status(404).json({ message: 'No category associated with this ID!' });
      return;
    }
    res.status(200).json(cateData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
