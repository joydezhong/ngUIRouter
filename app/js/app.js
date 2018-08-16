var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home',{
		url: '/home',
		templateUrl: 'templates/home.html'
	}).state('home.list',{
		url: '/list',
		templateUrl: 'templates/home-list.html',
		controller: function($scope){
			$scope.topics = ['Butterscotch', 'Black Current', 'Mango'];
		}
	}).state('home.paragraph', {
		url: '/paragraph',
		template: '666，牛逼的paragraph页面'
	}).state('about',{
		//多个ui-view的情况
		url: '/about',
		views: {
			//，没有指定view
			'': {
				templateUrl: 'templates/about.html'
			},
			// ui-view='colnumOne'
			'columnOne@about': {
				template: '这里是第一列的内容'
			},
			// ui-view='columnTwo'
			'columnTwo@about': {
				templateUrl: 'templates/table-data.html',
				controller: 'table-Controller'
			}
		}
	})
}]);

routerApp.controller('table-Controller', function($scope){
	$scope.message = 'test';
	$scope.topics = [{
		name: 'Butterscotch',
		price: 50
	},
	{
		name: 'Black Current',
		price: 100
	},
	{
		name: 'Mango',
		price: 20
	}];
});