const { Category } = require('../models'); // Ensure the path is correct

const categoryData = [
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Home Appliances',
  },
  {
    category_name: 'Clothing',
  },
  {
    category_name: 'Books',
  },
  {
    category_name: 'Toys',
  },
];

const seedCategories = async () => {
  await Category.bulkCreate(categoryData);
};

module.exports = seedCategories;
