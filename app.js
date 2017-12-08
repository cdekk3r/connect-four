/* global $ */

var player1 = true;
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
                table[rowNum-1][columnNum-1] = 1;
            } else {
                $(atRow).css('background-color', 'red');
                table[rowNum-1][columnNum-1] = 2;
            }
            
            player1 = !player1; 
            break;
        } else {
            continue;
        }
    } 
    checkWin();
});

var checkWin = function() {
    if (checkDiagonalWin() || checkVerticalWin() || checkHorizontalWin()) {
        alert("Win");
    }
}

var checkDiagonalWin = function() {
    // from bottom left up
    for (var y = 5; y > 2; y--) {
        for (var x = 0; x <= 3; x++) {
            var player = player1 ? 2 : 1;
            
            if (table[y][x] == player && table[y-1][x+1] == player && table[y-2][x+2] == player && table[y-3][x+3] == player) {
                return true;
            }
        };
    };
    
    //from top left down
    for (var y = 0; y < 3; y++) {
        for (var x = 0; x < 5; x++) {
            var player = player1 ? 2 : 1;
            
            if (table[y][x] == player && table[y+1][x+1] == player && table[y+2][x+2] == player && table[y+3][x+3] == player) {
                return true;
            }
        };
    };
};


var checkHorizontalWin = function() {
    
    for (var y = 5; y >= 0; y--) {
        for(var x = 0; x <= 3; x++) {
            var player = player1 ? 2 : 1;
            
            if (table[y][x] == player && table[y][x+1] == player && table[y][x+2] == player && table[y][x+3] == player) {
                return true;
            }
        }
    };
};

var checkVerticalWin = function() {
    
    for (var y = 5; y >= 3; y--) {
        for(var x = 0; x <= 6; x++) {
            var player = player1 ? 2 : 1;
            
            if (table[y][x] == player && table[y-1][x] == player && table[y-2][x] == player && table[y-3][x] == player) {
                return true;
            }
        }
    }
};

var newGame = function() {
    $('[data-row]').css('background-color', 'white');
    reset();
    player1 = true;
};

var reset = function() {
  for (var x = 0; x < 6; x++) {
      for (var y = 0; y <= 5; y++) {
          if (table[y][x] !== 0) {
                  table[y][x] = 0;
              }
      }
  }
  return table;
}