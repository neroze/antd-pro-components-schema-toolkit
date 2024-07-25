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
          `}
      </pre>
    </>
  );
}

export default App;
