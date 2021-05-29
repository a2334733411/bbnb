define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'banner/index' + location.search,
                    add_url: 'banner/add',
                    edit_url: 'banner/edit',
                    del_url: 'banner/del',
                    multi_url: 'banner/multi',
                    table: 'banner',
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
                        {field: 'title', title: __('Title'),operate:'LIKE'},
                        {field: 'jump_url', title: __('Jump_url'),operate:false, formatter: Table.api.formatter.url},
                        {field: 'images', title: __('Images'),operate:false, events: Table.api.events.image, formatter: Table.api.formatter.images},
                        {field: 'sort', title: __('Sort'),operate:false},
                        {field: 'status', title: __('Status'),operate:false},
                        {field: 'desc', title: __('Desc'),operate:false},
                        {field: 'create_time', title: __('Create_time'),operate:false, addclass:'datetimerange'},
                        {field: 'update_time', title: __('Update_time'),operate:false, addclass:'datetimerange'},
                        {field: 'operate', title: __('Operate'),operate:false, table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
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