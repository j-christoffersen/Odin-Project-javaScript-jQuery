

$(document).ready(function() {
    createGrid(4);
})

function createGrid(n) {
    for (var i = 0; i < n; i++) {
        var $row = $('<div class="row"></div>');
        $row.height(1/n*100 + '%');
        $('.container').append($row);
        for (var j = 0; j < n; j++) {
            $('<div class="square"></div>').appendTo($row)
            .width(1/n*100+'%');
        }
    }
    
    var colors = ['red', 'green', 'blue', 'orange', 'purple',  'white', 'black'];
    
     $('.square').mouseenter(function() {
         if (this.colNum === undefined) {
             this.colNum = 0;
         } else if (this.colNum === colors.length-1) {
             this.colNum = 0;
         } else {
             this.colNum++;
         }
        $(this).css('background-color', colors[this.colNum]);
    })
}

function newGrid() {
    $('.container').empty();
    var size = prompt('How man rows and columns should the new grid have?');
    createGrid(size);
}