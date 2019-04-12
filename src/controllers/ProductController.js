const Product = require('../models/Product');

class ProductController {
  async showAll(req, res, next) {
    Product.find()
      .then(result => res.json(result))
      .catch(next);
  }
  async showOne(req, res, next) {
    let id = req.params.id;

    Product.findOne({ _id: id })
      .then(result => res.json(result))
      .catch(next);
  }
  async store(req, res, next) {
    /* let { title, description, price, quantity, image } = req.body;*/
    Product.create(req.body)
      .then(result => res.json(result))
      .catch(next);
  }
  async update(req, res, next) {
    let { id } = req.params;
    Product.findByIdAndUpdate({ _id: id }, req.body)
      .then(() => Ninja.findOne({ _id: id }))
      .then(result => res.json(result))
      .catch(next);
  }
  async delete(req, res, next) {
    let { id } = req.params;
    Product.findByIdAndRemove({ _id: id })
      .then(result => res.json(result))
      .catch(next);
  }
}

module.exports = new ProductController();
