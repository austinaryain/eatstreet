var EatStreet = require('./lib/eatstreet');

var ES = new EatStreet("{yourAPIKey}");


/* Search For a Restaurant */
// var params = {
//   address: 'Madison, WI', // Street Address to Search.
// }
// ES.SearchRestaurants(params, function(err, res){
//     if(err){
//         console.log(err);
//     }
//     console.log(res['restaurants'][0]);
// });

// params = {
//   apiKey: '4e1ac3797e396198459c89af9c680205d30b6aeaa238f8d1',
//   customizations: true
// }
/* Get Restaurant Details */
// ES.RestaurantDetails(params, function(err, res){
//     console.log(res);
// });


/* Iterate through a menu */
// params = {
//   apiKey: '4e1ac3797e396198459c89af9c680205d30b6aeaa238f8d1',
//   customizations: true
// }
// ES.RestaurantMenu(params, function(err, res){
//     res.forEach(function(menuSection){
//         menuSection['items'].forEach(function(menuItem){
//             console.log(menuItem);
//         });
//     });
// });


/* Get a Menu Item Customizations */
// params = {
//     apiKey: '6771808'
// }
// ES.ItemCustomizations(params, function(err, res){
//     console.log(res);
// });