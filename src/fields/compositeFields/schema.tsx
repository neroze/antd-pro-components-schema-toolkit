const columns = [
  {
    dataIndex: 'custom_headers',
    valueType: 'formList',
    fieldProps: {
      initialValue: [],
      copyIconProps: false,
      creatorButtonProps: {
        creatorButtonText: 'Add Row',
      },
      className: 'custom-form-list',
    },
    colProps: {
      xs: 24,
    },
    columns: [
      {
        valueType: 'group',
        columns: [
          {
            title: 'Key',
            dataIndex: 'key',
            colProps: {
              xs: 12,
            },
            fieldProps: {
              placeholder: 'Key',
            },
            formItemProps: {
              rules: [{ required: true, message: 'Key is required' }],
            },
          },
          {
            title: 'Value',
            dataIndex: 'value',
            colProps: {
              xs: 12,
            },
            fieldProps: {
              placeholder: 'Value',
            },
            formItemProps: {
              rules: [{ required: true, message: 'Value is required' }],
            },
          },
        ],
      },
    ],
  },
];

export default columns;
