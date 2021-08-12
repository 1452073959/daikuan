define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'remit.bill/index',
        add_url: 'remit.bill/add',
        edit_url: 'remit.bill/edit',
        delete_url: 'remit.bill/delete',
        export_url: 'remit.bill/export',
        modify_url: 'remit.bill/modify',
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