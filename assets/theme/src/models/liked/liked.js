var like = null;
turnOnApp.controller('likedController', function likedController ($scope, $location, $http, $log,$interval,$routeParams) {
  like = $scope;
  $scope.go = function (path) {
    $location.path(path);
  };

  $scope.products = [{ id:'1',
                  title:'2016 BRAZIL CBF MATCH HOME',
                  url:'assets/theme/src/images/market/shoes_1@2x.png',
                  type : "MEN'S FOOTBALL SHIRT",
                  description: "A T-shirt (or tee shirt, or tee) is a style of unisex fabric shirt, named after the T shape of the body and sleeves. It is normally associated with short sleeves, a round neck line known as a crew neck, with no collar. T-shirts are generally made of a light, inexpensive fabric, and are easy to clean.",
                  points: '15000'},
                  { id: '2',
                  title:'2016 BRAZIL CBF MATCH HOME',
                  url:'assets/theme/src/images/market/bag_1@2x.png',
                  type : "MEN'S FOOTBALL SHIRT",
                  description: "A T-shirt (or tee shirt, or tee) is a style of unisex fabric shirt, named after the T shape of the body and sleeves. It is normally associated with short sleeves, a round neck line known as a crew neck, with no collar. T-shirts are generally made of a light, inexpensive fabric, and are easy to clean.",
                  points: '50000'},
                  {id: '3',
                  title:'2016 BRAZIL CBF MATCH HOME',
                  url:'assets/theme/src/images/market/shoes_2@2x.png',
                  type : "MEN'S FOOTBALL SHIRT",
                  description: "A T-shirt (or tee shirt, or tee) is a style of unisex fabric shirt, named after the T shape of the body and sleeves. It is normally associated with short sleeves, a round neck line known as a crew neck, with no collar. T-shirts are generally made of a light, inexpensive fabric, and are easy to clean.",
                  points: '10000'},
                  {id: '4',
                  title:'2016 BRAZIL CBF MATCH HOME',
                  url:'assets/theme/src/images/market/t_shirt_1@2x.png',
                  type : "MEN'S FOOTBALL SHIRT",
                  description: "A T-shirt (or tee shirt, or tee) is a style of unisex fabric shirt, named after the T shape of the body and sleeves. It is normally associated with short sleeves, a round neck line known as a crew neck, with no collar. T-shirts are generally made of a light, inexpensive fabric, and are easy to clean.",
                  points: '10000'},
                  {id: '5',
                  title:'2016 BRAZIL CBF MATCH HOME',
                  url:'assets/theme/src/images/market/shoes_1@2x.png',
                  type : "MEN'S FOOTBALL SHIRT",
                  description: "A T-shirt (or tee shirt, or tee) is a style of unisex fabric shirt, named after the T shape of the body and sleeves. It is normally associated with short sleeves, a round neck line known as a crew neck, with no collar. T-shirts are generally made of a light, inexpensive fabric, and are easy to clean.",
                  points: '15000'},
                  {id: '6',
                  title:'2016 BRAZIL CBF MATCH HOME',
                  url:'assets/theme/src/images/market/bag_1@2x.png',
                  type : "MEN'S FOOTBALL SHIRT",
                  description: "A T-shirt (or tee shirt, or tee) is a style of unisex fabric shirt, named after the T shape of the body and sleeves. It is normally associated with short sleeves, a round neck line known as a crew neck, with no collar. T-shirts are generally made of a light, inexpensive fabric, and are easy to clean.",
                   points: '50000'},
                  {id: '7',
                  title:'2016 BRAZIL CBF MATCH HOME',
                  url:'assets/theme/src/images/market/t_shirt_2@2x.png',
                  type : "MEN'S FOOTBALL SHIRT",
                  description: "A T-shirt (or tee shirt, or tee) is a style of unisex fabric shirt, named after the T shape of the body and sleeves. It is normally associated with short sleeves, a round neck line known as a crew neck, with no collar. T-shirts are generally made of a light, inexpensive fabric, and are easy to clean.",
                  points: '10000'

              }];
});