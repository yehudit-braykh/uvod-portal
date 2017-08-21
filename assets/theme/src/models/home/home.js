var h = null;
turnOnApp.controller('homeController', function homeController ($scope, $location, $http, $log,$interval) {
  h = $scope;

  $scope.currentVideo = [];
  $scope.activeSport = [];
  $scope.sports = [{id: '1',
                  title:'Soccer',
                  url:'assets/theme/src/images/sport/1_gray.png',
                  url_hover:'assets/theme/src/images/sport/1_white.png'},
                  {id: '2',
                  title:'Football',
                  url:'assets/theme/src/images/sport/2_gray.png',
                  url_hover:'assets/theme/src/images/sport/2_white.png'},
                  {id: '3',
                  title:'Basketball',
                  url:'assets/theme/src/images/sport/3_gray.png',
                  url_hover:'assets/theme/src/images/sport/3_white.png'},
                  {id: '4',
                  title:'Hokey',
                  url:'assets/theme/src/images/sport/4_gray.png',
                  url_hover:'assets/theme/src/images/sport/4_white.png'},
                  {id: '5',
                  title:'Tennis',
                  url:'assets/theme/src/images/sport/5_gray.png',
                  url_hover:'assets/theme/src/images/sport/5_white.png'},
                  {id: '6',
                  title:'Pingpong',
                  url:'assets/theme/src/images/sport/6_gray.png',
                  url_hover:'assets/theme/src/images/sport/6_white.png'},
                  {id: '7',
                  title:'Volleyball',
                  url:'assets/theme/src/images/sport/7_gray.png',
                  url_hover:'assets/theme/src/images/sport/7_white.png'},
                  {id: '8',
                  title:'Baseball',
                  url:'assets/theme/src/images/sport/8_gray.png',
                  url_hover:'assets/theme/src/images/sport/8_white.png'},
                  {id: '9',
                  title:'Cricket',
                  url:'assets/theme/src/images/sport/9_gray.png',
                  url_hover:'assets/theme/src/images/sport/9_white.png'},
                  {id: '10',
                  title:'Golf',
                  url:'assets/theme/src/images/sport/10_gray.png',
                  url_hover:'assets/theme/src/images/sport/10_white.png'},
                  {id: '11',
                  title:'Water polo',
                  url:'assets/theme/src/images/sport/11_gray.png',
                  url_hover:'assets/theme/src/images/sport/11_white.png'},
                  {id: '12',
                  title:'Boxing',
                  url:'assets/theme/src/images/sport/12_gray.png',
                  url_hover:'assets/theme/src/images/sport/12_white.png'},
                  {id: '13',
                  title:'Bicycle',
                  url:'assets/theme/src/images/sport/13_gray.png',
                  url_hover:'assets/theme/src/images/sport/13_white.png'},
                  {id: '14',
                  title:'Horse racing',
                  url:'assets/theme/src/images/sport/14_gray.png',
                  url_hover:'assets/theme/src/images/sport/14_white.png'},
                  {id: '15',
                  title:'Archery',
                  url:'assets/theme/src/images/sport/15_gray.png',
                  url_hover:'assets/theme/src/images/sport/15_white.png'},
                  {id: '16',
                  title:'Ski',
                  url:'assets/theme/src/images/sport/16_gray.png',
                  url_hover:'assets/theme/src/images/sport/16_white.png'}];

   $scope.activeSport = $scope.sports[0];

   $scope.getActiveSport = function(sport){
     $scope.activeSport = sport;
   }

   $scope.channels = [{title:'1',
                   url:'assets/theme/src/images/logo/espn_network-logo@2x.png'},
                   {title:'2',
                   url:'assets/theme/src/images/logo/espn-2-logo@2x.png'},
                   {title:'3',
                   url:'assets/theme/src/images/logo/nfl-logo@2x.png'},
                   {title:'4',
                   url:'assets/theme/src/images/logo/fox-sports-logo@2x.png'},
                   {title:'5',
                   url:'assets/theme/src/images/logo/eurosport-logo@2x.png'},
                   {title:'6',
                   url:'assets/theme/src/images/logo/espn_network-logo@2x.png'},
                   {title:'7',
                   url:'assets/theme/src/images/logo/nfl-logo@2x.png'}];

   $scope.points = [{title:'Share with friends',
                   url:'assets/theme/src/images/icon/share.png',
                   url_hover:'assets/theme/src/images/icon/share-white.png',
                   points: '150',
                   description: 'Do you want to download free song for ipod? If so, reading this article could save you from getting in to a lot of trouble! '},
                   {title:'Watch advertising',
                   url:'assets/theme/src/images/icon/combined-shape.png',
                   url_hover:'assets/theme/src/images/icon/combined-shape-white.png',
                   points: '300',
                   description: 'Do you want to download free song for ipod? If so, reading this article could save you from getting in to a lot of trouble! '},
                   {title:'Participate in a survey',
                   url:'assets/theme/src/images/icon/survey.png',
                   url_hover:'assets/theme/src/images/icon/survey-white.png',
                   points: '500',
                   description: 'Do you want to download free song for ipod? If so, reading this article could save you from getting in to a lot of trouble! '},
                   {title:'Download application',
                   url:'assets/theme/src/images/icon/phone.png',
                   url_hover:'assets/theme/src/images/icon/phone-white.png',
                   points: '250',
                   description: 'Do you want to download free song for ipod? If so, reading this article could save you from getting in to a lot of trouble! '},
                   {title:'Visit a sponsor page',
                   url:'assets/theme/src/images/icon/dollar-qoute.png',
                   url_hover:'assets/theme/src/images/icon/dollar-qoute-white.png',
                   points: '200',
                   description: 'Do you want to download free song for ipod? If so, reading this article could save you from getting in to a lot of trouble! '}];


 $scope.videosList = [{id: '1',
                 title:'Top Story 3',
                 url_image:'assets/theme/src/images/news/1.png',
                 url_logo:'assets/theme/src/images/logo/nfl-logo@2x.png',
                 points: '150',
                 description: 'The cast brass and cast stainless steel burners have the smallest burrs by far. This will mean less chaos in the gas flow, fewer trapped particulate matter in the burner and a cleaner burning grill. The following comparison shows how the ports are formed. Why is port formation important? Several reasons. If the hole is punched into a sheet metal.'},

                 {id: '2',
                 title:'Top Story 3',
                 url_image:'assets/theme/src/images/news/2.png',
                 url_logo:'assets/theme/src/images/logo/nfl-logo@2x.png',
                 points: '300',
                 description: 'The cast brass and cast stainless steel burners have the smallest burrs by far. This will mean less chaos in the gas flow, fewer trapped particulate matter in the burner and a cleaner burning grill. The following comparison shows how the ports are formed. Why is port formation important? Several reasons. If the hole is punched into a sheet metal.'},

                 {id: '3',
                 title:'Top Story 3',
                 url_image:'assets/theme/src/images/news/3.png',
                 url_logo:'assets/theme/src/images/logo/nfl-logo@2x.png',
                 points: '500',
                 description: 'The cast brass and cast stainless steel burners have the smallest burrs by far. This will mean less chaos in the gas flow, fewer trapped particulate matter in the burner and a cleaner burning grill. The following comparison shows how the ports are formed. Why is port formation important? Several reasons. If the hole is punched into a sheet metal.'},

                 {id: '4',
                 title:'Top Story 3',
                 url_image:'assets/theme/src/images/news/4.png',
                 url_logo:'assets/theme/src/images/logo/nfl-logo@2x.png',
                 points: '250',
                 description: 'The cast brass and cast stainless steel burners have the smallest burrs by far. This will mean less chaos in the gas flow, fewer trapped particulate matter in the burner and a cleaner burning grill. The following comparison shows how the ports are formed. Why is port formation important? Several reasons. If the hole is punched into a sheet metal.'},

                 {id: '5',
                 title:'Top Story 3',
                 url_image:'assets/theme/src/images/news/1.png',
                 url_logo:'assets/theme/src/images/logo/nfl-logo@2x.png',
                 points: '200',
                 description: 'The cast brass and cast stainless steel burners have the smallest burrs by far. This will mean less chaos in the gas flow, fewer trapped particulate matter in the burner and a cleaner burning grill. The following comparison shows how the ports are formed. Why is port formation important? Several reasons. If the hole is punched into a sheet metal.'},

                 {id: '6',
                 title:'Top Story 3',
                 url_image:'assets/theme/src/images/news/2.png',
                 url_logo:'assets/theme/src/images/logo/nfl-logo@2x.png',
                 points: '500',
                 description: 'The cast brass and cast stainless steel burners have the smallest burrs by far. This will mean less chaos in the gas flow, fewer trapped particulate matter in the burner and a cleaner burning grill. The following comparison shows how the ports are formed. Why is port formation important? Several reasons. If the hole is punched into a sheet metal.'},

                 {id: '7',
                 title:'Top Story 3',
                 url_image:'assets/theme/src/images/news/3.png',
                 url_logo:'assets/theme/src/images/logo/nfl-logo@2x.png',
                 points: '250',
                 description: 'The cast brass and cast stainless steel burners have the smallest burrs by far. This will mean less chaos in the gas flow, fewer trapped particulate matter in the burner and a cleaner burning grill. The following comparison shows how the ports are formed. Why is port formation important? Several reasons. If the hole is punched into a sheet metal.'},

                 {id: '8',
                 title:'Top Story 3',
                 url_image:'assets/theme/src/images/news/4.png',
                 url_logo:'assets/theme/src/images/logo/nfl-logo@2x.png',
                 points: '200',
                 description: 'The cast brass and cast stainless steel burners have the smallest burrs by far. This will mean less chaos in the gas flow, fewer trapped particulate matter in the burner and a cleaner burning grill. The following comparison shows how the ports are formed. Why is port formation important? Several reasons. If the hole is punched into a sheet metal.'}];

$scope.socials = [{title:'Frances Patton',
               url_image:'assets/theme/src/images/news/1.png',
               social:'facebook',
               url_user_image:'assets/theme/src/images/icon/profile.png',
               time:'33 min'},
               {title:'Frances Patton',
               url_image:'assets/theme/src/images/news/2.png',
               social:'twitter',
               url_user_image:'assets/theme/src/images/icon/profile.png',
               time:'33 min'},
               {title:'Frances Patton',
               url_image:'assets/theme/src/images/news/3.png',
               social:'instagram',
               url_user_image:'assets/theme/src/images/icon/profile.png',
               time:'33 min'},
               {title:'Frances Patton',
               url_image:'assets/theme/src/images/news/4.png',
               social:'facebook',
               url_user_image:'assets/theme/src/images/icon/profile.png',
               time:'33 min'},
               {title:'Frances Patton',
               url_image:'assets/theme/src/images/news/1.png',
               social:'twitter',
               url_user_image:'assets/theme/src/images/icon/profile.png',
               time:'33 min'},
               {title:'Frances Patton',
               url_image:'assets/theme/src/images/news/2.png',
               social:'instagram',
               url_user_image:'assets/theme/src/images/icon/profile.png',
               time:'33 min'},
              {title:'Frances Patton',
              url_image:'assets/theme/src/images/news/3.png',
              social:'facebook',
              url_user_image:'assets/theme/src/images/icon/profile.png',
              time:'33 min'},
              {title:'Frances Patton',
              url_image:'assets/theme/src/images/news/4.png',
              social:'twitter',
              url_user_image:'assets/theme/src/images/icon/profile.png',
              time:'33 min'},
              {title:'Frances Patton',
              url_image:'assets/theme/src/images/news/1.png',
              social:'instagram',
              url_user_image:'assets/theme/src/images/icon/profile.png',
              time:'33 min'},
              {title:'Frances Patton',
              url_image:'assets/theme/src/images/news/2.png',
              social:'instagram',
              url_user_image:'assets/theme/src/images/icon/profile.png',
              time:'33 min'}];

$scope.epgList = [{title:'Real Madrid - M.United',
                desc: 'Wednesday 22.3.17, 21:30',
                url:'assets/theme/src/images/logo/nfl-logo@2x.png'},
                {title:'AC Milan - Inter Milan',
                desc: 'Wednesday 22.3.17, 21:30',
                url:'assets/theme/src/images/logo/eurosport-logo.png'},
                {title:'FC Barcelona - Chelsea FC',
                desc: 'Wednesday 22.3.17, 21:30',
                url:'assets/theme/src/images/logo/espn.png'},
                {title:'Real Madrid - M.United',
                desc: 'Wednesday 22.3.17, 21:30',
                url:'assets/theme/src/images/logo/nfl-logo@2x.png'},
                {title:'AC Milan - Inter Milan',
                desc: 'Wednesday 22.3.17, 21:30',
                url:'assets/theme/src/images/logo/eurosport-logo.png'},
                {title:'FC Barcelona - Chelsea FC',
                desc: 'Wednesday 22.3.17, 21:30',
                url:'assets/theme/src/images/logo/espn.png'},
                {title:'Real Madrid - M.United',
                desc: 'Wednesday 22.3.17, 21:30',
                url:'assets/theme/src/images/logo/nfl-logo@2x.png'},
                {title:'AC Milan - Inter Milan',
                desc: 'Wednesday 22.3.17, 21:30',
                url:'assets/theme/src/images/logo/eurosport-logo.png'},
                {title:'FC Barcelona - Chelsea FC',
                desc: 'Wednesday 22.3.17, 21:30',
                url:'assets/theme/src/images/logo/espn.png'},
                {title:'Real Madrid - M.United',
                desc: 'Wednesday 22.3.17, 21:30',
                url:'assets/theme/src/images/logo/nfl-logo@2x.png'},
                {title:'AC Milan - Inter Milan',
                desc: 'Wednesday 22.3.17, 21:30',
                url:'assets/theme/src/images/logo/eurosport-logo.png'},
                {title:'FC Barcelona - Chelsea FC',
                desc: 'Wednesday 22.3.17, 21:30',
                url:'assets/theme/src/images/logo/espn.png'}];


  $scope.getFullDescription = function(video){
    $scope.currentVideo = video;
  }

  $('#home_modal').modal('show');

});
