
$(document).ready(function () {
  // Passwords ...
  $(document).on('click', '.toggle-password', function () {
    $(this).toggleClass("fa-eye fa-eye-slash");

    let input = $($(this).attr("toggle"));
    input.attr('type') === 'password' ? input.attr('type', 'text') : input.attr('type', 'password');
  });
});