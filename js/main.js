$(document).ready(function(){

        $('.femme').mouseenter(function() { 
            var id = $(this).attr('id');
            $('#text_'+id).removeClass('invisible-fff');
            $(this).popover({
                html: true,
                boundary: $('#map-container'),
                trigger: 'focus',
                container: 'body'
            }); 
        });
        $('.femme').mouseleave(function() { 
            var id = $(this).attr('id');
            $('#text_'+id).addClass('invisible-fff');
        });

        $('.femme').on('click', function() { 
            var e = $(this);
            e.popover({
                html: true,
                boundary: $('body'),
                trigger: 'focus',
                container: 'body'
            }); 
        });
});
 
// function pop() {
//     alert('yeah');
//     $('#' + nom).popover({
//         html: true,
//         boundary: $('#map-container'),
//         trigger: 'focus click',
//         container: 'body'
//     });
// }

