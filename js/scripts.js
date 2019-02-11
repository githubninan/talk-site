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
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend ("<li>Pardon me, I meant no offense.</li>");
  });


});
