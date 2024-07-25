const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    initialValue: 'Title',
    valueType: 'text',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'Title is required',
        },
      ],
    },
    width: 'm',
  },
];

export default columns;
