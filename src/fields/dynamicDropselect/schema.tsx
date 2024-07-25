const columns = [
  {
    title: 'Users',
    dataIndex: 'timezone',
    valueType: 'select',
    initialValue: 'Users',
    request: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      ).then((resp) => {
        return resp.json();
      });
      return response.map((data: any) => ({
        label: `${data.username} (${data.email})`,
        value: data.username,
      }));
    },
    formItemProps: {
      rules: [{ required: true, message: 'Time Zone is required' }],
    },
    fieldProps: {
      placeholder: 'Select timezone',
      getPopupContainer: (trigger: any) => trigger.parentNode,
      showSearch: true,
      allowClear: true,
    },
  },
];

export default columns;
