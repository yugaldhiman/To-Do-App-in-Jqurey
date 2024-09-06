
$(document).ready(function () {
    $("#btn").click(function () {
        data = $("textarea").val();
        $("#child-2").html(data)
    })

    // $("#btn").click(function () {
    //     data = $("textarea").val();
    //     $("#child-1").html(data)
    // })
})