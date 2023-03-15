//jquery train a dog
$(document).ready(function(e){

    let count = 0;
    let maxcount = 2;

    function showView(viewName){
        $('.view').hide();
        $('#' + viewName).show();

    }

    $(document).click(function() {
 
        if(count < maxcount) {
            count++
        };

        var viewName = "ascii_image_" +count;
        showView(viewName);

    });




});

