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
            title: 'Upload File',
            dataIndex: 'certificate',
            renderFormItem: (a, b, form: any) =>
              //@ts-ignore
              renderFileUpload({
                isMultiple: false,
                isJSONToBEPopulated: true,
                form,
              }),
          },
          {
            title: 'Auth Provider',
            dataIndex: 'auth_provider_x509_cert_url',
            fieldProps: {
              placeholder: 'Auth Provider',
            },
          },
          {
            title: 'Auth URI',
            dataIndex: 'auth_uri',
            fieldProps: {
              placeholder: 'Auth URI',
            },
          },
          {
            title: 'Client Email',
            dataIndex: 'client_email',
            fieldProps: {
              placeholder: 'Auth Email',
            },
          },
          {
            title: 'Client ID',
            dataIndex: 'client_id',
            fieldProps: {
              placeholder: 'Auth Email',
            },
          },
          {
            title: 'Client Cert URL',
            dataIndex: 'client_x509_cert_url',
            fieldProps: {
              placeholder: 'Auth Email',
            },
          },
          {
            title: 'Private Key',
            dataIndex: 'private_key',
            valueType: 'textarea',
            fieldProps: {
              placeholder: 'Private Key',
            },
          },
        
        `}
      </pre>
    </>
  );
}

export default App;
