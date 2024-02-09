// JQuery Code to handle nav bar button drop on mobile devices

$(document).on("click", function (e) {
    if (e.target !== $(".fa-solid.fa-bars")[0]) {
        $("nav").slideUp('slow');
    } else {
        $("nav").slideToggle('slow');
    }
});