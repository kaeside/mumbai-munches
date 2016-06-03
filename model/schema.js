var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
    // What the ingredient is
    name: String,
    // How much we charge for it
    price: Number,
    // How much of the ingredient is in stock
    stock: Number,
    // How many times the ingredient has been used
    count: Number
});

var orderSchema = new Schema({
    // Keep references to each ingredient in the order
    // Used to work out the price of the order
    // Used by kitchen staff to see what to make
    ingredients: [
        {
            id: Schema.Types.ObjectId,
            name: String,
            price: Number
        }
    ],
    // Whether the order is active, or complete
    status: String
});

orderSchema.methods.price = function() {
    return this.ingredients.reduce(function(total, ingredient) {
        return total + ingredient.price;
    }, 0);
};

exports.Ingredient = mongoose.model('Ingredient', ingredientSchema);
exports.Order = mongoose.model('Order', orderSchema);
