import { BetaSchemaForm } from '@ant-design/pro-components';
import { Form } from 'antd';
import Text from './schema';

function App() {
  const [_form] = Form.useForm();
  return (
    <>
      <BetaSchemaForm
        shouldUpdate={false}
        layoutType="Form"
        onFinish={async (values) => {
          console.log('Values::', values);
        }}
        columns={Text}
        submitter={false}
        grid
      />
      <pre>
        {`
          
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
        
        `}
      </pre>
    </>
  );
}

export default App;
