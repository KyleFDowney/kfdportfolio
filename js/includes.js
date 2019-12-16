$(document).ready(function() {
  $.get("includes/project1.html", function(data) {
    $("#project1").html(data);
  });

  $.get("includes/project2.html", function(data) {
    $("#project2").html(data);
  });

  $.get("includes/project3.html", function(data) {
    $("#project3").html(data);
  });

  $.get("includes/project4.html", function(data) {
    $("#project4").html(data);
  });

  $.get("includes/project5.html", function(data) {
    $("#project5").html(data);
  });

  $.get("includes/project6.html", function(data) {
    $("#project6").html(data);
  });

  $.get("includes/about.html", function(data) {
    $("#aboutPage").html(data);
  });

  $.get("includes/icons/dreamweaver.html", function(data) {
    $(".dreamweaverInclude").html(data);
  });

  $.get("includes/icons/html5.html", function(data) {
    $(".html5Include").html(data);
  });

  $.get("includes/icons/css3.html", function(data) {
    $(".css3Include").html(data);
  });

  $.get("includes/icons/javascript.html", function(data) {
    $(".javascriptInclude").html(data);
  });

  $.get("includes/icons/jquery.html", function(data) {
    $(".jqueryInclude").html(data);
  });

  $.get("includes/icons/angularjs.html", function(data) {
    $(".angularjsInclude").html(data);
  });

  $.get("includes/icons/reactjs.html", function(data) {
    $(".reactjsInclude").html(data);
  });
});
