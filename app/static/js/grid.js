

// Call the below function
// waitForElementToDisplay(".seven-columns",function(){alert("Hi");},1000,9000);
/*
document.addEventListener("DOMContentLoaded", function(event) {
    
});*/



jQuery(document).ready(function() {
    var row = document.getElementsByClassName("seven columns");
    horiz = row[0].offsetWidth;
    vert = row[0].offsetHeight;
    function create_grid(nrows, ncols) {
//         var grid_cols_size = Math.floor((horiz-10*ncols)/ncols);
        var init_sep = Math.floor(0.08*horiz/ncols);
        var grid_cols_size = Math.floor((horiz-init_sep*ncols)/ncols);
        var tile_width = 70;//document.getElementsByClassName("tile-small")[0].offsetWidth;
        var cols_scale = grid_cols_size/tile_width;
        var new_len = Math.floor(tile_width*cols_scale);
        
        // Create row
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("id", "main-row");
        rowDiv.setAttribute("class", "tiles-grid")
//         console.log(horiz);
//         console.log(ncols);
//         console.log(grid_cols_size);
//         console.log(cols_scale);
//         console.log(tile_width);
        for (j = 0; j < nrows; j++) {;
        // we write the elements
            for (i = 0; i < ncols; i++) { //posiblemente de error por el tipo de ncols
                // create a new div element
                const newDiv = document.createElement("div");
                
                // setAttributes
                newDiv.setAttribute("data-role", "tile");
                newDiv.setAttribute("data-size", "small");
                newDiv.style.width = new_len.toString() +"px";
                newDiv.style.height = new_len.toString() +"px";
                newDiv.style.margin = "0px !important";
    //             newDiv.style.webkitTransform = "scale("+cols_scale.toString() +") !important";
    //             jQuery(newDiv).css({
    //                 "webkitTransform":"scale("+cols_scale.toString() +") !important",
    //                 "MozTransform":"scale("+cols_scale.toString() +") !important",
    //                 "msTransform":"scale("+cols_scale.toString() +") !important",
    //                 "OTransform":"scale("+cols_scale.toString() +") !important",
    //                 "transform":"scale("+cols_scale.toString() +") !important"
    //             });
    //             
                // add it
                rowDiv.appendChild(newDiv);
            }
            rowDiv.style.setProperty("grid-template-rows", "repeat(auto-fit, "+new_len.toString()+"px)", "important");
            rowDiv.style.setProperty("grid-template-columns", "repeat(auto-fit, "+new_len.toString()+"px)", "important");
            rowDiv.style.setProperty("grid-gap", init_sep.toString()+"px", "important");
            rowDiv.style.setProperty("align-items", "end", "important");
            row[0].appendChild(rowDiv);
        }
    }
    // add it to global scope
    window.create_grid = create_grid;
});
