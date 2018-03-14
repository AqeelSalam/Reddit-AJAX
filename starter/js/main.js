console.log('main.js loaded');

var load = function(data){
   for (var i = 0; i < data.length; i++) {

      var $thumbnailUrl = data[i].data.thumbnail;
      if (!$thumbnailUrl.endsWith('.jpg')){
        $thumbnailUrl = "https://applets.imgix.net/https%3A%2F%2Fassets.ifttt.com%2Fimages%2Fchannels%2F1352860597%2Ficons%2Fon_color_large.png%3Fversion%3D0?ixlib=rails-2.1.3&w=240&h=240&auto=compress&s=14be39acc55fbe4638b776011273dfd5";
      }
      var $thumbnailImg = $('<img>',{class:'thumbnailImg',src:$thumbnailUrl});
      var $link = 'https://www.reddit.com/'+data[i].data.permalink;
      var $title = data[i].data.title;

      var $divLinks = $('<div>');
      $('#main').append($divLinks);
      $($divLinks).append($thumbnailImg);
      $($divLinks).append(`<a href="${$link}" target="_blank">${$title}</a>`);
    }
  }

var call = function(navLink){
  var url = `https://www.reddit.com/${navLink}/.json`
  $.ajax({type: 'GET',
  url: url,
  dataType: 'json'
  })
  .then(function(response) {
      console.log("this is working");
      load(response.data.children);
    })
  }

$(document).ready(function(){
  call('hot');
  $('nav a').click(function(event){
    $('#main').empty();
    call(event.target.text);
  })
});
