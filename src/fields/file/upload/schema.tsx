const columns = [
  {
    title: 'Upload File',
    dataIndex: 'certificate',
     //@ts-ignore
    renderFormItem: (a, b, form: any) =>
      //@ts-ignore
      renderFileUpload({
        isMultiple: false,
        form,
      }),
  },
];

export default columns;
