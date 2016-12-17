/*! movieListController.js © yamoo9.net, 2016 */
'use strict'

// let angular = require('angular');

angular.module('FingoApp')
  .controller('FingoMovieRankingController',
    ['$scope', '$http', ($scope, $http)=>{

      $http({
      	method: 'GET', //방식
      	url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/random/', /* 통신할 URL */
        // headers: {'Authorization': 'Token ' + window.localStorage['key1'] } //헤더
      	// headers: {'Authorization': 'Token 0428140f0f353791520d51d20ce445c7d41c5cad'} //헤더
      })
      .success(function(data, status, headers, config) {
      	if( data ) {
      		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
          console.log(data.data);
          $scope.fingo_movies = data.data;
      	}
      	else {
      		/* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
          console.log(error);
      	}
      })
      .error(function(data, status, headers, config) {
      	/* 서버와의 연결이 정상적이지 않을 때 처리 */
      	console.log(status);
      });

  }]);
