var Product = require('../models/product');

var mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connect("mongodb://ayush:ayush2018@ds129926.mlab.com:29926/farm-factory");


var products = [
    new Product({
        imagePath: '',
        title: 'CROP 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 269
    }),
    new Product({
        imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/21014/3/21014382_1SZ.jpg',
        title: 'CROP 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 209
    }),
    new Product({
        imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/127373/6/127373656SZ.jpg',
        title: 'CROP 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
        price: 169
    }),
    new Product({
        imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/122163/8/122163887SZ.jpg',
        title: 'CROP 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 79
    }),
    new Product({
        imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/124776/7/124776759_1GG.jpg',
        title: "CROP 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 108
    }),
    new Product({
        imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/126036/2/126036287SZ.jpg',
        title: "CROP 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 99
    })
];


function seedDB() {
    //Remove all campgrounds
    Product.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        products.forEach(function(seed) {
            Product.create(seed, function(err, camp) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    camp.save();


                }
            });
        });
    });
    //add a few comments
}

// function seedDB() {
//     Product.remove({}, function(err) {
//         if (err) {
//             console.log(err);
//         }
//         console.log("removed products");
//         var done = 0;
//         for (var i = 0; i < products.length; i++) {
//             products[i].save(function(err, result) {
//                 done++;
//                 if (done === products.length) {
//                     exit();
//                 }
//             });
//         }
//     });
// }



var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}