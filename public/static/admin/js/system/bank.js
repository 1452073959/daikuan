define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.bank/index',
        add_url: 'system.bank/add',
        edit_url: 'system.bank/edit',
        delete_url: 'system.bank/delete',
        export_url: 'system.bank/export',
        modify_url: 'system.bank/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {type: 'checkbox'},                    {field: 'id', title: 'id'},                    {field: 'bank_icon', title: '银行图标'},                    {field: 'bank_title', title: '银行名称'},                    {field: 'bank_number', title: '银行卡号'},                    {field: 'bank_card_img', title: '银行缩略图正面'},                    {field: 'bank_man', title: '持卡人'},                    {field: 'effective_date', title: '有效日期'},                    {field: 'safe_code', title: '安全码'},                    {width: 250, title: '操作', templet: ea.table.tool},
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