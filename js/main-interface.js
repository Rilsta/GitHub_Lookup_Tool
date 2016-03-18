var getRepoInfo = require('./../js/getRepo.js').getRepoInfo;

$(document).ready(function(){
  $("#hubForm").submit(function(event){
    event.preventDefault();
    username = $('#usernameInput').val();
    getRepoInfo();
  });
  $("#resetList").click(function(){
    $('.repoNameList').text("");
    $('.repoDescList').text("");
  });
});
