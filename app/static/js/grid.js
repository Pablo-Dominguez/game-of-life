

// Call the below function
// waitForElementToDisplay(".seven-columns",function(){alert("Hi");},1000,9000);
/*
document.addEventListener("DOMContentLoaded", function(event) {
    
});*/



jQuery(document).ready(function() {
    var temp = document.getElementsByClassName("seven columns");
    horiz = temp[0].offsetWidth;
    vert = temp[0].offsetHeight;
    function create_grid(nrows, ncols) {
        var grid_cols_size = Math.floor(horiz/ncols);
        var cols_scale = grid_cols_size/tile_width;
        var tile_width = document.getElementsByClassName("tile-small")[0].offsetWidth;
        
        // we write the elements
        for (i = 0; i < ncols; i++) { //posiblemente de error por el tipo de ncols
            // create a new div element
            const newDiv = document.createElement("div");
            
            // setAttributes
            newDiv.setAttribute("data-role", "tile");
            newDiv.setAttribute("data-size", "small");
            newDiv.style.transform = "scale("+cols_scale.toString() +") !important";
            
            // add it
            const currentDiv = document.getElementById("main-row");
            currentDiv.appendChild(newDiv);
        }
    }
    // add it to global scope
    window.create_grid = create_grid;
});
