const columns = [
  {
    title: 'Gender',
    dataIndex: 'dataIndex',
    valueEnum: {
      male: {
        text: 'Male',
      },
      female: {
        text: 'Female',
      },
    },
    valueType: 'radio',
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
