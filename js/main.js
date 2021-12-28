var images = ['/img/10b_Background_fallback_desktop_01_01.jpg', 
              '/img/10b_Background_fallback_desktop_01_02.jpg', 
              '/img/10b_Background_fallback_desktop_01_03.jpg',
              '/img/10b_Background_fallback_desktop_01_04.jpg',
              '/img/10b_Background_fallback_desktop_01_05.jpg',
              '/img/10b_Background_fallback_desktop_01_06.jpg',
              '/img/10b_Background_fallback_desktop_01_07.jpg',
              '/img/10b_Background_fallback_desktop_01_08.jpg',      
              ];

var index  = 0;
var $top   = $('#head-img');

setInterval(function() {
   $top.animate({ opacity: 0 }, 5000, function() {
     $top.css('background-image', 'url('+images[++index]+')');
     $top.animate({ opacity: 1 }, 5000, function() {
       if(index === images.length) index = 0;
     });
   });
}, 6000);