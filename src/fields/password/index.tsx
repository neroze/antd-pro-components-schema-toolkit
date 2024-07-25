import { BetaSchemaForm } from '@ant-design/pro-components';
import Text from './schema';

function App() {
  return (
    <>
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
            title: 'password',
            dataIndex: 'password',
            initialValue: 'Password',
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
        
        `}
      </pre>
    </>
  );
}

export default App;
