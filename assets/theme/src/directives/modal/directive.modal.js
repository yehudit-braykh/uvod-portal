(function() {
    var modal = [
        function() {
            return {
                restrict: 'AE',
                transclude: true,
                controller: 'ModalController',
                templateUrl: 'ui/common/modal/view.modal.html',
                scope: {
                    modalTitle: '@?',
                    extraModalClass: '@?'
                }
            }
        }
    ];

    var messageModal = [
        function() {
            return {
                restrict: 'AE',
                templateUrl: 'ui/common/modal/view.message-modal.html',
                transclude: {
                    modalTitle: 'modalTitle',
                    modalBody: 'modalBody',
                    modalConfirmButton: '?modalConfirmButton',
                    modalCancelButton: '?modalCancelButton'
                }
            }
        }
    ];

    var learnMoreModalTrigger = [
        'educationModalService',
        function(educationModalService) {
            return {
                restrict: 'AE',
                link: function(scope, element) {
                    element.bind('click', function(e) {
                        e.preventDefault();
                        educationModalService.showLearnMoreModal();
                    })
                }
            }
        }
    ];

    angular.module('turnon')
        .directive('clixModal', modal)
        .directive('clixMessageModal', messageModal)
        .directive('clixLearnMoreModalTrigger', learnMoreModalTrigger);
}());