const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag'); // Import ProductTag

// Associations

// A product belongs to a single category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// A category has many products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// A product belongs to many tags through the ProductTag table
Product.belongsToMany(Tag, {
  through: ProductTag, // Use the correct reference here
  foreignKey: 'product_id',
});

// A tag belongs to many products through the ProductTag table
Tag.belongsToMany(Product, {
  through: ProductTag, // Use the correct reference here
  foreignKey: 'tag_id',
});

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag, // Export ProductTag as well
};
