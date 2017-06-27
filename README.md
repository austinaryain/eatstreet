**eatstreet**
----
  This is a simple npm wrapper for the Eat Street API. So far I have only added the restaurant/menu endpoints.
  I will add more as I get there, or feel free to [Submit a PR](https://github.com/austinaryain/eatstreet/pull/new/master)

* **API Key**

  [Sign Up for An API Key Here](https://developers.eatstreet.com)

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
  

