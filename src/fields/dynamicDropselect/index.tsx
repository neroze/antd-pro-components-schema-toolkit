import { BetaSchemaForm } from '@ant-design/pro-components';
import Text from './schema';

function App() {
  return (
    <>
      <h3>Text Box Example</h3>
      <BetaSchemaForm
        shouldUpdate={false}
        layoutType="Form"
        onFinish={async (values) => {
          console.log('Values::', values);
        }}
        // form={pluggableForm}
        columns={Text}
        submitter={false}
        grid
      />
      <pre>
        {`
          
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
                label: data.username,
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
        
        `}
      </pre>
    </>
  );
}

export default App;
