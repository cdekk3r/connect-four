/* global $ */

var player1 = true;


$('[data-column]').on('click', function() { 
    
    var column = $(this).attr('data-column');
    
    $('[data-column="' + column + '"]').each(function() {
        // var rows = $(this).attr('data-row');
        var rows = []
        
        if($('data-row').css('background-color', 'white')) {
            
            if(player1) {
                $(this).css('background-color', 'black');
                $(this).attr('data-player', '1')
            } else {
                $(this).css('background-color', 'red');
                $(this).attr('data-player', '2')
            }
            
            player1 = !player1;
            return false;
        }
    });
});
