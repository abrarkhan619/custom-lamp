$(".js-change-text").click(function(){
    let inputVal = $("#text").val();
    $(".message").text(inputVal);
    $("#text").val("");
    $("button").addClass("active");
})