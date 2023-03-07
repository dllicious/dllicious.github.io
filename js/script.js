//Using jQuery to train a dog
$(document).ready(function(e){

    function showView(viewName){
        $('.view').hide();
        $('#' + viewName).show();

    }

    $(document).click(function() {
        var viewName = "ascii_image";
        showView(viewName);
    });




});

