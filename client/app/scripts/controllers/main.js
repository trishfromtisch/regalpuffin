'use strict';

/**
 * @ngdoc function
 * @name regalpuffinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the regalpuffinApp
 */
angular.module('regalpuffinApp')
  .controller('MainCtrl', function ($scope, $location, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   $scope.linkTo = function(id) {
     $location.url(id);
   };

      $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    var rpcTemplate = '<div class="row"><div class="col-md-4 col-md-offset-1"><img class="responsive mb-sm" style="margin-top:-20px" src="images/logo-footer.png" alt=""/></div><div class="col-md-6 text-left"><h2>Bringing quality coffee to Brooklyn</h2><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Regal Puffin will be a neighborhood specialty coffee roaster and espresso cafe built for the fast paced commercial and residential mix of Brooklyn. We’ll select choice, high quality, specialty green coffee beans to be roasted with care and made available for purchase by in-store guests and wholesale buyers. Using precise, cutting edge techniques, will brew and serve coffee that boasts our beans’ distinctive character. With the purchase of any beverage made with our velvety, sweet espresso or bright, juicy coffee, all guests will receive a complimentary chocolate “crown.” Guests will also be able to enjoy an assortment of fresh baked croissants, fresh squeezed juices, and curated selection of Brooklyn made goods for resale.</p></div></div>'

    $scope.tabs = [{
            title: 'Regal Puffin Coffee',
            template: rpcTemplate
        }, {
            title: 'Who we are',
            template: '  <div class="row"> <div class="col-sm-6 col-sm-offset-3"><img alt="" src="images/biopic.png" class="responsive mb-sm"> </div> </div> <div class="row"> <div class="col-sm-10 col-sm-offset-1"> <a name="who-we-are"></a>  <p> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re a pair of siblings who grew up by the cliffs and beaches of northeastern New Jersey, with New York City never far from our line of sight.  Coffee first came into our consciousness thanks to our Grandma Mary, whose heritage hailed back to Italy, birthplace of espresso. Her post-meal ritual of hollering for a cup of coffee piqued our childhood curiosity, but it wasn’t until college that we picked up the habit ourselves. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As we matured, so did our relationship with coffee.   Once exposed to specialty coffee and brews of independent coffee shops, caffeine dependency gave way to a thirst for coffee as it was meant to be tasted -- its richness, sweetness, and subtleties preserved and showcased in uncommon lighter roasts. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’ve never been content to consume rather than create.  Danielle completed a double bachelor’s degree in Business Management and HR while garnering valuable experience in Hospitality, developing the expertise she’d need to start a coffee shop distinguished by exceptional service.  Ray blends his technical savvy as a registered Professional Mechanical Engineer with culinary ingenuity to whip up gourmet creations, like chocolate tempered in a sous-vide immersion circulator that he built himself. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Together we cannot wait to get started roasting and serving the best coffee to our neighbors in Brooklyn and beyond. </p> </div> </div>'
          }, {
            title: 'Our philosophy',
            template: '<div class="row"> <div class="col-sm-5"> <img alt="" src="images/Logo-Puffin.png" class="responsive mb-sm"> </div> <div class="col-sm-7"> <a name="our-philosophy"></a><p><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We believe that coffee should be intentional. It is vital to be discerning about where and how beans are sourced, that the style of roasting compliments the variety of beans, and that each step in this process is done with deliberate care. We appreciate the importance of providing a level of service that matches the product. Our focus extends past the menu, into providing an overall superior experience unlike any coffee shop in the market. </p> </div> </div>'
    }];

    $scope.currentTab = rpcTemplate;

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.template;
    }
    
    $scope.isActiveTab = function(tabTemplate) {
        return tabTemplate == $scope.currentTab;
    }

    $scope.master = {};
    $scope.clear = {};

    $scope.buttonStatus = "Subscribe";

    $scope.sent = false

    $scope.update = function(user) {
      $scope.master = angular.copy(user);

      $http.post('/sign-up', {
          email: user.email
      }).success(function(data, status, headers, config) {
              // if(data.success){
                  // $location.path('/');
                  $scope.form.$submitted;
                  $scope.buttonStatus = "Thank You";
                  $scope.sent = true;
                  $scope.reset();
        }).error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(data.msg);
      });


    };
      
    $scope.reset = function(form) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      $scope.user = angular.copy($scope.clear);
    };

  });
