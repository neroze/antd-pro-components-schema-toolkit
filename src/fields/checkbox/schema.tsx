const columns = [
  {
    title: 'Drinks',
    dataIndex: 'dataIndex',
    valueEnum: {
      male: {
        text: 'Beer',
      },
      female: {
        text: 'Wine',
      },
    },
    valueType: 'checkbox',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'This field is required',
        },
      ],
    },
    fieldProps: {
      buttonStyle: 'default',
    },
  },
];

export default columns;
