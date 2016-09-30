$( document ).ready(function() {
    $("#content").append("<img src='images/22-restaurant-logo-design.jpg'   style='width: 20%;' />");
    $("#content").append("<h1>Lybanese resturant in London</h1>");
    $("#content").append("<p>To make things nice we serve the most delicios food ever made by Lybanese people.</p>");
});
var list = '<ul id="tabmenu" >'
            + '<li><a class=""'
            + 'id="tab1">Menu</a></li>'
            + '<li><a class=""'
            + 'id="tab2">Map</a></li>'
            + '<li><a class=""'
            + 'id="tab3">Contact</a></li>'
            + '</ul>'
            + '<div id="page"></div>'

$("#content").append(list);

//default tab
$("#page").html("<p>Here is our menu: Crispy Duck, Shrimp Tempura, Christmas Roll </p> ");
$("#tab1").addClass("active");

//events
tabClickToSetPageContent("#tab1",
    "<p>Here is our menu: Crispy Duck, Shrimp Tempura, Christmas Roll</p>");
tabClickToSetPageContent("#tab2",
    "<p>We're located at: 13352 Minnieville Rd., Woodbridge, VA</p>");
tabClickToSetPageContent("#tab3",
    "<p>We can be reached at: (555)555-5555.</p>");


//event handler helper function
function tabClickToSetPageContent(selector, content) {
    $(selector).click(function () {
        $("#page").html(content);
        $("a").removeClass("active");
        $(this).addClass("active");
    });
};
