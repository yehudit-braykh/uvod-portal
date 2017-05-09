(function() {

    var videosService = [
        '$http',
        'VideoModel',
        'VideoListModel',
        'SeriesModel',
        function($http, VideoModel, VideoListModel, SeriesModel) {
            return {

                /**
                 * @todo - Cache this call
                 */
                getVideoById: function(id) {
                    return $http.get('/api/video/get_video_by_id/?id=' + id)
                        .then(
                            function onSuccess(data) {
                                return new VideoModel(data.data);
                            }
                        );
                },

                getRelatedVideos: function(id) {
                    return $http.get('/api/video/get_related_videos?id=' + id)
                        .then(
                            function onSuccess(data) {
                                return new VideoListModel(data.data);
                            }
                        );
                },

                getSeriesById: function(id) {
                    return $http.get('/api/video/get_serie_by_id?id=' + id)
                        .then(
                            function onSuccess(data) {
                                return new SeriesModel(data.data);
                            }
                        );
                },

                /**
                 * @todo - Cache this call
                 */
                getVideosByCategory: function(category) {
                    return $http.get('/api/vod/get_videos_by_category?category=' + category)
                        .then(
                            function onSuccess(data) {
                                return data.data;
                            }
                        );
                }
            }
        }
    ];

    angular
        .module('clixtv')
        .factory('videosService', videosService);
}());