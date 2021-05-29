define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'member/index' + location.search,
                    add_url: 'member/add',
                    edit_url: 'member/edit',
                    del_url: 'member/del',
                    multi_url: 'member/multi',
                    table: 'member',
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
                        {field: 'group_name', title: __('Group_name'),operate:false},
                        {field: 'city_name', title: '地区',operate:false},
                        {field: 'name', title: __('Name'),operate:'LIKE'},
                        {field: 'mobile', title: __('Mobile')},
                        {field: 'score', title: __('Score'),operate:false},
                        {field: 'site', title: __('Site'),operate:false},
                        {field: 'image', title: __('Image'),operate:false, events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'is_binding', title: __('Is_binding'),formatter:function(value){
                                if (value > 0) {
                                    return '已绑定';
                                } else {
                                    return '未绑定';
                                }
                            },operate:false},
                        {field: 'operate', title: __('Operate'),operate:false, table: table,
                            buttons:[
                                {name: 'jifen',
                                    text: '积分',
                                    title: '积分',
                                    classname: 'btn btn-xs btn-primary btn-dialog',
                                    url:'member/jifen'
                                }
                            ],
                            events: Table.api.events.operate,
                            formatter: Table.api.formatter.operate}
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
        importm: function () {
            Controller.api.bindevent();
        },
	jifen: function () {
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