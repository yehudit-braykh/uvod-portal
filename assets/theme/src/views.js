angular.module('turnon').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('models/footer/footer.html',
    ""
  );


  $templateCache.put('models/header_page/header.html',
    "<div class=header_page ng-controller=headersController><nav class=\"navbar navbar-default\"><div class=container-fluid><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#bs-example-navbar-collapse-1 aria-expanded=false><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button><div class=navbar-brand href=#>Brand</div></div><div class=\"collapse navbar-collapse\" id=bs-example-navbar-collapse-1><ul class=\"nav navbar-nav\"><li class=active><a href=#>Link <span class=sr-only>(current)</span></a></li><li><a href=#>Link</a></li><li class=dropdown><a href=# class=dropdown-toggle data-toggle=dropdown role=button aria-haspopup=true aria-expanded=false><span class=caret></span></a><ul class=dropdown-menu><li><a href=#>Action</a></li><li><a href=#>Another action</a></li><li><a href=#>Something else here</a></li><li role=separator class=divider></li><li><a href=#>Separated link</a></li><li role=separator class=divider></li><li><a href=#>One more separated link</a></li></ul></li></ul><form class=\"navbar-form navbar-left\"><div class=form-group><input type=text class=form-control placeholder=Search></div><button type=submit class=\"btn btn-default\">Submit</button></form><ul class=\"nav navbar-nav navbar-right\"><li><a href=#>Link</a></li><li class=dropdown><a href=# class=dropdown-toggle data-toggle=dropdown role=button aria-haspopup=true aria-expanded=false>Dropdown <span class=caret></span></a><ul class=dropdown-menu><li><a href=#>Action</a></li><li><a href=#>Another action</a></li><li><a href=#>Something else here</a></li><li role=separator class=divider></li><li><a href=#>Separated link</a></li></ul></li></ul></div></div></nav></div>"
  );


  $templateCache.put('models/home/home.html',
    "<div class=\"container-fluid home_page\"><div class=\"col-xs-12 sport_list_container\"><div class=kinds_of_sports ng-repeat=\"sl in sportLogos\"><div class=sport_logo style=\"background-image: url('{{sl.url}}')\"></div><div class=sport_title></div></div></div><div class=\"col-xs-12 center_container\"><div class=\"col-xs-12 center_image\" style=\"background-image: url('assets/theme/src/images/bg/football-manch.png')\"></div></div><div class=\"col-xs-12 channels_container\"><div class=channel ng-repeat=\"channel in channels\"><div class=channel_logo style=\"background-image: url('{{channel.url}}')\"></div></div></div><div class=\"col-xs-12 content_container\"><div class=\"col-xs-12 content_title title1\">GAIN POINTS!</div><div class=\"col-xs-12 points_container\"><div class=\"col-xs-15 point\" ng-repeat=\"point in points\"><div class=\"point_logo {{point.class}}\"></div></div></div></div></div>"
  );

}]);
