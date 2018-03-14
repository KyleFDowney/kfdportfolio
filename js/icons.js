var toolIcons = $('.tool-icon');

function selectToolIcon() {
  var index = $(this).index();
  var toolIcon = toolIcons.get(index);
  var wasSelected = $(toolIcon).hasClass('tool-selected');
  toolIcons.removeClass('tool-selected');
  if (!wasSelected) {
    $(toolIcon).addClass('tool-selected');
  }
}

toolIcons.on('click', function () {
  // selectToolIcon();
});

toolIcons.hover(selectToolIcon, function () {
  toolIcons.removeClass('tool-selected');
});
