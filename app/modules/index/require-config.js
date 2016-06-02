'use strict';
// Q0. requireJs는 모듈을 동적으로 로드하고 의존성을 관리해주기 위해 사용한다고 알고 있습니다. 그 외에 어떤 기능이 있나요?
//
// Q1. 동적으로 로드해주는 것은 필요한 모듈을 우선적으로 불러오거나 필요한 모듈들만 골라서 불러오기 위함인가요?
//     가령 main.html에 필요한 모듈들을 main.js에 묶어놓았다 치면 main.html인 페이지에만 main.js를 불러오고 다른 페이지에서는
//     불러오지 않는다거나, 달력모듈이 있는 js는 달력기능이 필요한 페이지에만 불러오는 기능이 되는 건가요?
//     구체적으로 어떤 상황에 유용한지 알고 싶습니다.
//
// Q2. index.html을 보면 require-config.js를 불러오는 것이 아닌 require.js를 불러옵니다. require.js가 require-config.js를
//    불러오는 건가요? 순서가 이해가 안가요~

require.config({

// Q3. 모듈의 단축경로와 이름을 지정하는 것이라고 알고 있습니다. 하단 require([...])부분에 들어가는 이름을 정의해주는건가요?
// 하단 경로들은 require-config.js를 기준으로 한 상대 경로들인가요?
	paths: {
		jquery: '../../bower_components/jquery/dist/jquery',

		angular: '../../bower_components/angular/angular',
		angularRoute: '../../bower_components/angular-route/angular-route',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',

		text: '../../bower_components/requirejs-text/text'
	},
	//이부분은 당장은 넘어가도 된다고 하셔서 ^^;;
	shim: {
		'angular' : {
			'exports' : 'angular'
		},
		'angularRoute': {
			deps:['angular']
		},
		'jquery': {
			deps:['angular']
		},
	}


});

// Q4. index는 상단 require.config path에서 지정해주지 않았습니다. 상관없는건가요? 여기서 index는 index.html 인가요?
require([
	'angular',
	'jquery',
	'text',
	'index',
	'angularRoute'
], function(angular, $, text) {
  //Q5. 상단 배열의 값을 인자로 받는 함수 인듯합니다. angular, jquery, text모듈의 로딩이 완료되면 실행되는 거지요?
  //    여기서는 angular를 먼저 부트스트랩하고 jquery를 불러오는데 함수 순서를 바꿔놓으면 jquery가 먼저 실행되나요?
		angular.element().ready(function() {
			angular.bootstrap(document, ['projectWeb']);
		});
    // Q6. angular API에서 부트스트랩부분을 보면 angular.bootstrap(element, [modules], [config]);라고 설명이 되있습니다.
    //     여기서 document란  require-config.js를 불러온 문서를 의미하나요?
    // Q7. ['projectweb']이란 모듈을 넘겨주는 인자값은 무슨 역할을 하나요? head.html에도 index.html에도 안보여서 뭘 의미하는지
    //     무슨 값인지 모르겠습니다.
		$(document).ready(function () {
			console.log('jquery Fire');
		});
	}
);
