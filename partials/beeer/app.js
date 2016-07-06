'use strict';

require.config({
  baseUrl: '../../',

  paths: {
    //jquery
    'jquery': 'lib/jquery/dist/jquery.min',
    'jquery-ui': 'lib/jquery-ui/jquery-ui.min',
    'jquery-migrate': 'lib/jquery-migrate/jquery-migrate.min',

    //twitterBootstrap
    'twitterBootstrap': 'lib/bootstrap/dist/js/bootstrap.min',

    //angular
    'angular': 'lib/angular/angular.min',
    'ui.router': 'lib/angular-ui-router/release/angular-ui-router',
    'ngRoute': 'lib/angular-route/angular-route.min',

    //myApp
    'beeer' : 'partials/beeer/app'
  },

  shim: {
    'jquery-migrate': ['jquery'],
    'jquery-ui': ['jquery-migrate'],
    'twitterBootstrap': ['jquery-ui'],
    'angular': ['twitterBootstrap'],
    'ngRoute': ['angular'],
    'ui.router': ['ngRoute'],
    'beeer' : ['ui.router']
  }
});

require(	[
    'beeer'
  ],
  function (beeer) {
    $(document).ready(function () {
      layoutScroll();
    });
  }//$(document).ready
);//require

function layoutScroll() {
  var arrSecTOP = [];
  var idx = 0;
  $('article > section').each(function () {
    arrSecTOP.push($(this).offset().top)
  });
  $('.snb li').on('click',function(){
    var $this = $(this);
    $this.addClass('on').siblings().removeClass('on')
      .find('ul').slideUp("slow").children().removeClass('on');
    if($this.is('.home')){
      $('article').stop().animate({scrollTop:idx});
    }
    if($this.children().is('ul')){$this.find('ul').slideDown("slow")}
    if($this.parent().is('.snb-sub')){
      idx = $this.index();
      $('article').stop().animate({scrollTop:arrSecTOP[idx+1]-20});
    }
    if($this.is('.end-list')){
      $('article').stop().animate({scrollTop:arrSecTOP[arrSecTOP.length-1]});
    }
  });
}

angular.module('todoapp', [])
