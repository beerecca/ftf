(function(){

var app = angular.module('ftf', ['firebase']);

/*feed in upload data from firebase*/
app.controller("CompetitionController", function($scope, $firebase){
	var ref = new Firebase("https://ftf.firebaseio.com/uploads");
	$scope.uploads = $firebase(ref);
	$scope.addUpload = function() {
		$scope.uploads.$add({
			title: $scope.comp.upload.title,
			description: $scope.comp.upload.description,
			firstname: $scope.comp.upload.firstname,
			lastname: $scope.comp.upload.lastname,
			email: $scope.comp.upload.email,
			image: $scope.comp.upload.image
		});
		$scope.comp.upload.title = "";
		$scope.comp.upload.description = "";
		$scope.comp.upload.firstname = "";
		$scope.comp.upload.lastname = "";
		$scope.comp.upload.email = "";
		$scope.comp.upload.image = "";
	}; /*end addUpload*/


/*var ref = new Firebase("https://ftf.firebaseio.com/uploads/0/comments");
	$scope.comments = $firebase(ref);
	$scope.addComment = function() {

		$scope.comments.$add({
			body: $scope.comp.upload.comment.body,
			author: $scope.comp.upload.comment.author,
		});

	};*/ /*end addComment*/



}); /*end CompetitionController*/


/*feed in new comment data from comments form*/
app.controller("CommentsController", function(){
this.comment = {};

this.addComment = function(upload) {
upload.comments.push(this.comment);
this.comment = {};
};
});


/*so this works but doesnt push the data to firebase, so isn't saved when you refresh the page. don't know how to access the children of uploads... 
https://www.firebase.com/blog/2013-04-12-denormalizing-is-normal.html (tried this but got super lost)
http://stackoverflow.com/questions/18624928/choose-between-angularfire-and-angularfirecollection (makes a little more sense?)
http://stackoverflow.com/questions/19459640/get-the-index-id-of-an-item-in-firebase-angularfire (also more sense?)*/

})(); /*end outer function*/

