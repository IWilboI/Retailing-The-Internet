const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories
router.get('/', (req, res) => {
  Category.findAll()
    .then(categories => res.json(categories))
    .catch(err => res.status(500).json(err));
});

// GET a category by ID
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: [{ model: Product }],
  })
    .then(category => {
      if (!category) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }
      res.json(category);
    })
    .catch(err => res.status(500).json(err));
});

// CREATE a category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then(category => res.status(201).json(category))
    .catch(err => res.status(400).json(err));
});

// UPDATE a category
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: { id: req.params.id },
  })
    .then(updated => {
      if (!updated[0]) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }
      res.json({ message: 'Category updated successfully' });
    })
    .catch(err => res.status(400).json(err));
});

// DELETE a category
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: { id: req.params.id },
  })
    .then(deleted => {
      if (!deleted) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }
      res.json({ message: 'Category deleted successfully' });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
