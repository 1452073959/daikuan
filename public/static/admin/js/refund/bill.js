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
                    {type: 'checkbox'},                    {field: 'id', title: 'id'},                    {field: 'order_id', title: '订单id'},                    {field: 'refund_bank_id', title: '还款账户'},                    {field: 'refund_gathering_id', title: '收款户'},                    {field: 'refund_customer_id', title: '还款客户id'},                    {field: 'refund_code', title: '还款编号'},                    {field: 'refund_amount', title: '还款金额'},                    {field: 'refund_time', title: '还款时间'},                    {field: 'refund_status', search: 'select', selectList: {"2":"完成"}, title: '还款状态'},                    {field: 'refund_certificate', title: '还款凭证'},                    {field: 'refund_create_time', title: '还款创建时间'},                    {field: 'refund_update_time', title: '还款更新时间'},                    {width: 250, title: '操作', templet: ea.table.tool},
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