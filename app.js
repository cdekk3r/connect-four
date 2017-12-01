/* global $ */

var player1 = true;
var count = 1;
var lastSlot = 0;
var temp = 0;
var board = {};


$('[data-row="1"]').on('click', function() { 
    
    var columnNum = $(this).attr('data-column');
    var rowNum = $(this).attr('data-row');
    var column = $('[data-column="' + columnNum + '"]').toArray();
    var length = column.length-1;
    
        
    for(var i = column.length-1; i >= 0; i--) {
        var atRow = column[i];
        
        if ($(atRow).css('background-color')=="rgb(255, 255, 255)") {
        
            if(player1) {
                $(atRow).css('background-color', 'black');
                $(atRow).attr('data-player', '1');
            } else {
                $(atRow).css('background-color', 'red');
                $(atRow).attr('data-player', '2');
            }
            
            player1 = !player1;
            break;
        } else {
            continue;
        }
    } 
    
    checkHorizontalWin();
    checkVerticalWin();
});
    

var checkHorizontalWin = function() {
    
    for (var y = 6; y >= 1; y--) {
        var row = $('[data-row="' + y + '"]').toArray();
    
        for(var x = 1; x <= row.length-1; x++) {
            var col = $('[data-column="' + x + '"][data-row="' + y + '"]');
            var player = $(col).attr('data-player');
            
            if (player == 1) {
                temp = 1;
            } else if (player ==2) {
                temp = 2;
            } else {
                temp = 0;
            }
            
            if (player == lastSlot) {
                count++
                if (count == 4) break;
            } else {
                count = 1;
            }
            
            lastSlot = temp;
        }
        
        
        if (count == 4) {
            alert("Win");
        }
    };
};

var checkVerticalWin = function() {
    
    for (var x = 1; x <= 7; x++) {
        var column = $('[data-column="' + x + '"]').toArray();
        
    
        for(var y = 6; y >= 1; y--) {
            var row = $('[data-row="' + y + '"][data-column="' + x + '"]');
            var player = $(row).attr('data-player');
            
            if (player == 1) {
                temp = 1;
            } else if (player ==2) {
                temp = 2;
            } else {
                temp = 0;
            }
            
            if (player == lastSlot) {
                count++
                if (count == 4) break;
            } else {
                count = 1;
            }
            
            lastSlot = temp;
        }
        
        
        if (count == 4) {
            alert("Win");
        }    
    }
};

var checkDiagonalWin = function() {
    
    
    
};