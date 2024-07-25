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
        
        `}
      </pre>
    </>
  );
}

export default App;
