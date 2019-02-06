$(function () {
    $('#partners-slideshow').nivoSlider();
    new WOW().init();

    $(document).ready(function () {
        $(".off-mainnav li.dropdown").each(function () {
            if ($(this).find("ul.dropdown-menu").length === 0) {
                $(this).find(".icon-down").remove();
            }
        });
    });
});