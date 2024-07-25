const columns = [
  {
    title: 'password',
    dataIndex: 'password',
    initialValue: 'Password',
    valueType: 'password',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'Password is required',
        },
      ],
    },
    width: 'm',
  },
];

export default columns;
