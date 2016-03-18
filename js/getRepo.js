var apiKey = require('./../.env').apiKey;

function getRepoInfo(){
  $.get('https://api.github.com/users/'+ username +'/repos?access_token=' + apiKey).then(function(response){
    response.forEach(function(repo){
      $(".repoNameList").append("<li>" + repo.name + "</li>");
      $(".repoDescList").append("<li>" + repo.description + "</li>");
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.getRepoInfo = getRepoInfo;
