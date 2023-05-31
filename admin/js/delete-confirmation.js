$(document).on('click', '.btn-delete-confirmation', function () {
    // Ambil data dari button
    var form_action = $(this).attr('data-form_action');
    var relation_check_action = $(this).attr('data-relation_check_action');
    var relation_check_message = $(this).attr('data-relation_check_message');

    // Update form action
    $('#delete-form').attr('action', form_action);

    // Request ajax untuk mengecek keterkaitan data
    $.ajax({
        url: relation_check_action,
        type: 'GET',
        success: function (data) {
            if (data.child > 0) {
                $('#delete-confirmation-modal').find('.modal-title').find('.modal-title-subtitle').html(relation_check_message);
                $('#delete-confirmation-modal').find('.btn-delete-submit').hide();
            } else {
                $('#delete-confirmation-modal').find('.modal-title').find('.modal-title-subtitle').html('Apakah anda yakin ingin menghapus data ini?');
                $('#delete-confirmation-modal').find('.btn-delete-submit').show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    })
})