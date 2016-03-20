var apiKey = require('./../.env').apiKey;

function getRepoInfo(){
  $.get('https://api.github.com/users/'+ username +'/repos?access_token=' + apiKey + "&per_page=9999").then(function(response){

    response.forEach(function(repo){
      $("#repoNameList").append("<li class='repo-name'>" + repo.name + "</li>" + "<li class='repo-desc'>" + repo.description + "</li>" + "<hr>");
      // $("#repoDescList").append("<li>" + repo.description + "</li>");
    });

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.getRepoInfo = getRepoInfo;
