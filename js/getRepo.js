var apiKey = require('./../.env').apiKey;

function getRepoInfo(){
  $.get('https://api.github.com/users/'+ username +'/repos?access_token=' + apiKey + "&per_page=9999").then(function(response){

    $("#userLogin").append(
      "<a href='" + response[0].owner.html_url + "'>" +

      "<h1 class='user-name'>" + response[0].owner.login + "</h1>" +
      "</a>"

    );

    $("#userAvatar").append(
      "<img src='" + response[0].owner.avatar_url + "'>"
    );

    response.forEach(function(repo){
      $("#repoNameList").append(
        "<a href='" + repo.html_url + "'>" +
          "<li class='repo-name'>" +
            repo.name +
          "</li>" +
        "</a>" +
        "<li class='repo-desc'>" +
          repo.description +
        "</li>" +
        "<hr>");

        console.log(repo)
    });

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.getRepoInfo = getRepoInfo;
