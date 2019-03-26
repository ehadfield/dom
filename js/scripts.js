$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul.unstyled").prepend("<li>Hello!</li>");
    $("ul.unstyled2").prepend("<li>Why hello there!</li>");

    $('li').click(function() {
    alert("hi");
  });
});
  $("button#goodbye").click(function() {
    $("ul.unstyled").prepend("<li>Goodbye!</li>");
    $("ul.unstyled2").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $("ul.unstyled").prepend('<li>Stop copying me!</li>');
    $("ul.unstyled2").prepend("<li>Pardon me. I meant no offense.</li>");
  });
});
