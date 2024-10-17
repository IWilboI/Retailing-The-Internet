const sequelize = require('../config/connection'); // Ensure this path is correct
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true }); // Drops and recreates tables
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
