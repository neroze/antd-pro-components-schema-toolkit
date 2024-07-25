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
            title: 'name',
            dataIndex: 'name',
            initialValue: 'Your Name',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: 'Name is required',
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
