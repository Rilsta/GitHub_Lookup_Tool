var getRepoInfo = require('./../js/getRepo.js').getRepoInfo;

$(document).ready(function(){

  $("#hubForm").submit(function(event){
    event.preventDefault();
    $('#repoNameList').text("");
    $('#repoDescList').text("");
    $('#userLogin').text("");
    $('#userAvatar').text("");
    username = $('#usernameInput').val();
    getRepoInfo();
  });

  $("#resetList").click(function(){
    $('#repoNameList').text("");
    $('#repoDescList').text("");
    $('#userLogin').text("");
    $('#userAvatar').text("");
  });

});
