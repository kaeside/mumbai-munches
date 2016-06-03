
var mongoose = require('mongoose');
var ingredients = require('./ingredients');
var Order = require('./model/schema').Order;
var Ingredient = require('./model/schema').Ingredient;

var listIngredients = function(){
    console.log('This will return all of the ingredients');
    return Ingredient.create(ingredients);
};

var spoolOrders = function(){
    return Ingredient.find().exec().then(function(ingredients){
        // loops through all ingredients
        var orders = [];
        for (var i = 0; i < 20; i++) {
            var order = {};
            order.ingredients = [];
            for (var t = 0; t < 5; t++){
                var ingredientIndex = Math.floor(Math.random() * ingredients.length);
                var ingredient = ingredients[ingredientIndex];
            }

        }
    });
};

//TODO: Offer the kitchen staff constant access to a list of active orders, and the ingredients in them.

//TODO: Once per day, allow the ingredient buyers to find the ingredients that are low on stock.

//TODO: The counter staff must see the total price of an order when an order is placed.

//TODO: Generate a monthly report, for the marketing experts, about which ingredients are the most popular.

//TODO: Once every six months, the pricing team updates the ingredient prices (to maximize those profits!)
