//Ariana Brown ariana_brown@student.uml.edu

// array from assignment, as well as tile images. board images from classmate.
var newTiles = [] ;
newTiles["A"] = { "value" : 1,  "total-start" : 9,  "num-left" : 9,  "image" : "images/Scrabble_Tile_A.jpg"  } ;
newTiles["B"] = { "value" : 3,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_B.jpg"  } ;
newTiles["C"] = { "value" : 3,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_C.jpg"  } ;
newTiles["D"] = { "value" : 2,  "total-start" : 4,  "num-left" : 4,  "image" : "images/Scrabble_Tile_D.jpg"  } ;
newTiles["E"] = { "value" : 1,  "total-start" : 12, "num-left" : 12, "image" : "images/Scrabble_Tile_E.jpg"  } ;
newTiles["F"] = { "value" : 4,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_F.jpg"  } ;
newTiles["G"] = { "value" : 2,  "total-start" : 3,  "num-left" : 3,  "image" : "images/Scrabble_Tile_G.jpg"  } ;
newTiles["H"] = { "value" : 4,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_H.jpg"  } ;
newTiles["I"] = { "value" : 1,  "total-start" : 9,  "num-left" : 9,  "image" : "images/Scrabble_Tile_I.jpg"  } ;
newTiles["J"] = { "value" : 8,  "total-start" : 1,  "num-left" : 1,  "image" : "images/Scrabble_Tile_J.jpg"  } ;
newTiles["K"] = { "value" : 5,  "total-start" : 1,  "num-left" : 1,  "image" : "images/Scrabble_Tile_K.jpg"  } ;
newTiles["L"] = { "value" : 1,  "total-start" : 4,  "num-left" : 4,  "image" : "images/Scrabble_Tile_L.jpg"  } ;
newTiles["M"] = { "value" : 3,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_M.jpg"  } ;
newTiles["N"] = { "value" : 1,  "total-start" : 6,  "num-left" : 6,  "image" : "images/Scrabble_Tile_N.jpg"  } ;
newTiles["O"] = { "value" : 1,  "total-start" : 8,  "num-left" : 8,  "image" : "images/Scrabble_Tile_O.jpg"  } ;
newTiles["P"] = { "value" : 3,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_P.jpg"  } ;
newTiles["Q"] = { "value" : 10, "total-start" : 1,  "num-left" : 1,  "image" : "images/Scrabble_Tile_Q.jpg"  } ;
newTiles["R"] = { "value" : 1,  "total-start" : 6,  "num-left" : 6,  "image" : "images/Scrabble_Tile_R.jpg"  } ;
newTiles["S"] = { "value" : 1,  "total-start" : 4,  "num-left" : 4,  "image" : "images/Scrabble_Tile_S.jpg"  } ;
newTiles["T"] = { "value" : 1,  "total-start" : 6,  "num-left" : 6,  "image" : "images/Scrabble_Tile_T.jpg"  } ;
newTiles["U"] = { "value" : 1,  "total-start" : 4,  "num-left" : 4,  "image" : "images/Scrabble_Tile_U.jpg"  } ;
newTiles["V"] = { "value" : 4,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_V.jpg"  } ;
newTiles["W"] = { "value" : 4,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_W.jpg"  } ;
newTiles["X"] = { "value" : 8,  "total-start" : 1,  "num-left" : 1,  "image" : "images/Scrabble_Tile_X.jpg"  } ;
newTiles["Y"] = { "value" : 4,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_Y.jpg"  } ;
newTiles["Z"] = { "value" : 10, "total-start" : 1,  "num-left" : 1,  "image" : "images/Scrabble_Tile_Z.jpg"  } ;
newTiles["_"] = { "value" : 0,  "total-start" : 2,  "num-left" : 2,  "image" : "images/Scrabble_Tile_Blank.jpg"  } ;

var newBoard = {};

newBoard.cells = [];
newBoard.cells[0] = [];
newBoard.cells[0][4] = { "letterMult": 1, "mult_word": 1, "image": "images/BoardBlank.png"};
newBoard.cells[0][5] = { "letterMult": 1, "mult_word": 1, "image": "images/BoardBlank.png"};
newBoard.cells[0][6] = { "letterMult": 1, "mult_word": 2, "image": "images/BoardDWord.png"};
newBoard.cells[0][0] = { "letterMult": 1, "mult_word": 2, "image": "images/BoardDWord.png"};
newBoard.cells[0][1] = { "letterMult": 1, "mult_word": 1, "image": "images/BoardBlank.png"};
newBoard.cells[0][2] = { "letterMult": 1, "mult_word": 1, "image": "images/BoardBlank.png"};
newBoard.cells[0][3] = { "letterMult": 2, "mult_word": 1, "image": "images/BoardDLetter.png"};

// counts rows and columns from newBoard
newBoard.rows = Object.keys(newBoard.cells).length;
newBoard.cols = Object.keys(newBoard.cells[0]).length;

// Score tracker
var newScore = { "totalScore": 0, "highScore": 0 };

// Function to calculate and return the score for the tiles currently on the board.
newScore.calcBoardScore = function() {
    var jrow, jcol, letter, tile_val, mult_word = 1, board_score = 0;
    jrow = 0;
    
    // Check if the word is valid before proceeding.
    if (!check_word()) {
        return 0;
    }
    
    // Iterate through the board columns to count values with multipliers.
    for (jcol = 0; jcol < newBoard.cols; ++jcol) {
        // Get the letter from the current cell.
        letter = newBoard.cells[jrow][jcol].letter;

        // Check if the cell contains a letter.
        if (letter) {
            // Retrieve the value of the tile based on the letter.
            tile_val = newTiles[letter].value;
    
            // Update the board score with the tile value and letter multiplier.
            board_score += tile_val * newBoard.cells[jrow][jcol].letterMult;
            // Multiply word multipliers for each column.
            mult_word *= newBoard.cells[jrow][jcol].mult_word;
        }
    }
    

    // Apply mult_word to the total board score.
    board_score *= mult_word;

    return board_score;
}

// Function to update the scoreboard and page.
newScore.refreshBoard = function() {
    var boardScore = newScore.calcBoardScore();
    // console.log(boardScore);

    // Update score display and color based on the board score.
    $("#score").html(newScore.totalScore + " (+<span id='boardScore'>" + boardScore + "</span>)");
}

// Function to update the total score and the highest score.
newScore.com_score = function() {
    var boardScore = newScore.calcBoardScore();

    // Update total score and display it.
    newScore.totalScore += boardScore;
    $("#score").html(newScore.totalScore);
}

// Function to reset the score to 0 and the page.
newScore.restart = function() {
    // Reset the total score to 0 and update the display.
    newScore.totalScore = 0;
    $("#score").html(0);
}
// Function to return tile letter from a board slot.
//newBoard.get_letter_from_slot = function(row, col) {
    //return newBoard.cells[row][col].letter;
//}
//newBoard.find_cell_id = function(tileId) {
// var jrow, iCol;

//   jrow = 0;
//   for (iCol = 0; iCol < newBoard.cols; ++iCol) {
      //  if (newBoard.cells[jrow][iCol].tileId === tileId) {
           // return [jrow, iCol];

//return false;
// Function to create the HTML representation of the board.
newBoard.make_boa = function() {
    var row, col, imgpath, new_cell;
    var width_bg = 100, height_bg = 110;

    // Set fixed height and width for the board based on the number of rows and columns.
    $("#board").css("height", (height_bg + 4) * newBoard.rows);
    $("#board").css("width", (width_bg + 4) * newBoard.cols);

    // Lay down the board images.
    row = 0;
    for (col = 0; col < newBoard.cols; ++col) {
        imgpath = newBoard.cells[row][col].image;
        new_cell = $("<div class=\"boardSlot\" row=\"" + row + "\" col=\"" + col + "\" style=\"background-image: url(" + imgpath + ")\" />");
        $("#board").append(new_cell);
        new_cell.css({"width": width_bg, "height": height_bg, "margin": 1, "border-width": 1});
    }
}

// Function to clear the board.
newBoard.clear_boa = function() {
    var jrow, jcol;

    // Remove all images from the board.
    $("#board img").remove();

    // Reset the slot data structure.
    jrow = 0;
    for (jcol = 0; jcol < newBoard.cols; ++jcol) {
      delete newBoard.cells[jrow][jcol].tileId;
      delete newBoard.cells[jrow][jcol].letter;
    }
}


// Function to return tile letter from a board slot.
newBoard.get_letter_from_slot = function(row, col) {
    return newBoard.cells[row][col].letter;
}

// Function to return Tile ID from a board slot.
newBoard.get_tile_from_slot = function(row, col) {
    return newBoard.cells[row][col].tileId;
}


// Function to check if a board slot is empty.
newBoard.if_cell_empty = function(row, col) {
    return typeof(newBoard.cells[row][col].tileId) === "undefined";
}

// Function to add a tile to a board slot.
newBoard.cell_add = function(tileId, letter, row, col) {
    var jrow, jcol;

    // If the tile is from another slot, clear that slot.
    jrow = 0;
    for (jcol = 0; jcol < newBoard.cols; ++jcol) {
        if (newBoard.cells[jrow][jcol].tileId === tileId) {
            delete newBoard.cells[jrow][jcol].tileId;
            delete newBoard.cells[jrow][jcol].letter;
        }
    }

    // Update the target slot.
    newBoard.cells[row][col].letter = letter;
    newBoard.cells[row][col].tileId = tileId;
}
// Function to find the board slot from a given Tile ID.
newBoard.find_cell_id = function(tileId) {
  var jrow, jcol;

    jrow = 0;
    for (jcol = 0; jcol < newBoard.cols; ++jcol) {
        if (newBoard.cells[jrow][jcol].tileId === tileId) {
            return [jrow, jcol];
        }
    }

  return false;
}


// Function to delete a tile from a board slot.
newBoard.remov_cell = function(row, col) {
    delete newBoard.cells[row][col].tileId;
    delete newBoard.cells[row][col].letter;
  }

  
// Function to get n tiles from the deck.
function grab_deck(n) {
    var hand = [];
    var tiles_total = [];

    // Create an array of remaining tiles.
    for (var key in newTiles) {
        if (newTiles.hasOwnProperty(key)) {
            var remaining = newTiles[key]["num-left"];
            for (var i = 0; i < remaining; ++i) {
                tiles_total.push(key);
            }
        }
    }

    // Attempt to pick out up to n tiles.
    for (var i = 0; i < n; ++i) {
        if (tiles_total.length) {
        var rand_ind = int_randomizer(0, Object.keys(tiles_total).length - 1);
        var rand_lett = tiles_total[rand_ind];
        hand.push(rand_lett);
        --newTiles[rand_lett]["num-left"];
        tiles_total.splice(rand_ind, 1);  // Removes one element from the array.
        }
    }

    // Update the count of remaining tiles.
    $("#remainingTiles").html(tiles_total.length);

    return hand;
}



//newBoard.find_cell_id = function(tileId) {
   // var jrow, iCol;

 //   jrow = 0;
 //   for (iCol = 0; iCol < newBoard.cols; ++iCol) {
      //  if (newBoard.cells[jrow][iCol].tileId === tileId) {
           // return [jrow, iCol];

  //return false;


function int_randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a unique tile ID.
function make_id_tile() {
    var id;

    // Increment and assign a unique tile ID.
    make_id_tile.id = ++make_id_tile.id || 1;
    id = "tile" + make_id_tile.id.toString();

    return id;
}


function check_word() {
    var jcol, jrow, letter, word = "";
    jrow = 0;

    // Construct a string of letters from the board.
    for (jcol = 0; jcol < newBoard.cols; ++jcol) {
        letter = newBoard.get_letter_from_slot(jrow, jcol);
        if (typeof(letter) === "undefined") {
            // Use '\xB7' to represent a missing character.
            word += "\xB7";
        } else {
            word += letter;
        }
    }

    // Remove leading and trailing '\xB7' characters.
    word = word.replace(/^\xB7+/, "");
    word = word.replace(/\xB7+$/, "");

    $("#word").html(word);
    //newBoard.get_letter_from_slot = function(row, col) {
    //return newBoard.cells[row][col].letter;
//}
    var rgxDisconnectedWord = new RegExp("[A-Z_]\xB7+[A-Z_]");

    // If there are gaps, or less than 2 letters, cannot submit
    if ((rgxDisconnectedWord.test(word)) || (word.length < 2)) {
        document.getElementById("submitButton").disabled = true;
        return false;
    }

    document.getElementById("submitButton").disabled = false;
    return word;
}

//----



// Adds score, Clears board and fills rack
function submit() {
    var i, key, img_tile, newTile, hand;

    newScore.com_score();

    // Clear board.
    newBoard
.clear_boa();

    // Draw tiles till 7
    hand = grab_deck(7 - $("#letterRack img").length);
    for (i = 0; i < hand.length; ++i) {
        key = hand[i];
        img_tile = make_id_tile();
        //newBoard.get_letter_from_slot = function(row, col) {
        //return newBoard.cells[row][col].letter;
        newTile = $("<img id=\"" + img_tile + "\" src=\"" + newTiles[key]["image"] + "\" class=\"letterTile\" letter=\"" + key + "\" />");
        if (key == "_") {
            newTile.addClass("blankTile");
        }
        // Add tile image.
        $("#letterRack").append(newTile);

        // Apply CSS for rack tile
        newTile.addClass("letter_rack");

        // Make the tile draggable.
        newTile.draggable({
            revertDuration: 200,
            start: function(event, ui) {
                // Tile on top z layer
                $(this).css("z-index", 99);

                // Revert option reset
                $(this).draggable("option", "revert", "invalid");
            },
            stop: function() {
                // Revert z index
                $(this).css("z-index", "");
            }
        });
    }
    //newBoard.find_cell_id = function(tileId) {
   // var jrow, iCol;

 //   jrow = 0;
 //   for (iCol = 0; iCol < newBoard.cols; ++iCol) {
      //  if (newBoard.cells[jrow][iCol].tileId === tileId) {
           // return [jrow, iCol];

  //return false;

    // Clear word
    $("#word").html("");
}
    // Make the rack droppable.
    $("#letterRack").droppable({
        tolerance: "touch",
        drop: function(event, ui) {
            var tileId, pos;

            ui.draggable.removeClass("letter_tile");
            ui.draggable.addClass("letter_rack");

            tileId = ui.draggable.attr("id");
            pos = newBoard.find_cell_id(tileId);
            if (pos) {
                // The tile is from the board, take it off the board.
                newBoard.remov_cell(pos[0], pos[1]);

                // Snap the tile to the rack.
                $("#letterRack").append(ui.draggable);
                ui.draggable.css({"position": "relative", "top": "", "left": ""});

                // Validate and show the word.
                word = check_word();

                // Update the scoreboard and score.
                newScore.refreshBoard();
            } else {
                // Put the tile back into the rack.
                ui.draggable.draggable("option", "revert", true);
            }
        }
    });

//-------------

function restart() {
    // Empty the rack.
    $("#letterRack img").remove();

    // Clear the board tiles, reset
    newBoard.clear_boa();
    newScore.restart();

    // Start the first word.
    submit();
}

$(document).ready(function() {

    // Create the game board.
    newBoard.make_boa();

    // Make the board cells droppable.
    $(".boardSlot").droppable({
        // Checks for open drop area.
        accept: function(draggable) {
            var row, col;
//newBoard.get_letter_from_slot = function(row, col) {
//return newBoard.cells[row][col].letter;
//}
            row = $(this).attr("row");
            col = $(this).attr("col");
            if (newBoard.get_tile_from_slot(row, col) === draggable.attr("id")) {
                // The tile is placed back where it started.
                return true;
            } else if (newBoard.if_cell_empty(row, col)) {
                // The tile can be put into an empty slot.
                return true;
            } else {
                // The slot is not empty, move the tile back to the starting position.
                return false;
            }
        },
//ifnd_cell_id = function(tileId) {
// var jrow, iCol;

 //   jrow = 0;
 //   for (iCol = 0; iCol < newBoard.cols; ++iCol) {
      //  if (newBoard.cells[jrow][iCol].tileId === tileId) {
           // return [jrow, iCol];

  //return false;
        drop: function(event, ui) {
            var letter, tileId, row, col;

            ui.draggable.removeClass("letter_rack");
            ui.draggable.addClass("letter_board");
            tileId = ui.draggable.attr("id");
            letter = ui.draggable.attr("letter");
            row = $(this).attr("row");
            col = $(this).attr("col");

            // Snap tile to the board.
            $(ui.draggable).css("left", "");
            $(ui.draggable).css("top", "");
            $(this).append(ui.draggable);

            newBoard.cell_add(tileId, letter, row, col);
            // Validate and display the word.
            check_word();

            // Update the scoreboard and page with the score.
            newScore.refreshBoard();
        }
    });

    // Restart the game and start the first batch.
    restart();
});


// References: assignment pdf, class Piazza, Discord, W3Schools, stack overflow, student examples given. Thank you to colby mei for board images.
// Some functions are inspired from assignment pdf.