$('#document-preview-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var file = button.data('dokumen');
    var type = file.substr(file.lastIndexOf('.') + 1).toLowerCase();

    if (type == 'doc') {
        $('#previewFrame').attr('src', 'https://view.officeapps.live.com/op/embed.aspx?src=' +
            encodeURIComponent(file));
    } else {
        $('#previewFrame').attr('src', file);
    }
});

$('#document-preview-modal').on('hide.bs.modal', function (event) {
    $('#previewFrame').attr('src', '');
});