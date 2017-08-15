(function() {

    var OfferController = [
        '$q',
        '$scope',
        '$rootScope',
        '$stateParams',
        'offersService',
        'brandsService',
        'userService',
        'catchMediaService',
        'educationModalService',
        'modalService',
        function($q, $scope, $rootScope, $stateParams, offersService, brandsService, userService, catchMediaService, educationModalService, modalService) {


            // modalService.showModal({
            //     controller: 'OfferModalController',
            //     templateUrl: 'ui/common/modal/offer/view.offer-modal.html',
            //     data: {
            //         offerId: $stateParams.id
            //     }
            // });
            //
            //
            // function _resetIsFavorite() {
            //     $scope.isFavorite = userService.isSavedOffer($stateParams.id);
            // }
            //
            // $rootScope.$on('user.login', function(event, data) {
            //     $scope.loggedInUser = data;
            //     _resetIsFavorite();
            // });
            //
            // $rootScope.$on('user.logout', function(event, data) {
            //     delete $scope.loggedInUser;
            //     _resetIsFavorite();
            // });
            //
            // $rootScope.$on('favorite.added', _resetIsFavorite);
            // $rootScope.$on('favorite.removed', _resetIsFavorite);
            //
            // userService.getLoggedInUser()
            //     .then(
            //         function onSuccess(data) {
            //             $scope.loggedInUser = data;
            //             _resetIsFavorite();
            //         }
            //     );
            //
            // $scope.onFavoritePress = function() {
            //     if ($scope.isFavorite) {
            //         userService.removeSavedOffer($stateParams.id);
            //     } else {
            //         userService.addSavedOffer($stateParams.id);
            //     }
            // };
            //
            // $scope.seriesList = [
            //     {
            //         label: 'Most Viewed'
            //     },
            //     {
            //         label: 'Most Viewed'
            //     },
            //     {
            //         label: 'Most Viewed'
            //     }
            // ];
            //
            // $scope.offerMenuItems = [
            //     {
            //         label: 'Save Offer',
            //         icon: 'icon-redeem-plus-icon',
            //         onClick: function() {
            //             console.log('SHARE');
            //         }
            //     },
            //     {
            //         label: 'Share',
            //         icon: 'icon-share-icon',
            //         points: '50',
            //         onClick: function() {
            //             console.log('SHARE');
            //         }
            //     },
            //     {
            //         label: 'Add to Favorites',
            //         icon: 'icon-favorite-icon',
            //         onClick: function() {
            //             console.log('SHARE');
            //         }
            //     }
            // ];
            //
            // offersService.getOfferById($stateParams.id)
            //     .then(
            //         function onSuccess(data) {
            //
            //             $scope.offer = data;
            //             $scope.active = 0;
            //
            //             $scope.configs = {
            //                 title: data.title,
            //                 description: data.description,
            //                 backgroundImage: data.headerImage,
            //                 logo: data.brand ? data.brand.transparentThumbnail : undefined
            //             };
            //         }
            //     );
            //
            // educationModalService.showOfferViewedModal($stateParams.id);
        }
    ];



    angular
        .module('turnon')
        .controller('OfferController', OfferController);
}());