$(document).ready(function () {
    $(".mark").click(function () {
        $(".selected").removeClass("selected");
        $(this).toggleClass("selected");
    });

    $(".submit").click(function () {
        let selected = $(".selected").text();
        if(selected.length > 0) {
            console.log(selected);
            $(".rating").css("display", "none");
            $(".thankYou").css("display", "flex");
        }
    
    });

    

});