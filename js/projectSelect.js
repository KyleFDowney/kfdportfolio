$(document).ready(function() {
  $(".projectSelect1").click(function() {
    $("#project1").css("display", "flex");
    $("#project2").hide();
    $("#project3").hide();
    $("#project4").hide();
    $("#project5").hide();
    $("#project6").hide();
    $(".projectSelect1").hide();
    $(".projectSelect2").show();
    $(".projectSelect3").show();
    $(".projectSelect4").show();
    $(".projectSelect5").show();
    $(".projectSelect6").show();

    $("html, body").animate(
      {
        scrollTop: $("body").offset().top
      },
      250
    );
  });

  $(".projectSelect2").click(function() {
    $("#project1").hide();
    $("#project2").css("display", "flex");
    $("#project3").hide();
    $("#project4").hide();
    $("#project5").hide();
    $("#project6").hide();
    $(".projectSelect1").show();
    $(".projectSelect2").hide();
    $(".projectSelect3").show();
    $(".projectSelect4").show();
    $(".projectSelect5").show();
    $(".projectSelect6").show();

    $("html, body").animate(
      {
        scrollTop: $("body").offset().top
      },
      250
    );
  });

  $(".projectSelect3").click(function() {
    $("#project1").hide();
    $("#project2").hide();
    $("#project3").css("display", "flex");
    $("#project4").hide();
    $("#project5").hide();
    $("#project6").hide();
    $(".projectSelect1").show();
    $(".projectSelect2").show();
    $(".projectSelect3").hide();
    $(".projectSelect4").show();
    $(".projectSelect5").show();
    $(".projectSelect6").show();

    $("html, body").animate(
      {
        scrollTop: $("body").offset().top
      },
      250
    );
  });

  $(".projectSelect4").click(function() {
    $("#project1").hide();
    $("#project2").hide();
    $("#project3").hide();
    $("#project4").css("display", "flex");
    $("#project5").hide();
    $("#project6").hide();
    $(".projectSelect1").show();
    $(".projectSelect2").show();
    $(".projectSelect3").show();
    $(".projectSelect4").hide();
    $(".projectSelect5").show();
    $(".projectSelect6").show();

    $("html, body").animate(
      {
        scrollTop: $("body").offset().top
      },
      250
    );
  });

  $(".projectSelect5").click(function() {
    $("#project1").hide();
    $("#project2").hide();
    $("#project3").hide();
    $("#project4").hide();
    $("#project5").css("display", "flex");
    $("#project6").hide();
    $(".projectSelect1").show();
    $(".projectSelect2").show();
    $(".projectSelect3").show();
    $(".projectSelect4").show();
    $(".projectSelect5").hide();
    $(".projectSelect6").show();

    $("html, body").animate(
      {
        scrollTop: $("body").offset().top
      },
      250
    );
  });

  $(".projectSelect6").click(function() {
    $("#project1").hide();
    $("#project2").hide();
    $("#project3").hide();
    $("#project4").hide();
    $("#project5").hide();
    $("#project6").css("display", "flex");
    $(".projectSelect1").show();
    $(".projectSelect2").show();
    $(".projectSelect3").show();
    $(".projectSelect4").show();
    $(".projectSelect5").show();
    $(".projectSelect6").hide();

    $("html, body").animate(
      {
        scrollTop: $("body").offset().top
      },
      250
    );
  });
});
