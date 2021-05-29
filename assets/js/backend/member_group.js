define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'member_group/index' + location.search,
                    add_url: 'member_group/add',
                    edit_url: 'member_group/edit',
                    del_url: 'member_group/del',
                    multi_url: 'member_group/multi',
                    table: 'member_group',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id'),operate:false},
                        {field: 'name', title: __('Name'),operate:'LIKE'},
                        {field: 'mobile', title: __('Mobile')},
                        {field: 'create_time', title: __('Create_time'),operate:false, addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'image', title: __('Image'),operate:false, events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'is_binding', title: __('Is_binding'),formatter:function(value){
                                if (value > 0) {
                                    return '已绑定';
                                } else {
                                    return '未绑定';
                                }
                            },operate:false},
                        {field: 'operate', title: __('Operate'), operate:'false', table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});