define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'customer.customerdata/index',
        add_url: 'customer.customerdata/add',
        edit_url: 'customer.customerdata/edit',
        delete_url: 'customer.customerdata/delete',
        export_url: 'customer.customerdata/export',
        modify_url: 'customer.customerdata/modify',
        audit_url: 'customer.customerdata/audit',
        service_url: 'customer.customerdata/service',
        bank_url: 'customer.bank/index',
        book_url: 'customer.book/index',
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
                    {field: 'service.name', title: '客服'},
                    {field: 'audit.name', title: '审核人'},
                    {field: 'customer_tel', title: '手机号码'},
                    {field: 'customer_name_en', title: '英文名'},
                    {field: 'id_number', title: '身份证号'},
                    {field: 'id_number_img_f', title: '身份证反面', templet: ea.table.image},
                    {field: 'id_number_img_z', title: '身份证反面', templet: ea.table.image},
                    {field: 'customer_name', title: '客户姓名'},
                    {field: 'customer_sex', title: '性别'},
                    {field: 'customer_address', title: '客户地址'},
                    {field: 'customer_birthday', title: '客户生日'},
                    {field: 'registered_type', search: 'select', selectList: ["未知", "职员邀请", "正常注册"], title: '渠道类型'},
                    {
                        field: 'status',
                        search: 'select',
                        selectList: ["未知", "待提交", "待审核", "待复审", "待复审", "待打款", "使用中", "已逾期", "已结束", "普通"],
                        title: '状态',
                    },
                    {field: 'quota_freeze', title: '冻结额度', templet: ea.table.price},
                    {field: 'quota_surplus', title: '剩余额度', templet: ea.table.price},
                    {field: 'quota_sum', title: '总额度', templet: ea.table.price},
                    {field: 'emergency_man1', title: '紧急联系人姓名'},
                    {field: 'emergency_tel', title: '紧急联系人电话'},
                    {field: 'emergency_relation', title: '紧急联系人关系'},
                    {field: 'human_video', title: '人脸视频', templet: ea.table.video},
                    {field: 'facebook_title', title: 'facebook昵称'},
                    {field: 'facebook_link', title: 'facebook主页链接', templet: ea.table.url},
                    {field: 'facebook_img', title: 'facebook主页图片', templet: ea.table.image},
                    {field: 'create_time', title: '创建时间'},
                    {
                        width: 250, title: '操作', templet: ea.table.tool, fixed: "right",
                        operat: [
                            [{
                                text: '分配审核',
                                url: init.audit_url,
                                method: 'open',
                                auth: 'audit',
                                field: 'id',
                                class: 'layui-btn layui-btn-xs layui-btn-success',

                            },
                                {
                                    text: '分配客服',
                                    url: init.service_url,
                                    method: 'open',
                                    auth: 'service',
                                    field: 'id',
                                    class: 'layui-btn layui-btn-xs layui-btn-success',

                                },
                                {
                                    text: '账户',
                                    url: init.bank_url,
                                    method: 'open',
                                    auth: 'bank',
                                    field: 'id',
                                    class: 'layui-btn layui-btn-xs layui-btn-success',
                                    extend:'data-full="true"'
                                }
                                ,
                                {
                                    text: '联系人',
                                    url: init.book_url,
                                    method: 'open',
                                    auth: 'book',
                                    field: 'id',
                                    class: 'layui-btn layui-btn-xs layui-btn-success',
                                    extend:'data-full="true"'
                                }
                            ],
                            'delete']
                    },

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