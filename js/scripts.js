$(document).ready(function() {
  $("h2#green").click(function() {
    $("h2").removeClass();
    $("h2").addClass("green-background");
  });
  $("h2#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#hello").click(function()
  {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Well, hello there!</li>");
    $("ul#user").children().first().click(function()
                  {
                    alert("hi");
                  });
    $("ul#webpage").children().first().click(function()
                    {
                        alert("hi");
                    });

                });
    $("button#goodbye").click(function() {
      $("ul#user").prepend("<li>Goodbye!</li>");
      $("ul#webpage").prepend ("<li>Goodbye, dear user!</li>");
      $("div#after").after("<button class='btn btn-success'>After Button</button>");

  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend ("<li>Pardon me, I meant no offense.</li>");
    $("p#before").before("<button class='btn btn-success'>Before Button</button>")
  });

  $("button#picture1").click (function () {
    $("div#picture-row").after("<img src='img/pic1.jpeg' id='pic1'></img>");

    $("button#picture1").click (function () {
      $("img#pic1").remove();
    });
  })

  $("button#picture2").click (function () {
    $("div#picture-row").after("<img src='img/pic2.jpeg' id='pic2'></img>");

    $("button#picture2").click (function () {
      $("img#pic2").remove();
    });
  });

});
