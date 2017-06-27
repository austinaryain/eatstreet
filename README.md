**eatstreet**
----
  This is a simple npm wrapper for the Eat Street API. So far I have only added the restaurant/menu endpoints.
  I will add more as I get there, or feel free to [Submit a PR](https://github.com/austinaryain/eatstreet/pull/new/master)

* **API Key**

  [Sign Up for An API Key Here](https://developers.eatstreet.com)


* **Basic Usage**
----
    Setup your params object with required and optional parameters and pass them and a callback to a method.

* **Methods:**

    ```javascript
        var EatStreet = require('eatstreet');
        var ES = new EatStreet("{yourAPIKey}");
    ```

    
  *Search Restaurants:*  

    ```javascript
    /**
        * Searches EatStreet for restaurants.
        *
        *
        * `params` is an Object in the form:
        * {
        *   address: String // Street Address to Search.
        *   lat: Number     // Lattitude to Search.
        *   long: Number    // Longitude to Search.
        *   method: String  // Delivery, Pickup, Both
        *   radius: Number  // Radius to Search.
        *   search: String  // Query to find keywords.
        * }
        *
        * @param  {Object}  params         options object (described above).
        * @param  {cb}      callback       callback in the form: function (err, response)
    */
    var params = {
    address: 'Madison, WI', // Street Address to Search.
    }
    ES.SearchRestaurants(params, function(err, res){
        if(err){
            console.log(err);
        }
        console.log(res['restaurants'][0]);
    });
    ```

    *Restaurant Details:*  

    ```javascript
    /**
        * Gets full details for a specific restaurant.
        *
        *
        * `params` is an Object in the form:
        * {
        *   apiKey: String  // apiKey gained from SearchRestaurants
        *   address: String // Street address to determine delivery information.
        *   lat: Number     // Lattitude to determine delivery information.
        *   long: Number    // Longitude to determine delivery information.
        * }
        *
        * @param  {Object}  params         options object (described above).
        * @param  {cb}      callback       callback in the form: function (err, response)
    */
    var params = {
        apiKey: '4e1ac3797e396198459c89af9c680205d30b6aeaa238f8d1',
        customizations: true
    }
    /* Get Restaurant Details */
    ES.RestaurantDetails(params, function(err, res){
        console.log(res);
    });
    ```

    *Restaurant Menu:*  

    ```javascript
    /**
        * Gets full menu for a specific restaurant.
        *
        *
        * `params` is an Object in the form:
        * {
        *   apiKey:         String  // apiKey gained from SearchRestaurants
        *   customizations: Boolean // Street address to determine delivery information.
        * }
        *
        * @param  {Object}  params         options object (described above).
        * @param  {cb}      callback       callback in the form: function (err, response)
    */
    var params = {
        apiKey: '4e1ac3797e396198459c89af9c680205d30b6aeaa238f8d1',
        customizations: true
    }
    ES.RestaurantMenu(params, function(err, res){
        res.forEach(function(menuSection){
            menuSection['items'].forEach(function(menuItem){
                console.log(menuItem);
            });
        });
    });
    ```

    *Item Customizations:*  

    ```javascript
    /**
        * Gets item customizations for a specific menu item.
        *
        *
        * `params` is an Object in the form:
        * {
        *   apiKey: String  // apiKey gained from SearchRestaurants
        * }
        *
        * @param  {Object}  params         options object (described above).
        * @param  {cb}      callback       callback in the form: function (err, response)
    */
    /* Get a Menu Item Customizations */
    var params = {
        apiKey: '6771808'
    }
    ES.ItemCustomizations(params, function(err, res){
        console.log(res);
    });
    ```
  

