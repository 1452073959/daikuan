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
                    {type: 'checkbox'},                    {field: 'id', title: 'id'},                    {field: 'order_id', title: '订单id'},                    {field: 'remit_bank_id', title: '客户账户'},                    {field: 'remit_out_id', title: '打款账户'},                    {field: 'remit_customer_id', title: '客户id'},                    {field: 'remit_code', title: '打款账单编号'},                    {field: 'remit_amount', title: '打款金额'},                    {field: 'remit_status', search: 'select', selectList: ["未知","未打款","已打款"], title: '打款状态'},                    {field: 'remit_type', search: 'select', selectList: {"1":"平台放款"}, title: '类型'},                    {field: 'remit_certificate', title: '打款凭证'},                    {field: 'remit_create_time', title: 'remit_create_time'},                    {field: 'remit_update_time', title: 'remit_update_time'},                    {width: 250, title: '操作', templet: ea.table.tool},
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