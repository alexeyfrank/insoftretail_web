$(function() {
  initIconsForLeftMenu();
  initModalUrls();
});

function initIconsForLeftMenu() {
  $('.left-nav-block a').each(function() {
    $this = $(this);
    var klass = $this.data('icon');
    var iconTpl = '<i class="' + klass + ' left"></i>';
    $this.prepend(iconTpl);
  });
}

function initModalUrls() {
  $modal = $('#modal-form');

  $modal.on('click', '.btn-submit', function() {
    var $modalForm = $modal.find('form'),
        formUrl = $modalForm.attr('action'),
        data = $modalForm.serialize();

    $.post(formUrl, data, function(data) {
      $modal.html(data);
    }, 'html');

    return false;
  });

  $(document).on('click', '.to-modal', function() {
    var $this = $(this),
        url = $this.attr('href');

    $.get(url, {}, function(data) {
      $modal.html(data);
      $modal.modal();
    }, 'html');

    return false;
  });
}
