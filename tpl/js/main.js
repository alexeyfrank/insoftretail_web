$(function() {
  initIconsForLeftMenu();
});

function initIconsForLeftMenu() {
  $('.left-nav-block a').each(function() {
    $this = $(this);
    var klass = $this.data('icon');
    var iconTpl = '<i class="' + klass + ' left"></i>';
    $this.prepend(iconTpl);
  });
}
