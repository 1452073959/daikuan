define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'refund.bill/index',
        add_url: 'refund.bill/add',
        edit_url: 'refund.bill/edit',
        delete_url: 'refund.bill/delete',
        export_url: 'refund.bill/export',
        modify_url: 'refund.bill/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {type: 'checkbox'},
                ]],
            });

            ea.listen();
        },
        add: function () {
            ea.listen();
        },
        edit: function () {
            ea.listen();
        },
    };
    return Controller;
});