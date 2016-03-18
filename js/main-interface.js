var apiKey = require('./../.env').apiKey;
var GhUser = require('./../js/ghUser.js').GhUser;

$(document).ready(function(){

  $.get('https://api.github.com/users/daneden/repos?access_token=' + apiKey).then(function(response){
    response.forEach(function(repo){
      $(".repoNameList").append("<li>" + repo.name + "</li>");
      $(".repoDescList").append("<li>" + repo.description + "</li>");
    })
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
});
