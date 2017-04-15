(function() {

    var educationModalService = [
        '$log',
        '$rootScope',
        '$uibModal',
        function($log, $rootScope, $uibModal) {

            function _launchFavoriteEducationModal(event, data) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'ui/common/modal/education/view.education-modal.html',
                    controller: 'EducationModalController',
                    windowClass: 'clix-modal-window',
                    size: 'clix-lg',
                    resolve: {
                        itemData: {
                            loggedInUser: data.user,
                            type: data.type,
                            id: data.id
                        }
                    }
                });

                modalInstance.opened.then(
                    function onSuccess() {
                        $rootScope.$broadcast('modal.open');
                    }
                );

                modalInstance.closed.then(
                    function onSuccess() {
                        $rootScope.$broadcast('modal.close');
                    }
                );

                modalInstance.result.then(
                    function onSuccess(data) {

                    },
                    function onError(error) {

                    }
                );
            }

            return {
                initialize: function() {
                    $log.debug('Initializing education modal service');

                    $rootScope.$on('favorite.added', _launchFavoriteEducationModal);
                    $rootScope.$on('favorite.added.anonymous', _launchFavoriteEducationModal);
                }
            }
        }
    ];

    angular
        .module('clixtv')
        .factory('educationModalService', educationModalService);
}());