define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'customer.book/index',
        add_url: 'customer.book/add',
        edit_url: 'customer.book/edit',
        delete_url: 'customer.book/delete',
        export_url: 'customer.book/export',
        modify_url: 'customer.book/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init, overflow: 'tips',
                skin: 'line  ' //行边框风格
                , even: true, //开启隔行背景
                cols: [[
                    {type: 'checkbox'},
                    {field: 'id', title: '姓名'},
                    {field: 'customer.customer_name', title: '客户'},
                    {field: 'book_name', title: '联系人姓名'},
                    {field: 'book_tel', title: '手机号码'},
                    {field: 'sum', title: '重复次数'},
                    {width: 250, title: '操作', templet: ea.table.tool},

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