define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'customer.bank/index',
        add_url: 'customer.bank/add',
        edit_url: 'customer.bank/edit',
        delete_url: 'customer.bank/delete',
        export_url: 'customer.bank/export',
        modify_url: 'customer.bank/modify',
    };
    var soulTable = layui.soulTable;
    var Controller = {

        index: function () {
            ea.table.render({
                init: init, overflow: 'tips',
                skin: 'line  ' //行边框风格
                , even: true, //开启隔行背景
                // size: 'sm', //小尺寸的表格
                cols: [[
                    {type: 'checkbox'},
                    {field: 'id', title: 'id'},
                    {field: 'customer.customer_name', title: '客户'},
                    {field: 'bank_icon', title: '银行图标', templet: ea.table.image},
                    {field: 'bank_title', title: '银行名称'},
                    {field: 'bank_number', title: '银行卡号'},
                    {field: 'bank_card_z', title: '银行缩略图正面', templet: ea.table.image},
                    {field: 'bank_card_f', title: '银行缩略图反面', templet: ea.table.image},
                    {field: 'bank_man', title: '持卡人'},
                    {field: 'effective_date', title: '有效日期'},
                    {field: 'safe_code', title: '安全码'},
                    {field: 'default', title: '默认1'},
                    {width: 250, title: '操作', templet: ea.table.tool},

                ]],
                done: function () {
                    // 在 done 中开启
                    soulTable.render(this)
                }
                , autoColumnWidth: {
                    init: true
                },
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