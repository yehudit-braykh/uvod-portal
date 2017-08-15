(function() {

    var SHOW_TOOLTIP_DELAY_MS = 500,
        HIDE_TOOLTIP_DELAY_MS = 200;

    var tooltip = function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'ui/common/tooltip/view.tooltip.html',
            scope: {
                tooltipId: '@'
            },
            link: function(scope, element) {
                angular.element(document.body).append(element);
            }
        }
    };

    var tooltipTrigger = [
        '$timeout',
        '$window',
        '$rootScope',
        function($timeout, $window, $rootScope) {
            return {
                restrict: 'A',
                controller: 'TooltipController',
                scope: {
                    tooltipId: '@',
                    cleanup: '@',
                    clickTrigger: '@?'
                },
                link: function(scope, element) {

                    var showTimeout, hideTimeout;

                    $rootScope.$on('$stateChangeStart', function() {
                        if (scope.cleanup !== 'false') {
                            angular.element(document.getElementById(scope.tooltipId)).remove();
                        }
                    });

                    function _getPosition(el) {
                        var xPos = 0;
                        var yPos = 0;

                        while (el) {
                            if (el.tagName == "BODY") {
                                // deal with browser quirks with body/window/document and page scroll
                                var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
                                var yScroll = el.scrollTop || document.documentElement.scrollTop;

                                xPos += (el.offsetLeft - xScroll + el.clientLeft);
                                yPos += (el.offsetTop - yScroll + el.clientTop);
                            } else {
                                // for all other non-BODY elements
                                xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                                yPos += (el.offsetTop - el.scrollTop + el.clientTop);
                            }

                            el = el.offsetParent;
                        }
                        return {
                            x: xPos,
                            y: yPos
                        };
                    }

                    function _hideTooltip(delay) {
                        hideTimeout = $timeout(function() {
                            var tooltipElement = document.getElementById(scope.tooltipId);

                            angular.element(tooltipElement).removeClass('active');

                            $rootScope.$broadcast('tooltip.closed');

                            $timeout(function() {
                                if (tooltipElement) {
                                    tooltipElement.style.top = '-999px';
                                    tooltipElement.style.left = '-999px';
                                }
                            }, 250);

                            if (showTimeout) {
                                $timeout.cancel(showTimeout);
                            }
                        }, delay);
                    }

                    var currentTooltipElement,
                        events = (scope.clickTrigger) ? 'scroll' : 'scroll click';

                    // Hide tooltip on window scroll
                    angular.element($window).on(events, function() {

                        if (!currentTooltipElement) {
                            currentTooltipElement = document.getElementById(scope.tooltipId);
                        }

                        angular.element(currentTooltipElement).removeClass('active');

                        $rootScope.$broadcast('tooltip.closed');

                        if (currentTooltipElement) {
                            currentTooltipElement.style.top = '-999px';
                            currentTooltipElement.style.left = '-999px';
                        }
                    });

                    /**
                     * @todo - Prevent tooltip from extending beyond page bounds
                     */

                    var event = (scope.clickTrigger) ? 'click' : 'mouseenter';
                    angular.element(element).off(event).on(event, function(event) {

                        if (hideTimeout) {
                            $timeout.cancel(hideTimeout);
                        }

                        showTimeout = $timeout(function() {

                            var trigger = angular.element(element),
                                tooltipElement = document.getElementById(scope.tooltipId),
                                height = trigger[0].offsetHeight,
                                width = trigger[0].offsetWidth,
                                tooltipElementWidth = tooltipElement.offsetWidth;

                            var position = _getPosition(trigger[0]),
                                top = (position.y + height),
                                left = ((position.x + (width / 2)) - (tooltipElementWidth / 2));

                            if (left < 0) {
                                left = 0;
                            }

                            if (tooltipElement) {
                                tooltipElement.style.top = top + 'px';
                                tooltipElement.style.left = left + 'px';
                            }

                            angular.element(tooltipElement).addClass('active');

                            $rootScope.$broadcast('tooltip.open');

                            // Don't hide the tooltip if the user hovers over it (since we're mousing off the trigger element)
                            angular.element(document.getElementById(scope.tooltipId)).off('mouseenter').on('mouseenter', function() {
                                if (hideTimeout) {
                                    $timeout.cancel(hideTimeout);
                                }
                            });

                            // Hide the tooltip if the user mouses off of it
                            angular.element(document.getElementById(scope.tooltipId)).off('mouseleave').on('mouseleave', function() {
                                hideTimeout = $timeout(function() {

                                    angular.element(tooltipElement).removeClass('active');

                                    $rootScope.$broadcast('tooltip.closed');

                                    $timeout(function() {
                                        if (tooltipElement) {
                                            tooltipElement.style.top = '-999px';
                                            tooltipElement.style.left = '-999px';
                                        }
                                    }, 250);

                                    if (showTimeout) {
                                        $timeout.cancel(showTimeout);
                                    }

                                }, HIDE_TOOLTIP_DELAY_MS);
                            });
                        }, (scope.clickTrigger) ? 0 : SHOW_TOOLTIP_DELAY_MS);
                    });

                    angular.element(element).on('mouseleave', function() {
                        _hideTooltip(HIDE_TOOLTIP_DELAY_MS);
                    });

                    $rootScope.$on('modal.open', function() {
                        _hideTooltip(0);
                    });
                }
            }
        }
    ];

    angular.module('turnon')
        .directive('clixTooltip', tooltip)
        .directive('clixTooltipTrigger', tooltipTrigger);
}());