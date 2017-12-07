/* global $ */

var player1 = true;
var count = 1;
var lastSlot = 0;
var temp = 0;
var table = [[0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0]];

$('[data-column]').on('click', function() { 
    
    var columnNum = $(this).attr('data-column');
    var column = $('[data-column="' + columnNum + '"]').toArray();
        
    for(var i = column.length-1; i >= 0; i--) {
        var atRow = column[i];
        var rowNum = $(atRow).attr('data-row');
        
        if ($(atRow).css('background-color')=="rgb(255, 255, 255)") {
        
            if(player1) {
                $(atRow).css('background-color', 'black');
                $(atRow).attr('data-player', '1');
                table[rowNum-1][columnNum-1] = 1;
            } else {
                $(atRow).css('background-color', 'red');
                $(atRow).attr('data-player', '2');
                table[rowNum-1][columnNum-1] = 2;
            }
            
            player1 = !player1; 
            break;
        } else {
            continue;
        }
    } 
    checkHorizontalWin();
    checkVerticalWin();
    checkDiagonalWin();
});


var checkDiagonalWin = function() {
    // from bottom left up
    for (var y = 5; y > 2; y--) {
        for (var x = 0; x <= 3; x++) {
            var player = player1 ? 2 : 1;
            
            if (table[y][x] == player && table[y-1][x+1] == player && table[y-2][x+2] == player && table[y-3][x+3] == player) {
                alert("Win");
            }
        };
    };
    
    //from top left down
    for (var y = 0; y < 3; y++) {
        for (var x = 0; x < 5; x++) {
            var player = player1 ? 2 : 1;
            
            if (table[y][x] == player && table[y+1][x+1] == player && table[y+2][x+2] == player && table[y+3][x+3] == player) {
                alert("Win");
            }
        };
    };
};


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

