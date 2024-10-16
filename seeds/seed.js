const sequelize = require('../config/connection');
const { Category, Product, Tag } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const categories = await Category.bulkCreate([
    { category_name: 'Electronics' },
    { category_name: 'Fashion' },
  ]);

  const products = await Product.bulkCreate([
    { product_name: 'Laptop', price: 999.99, stock: 10, category_id: categories[0].id },
    { product_name: 'Shirt', price: 19.99, stock: 20, category_id: categories[1].id },
  ]);

  console.log('Database seeded!');
  process.exit(0);
};

seedDatabase();
