const columns = [
  {
    title: 'Confidentiality',
    dataIndex: 'confidentiality',
    valueType: 'radioButton',
    valueEnum: {
      Minimal: { text: 'Minimal' },
      Minor: { text: 'Minor' },
      Major: { text: 'Major' },
      Critical: { text: 'Critical' },
    },
    formItemProps: {
      rules: [{ required: true, message: 'Confidentiality is required' }],
    },
    fieldProps: {
      buttonStyle: 'solid',
    },
    initialValue: 'Minimal',
  },
];

export default columns;
