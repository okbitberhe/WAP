products = [];
class Product {
  constructor(id, name, price, description) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._description = description;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  getId() {
    return this._id;
  }
  setId(id) {
    this._id = id;
  }
  getPrice() {
    return this._price;
  }
  setPrice(price) {
    this._price = price;
  }
  getDescription() {
    return this._description;
  }
  setDescription(decription) {
    this._description = description;
  }
  static getAllProducts() {
    return products;
  }
}
products = [
  new Product(1, "pro 1", 6, "product description"),
  new Product(2, "pro 2", 10, "product description"),
  new Product(3, "pro 3", 14, "product description"),
  new Product(3, "pro 4", 16, "product description"),
  new Product(3, "prod 5", 21, "product description"),
  new Product(3, "prod 6", 24, "product description"),
  new Product(3, "prod 7", 34, "product description"),
];
module.exports = Product;
