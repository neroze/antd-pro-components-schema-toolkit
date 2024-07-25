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
        lang="en"
      />
      <pre>
        {`
          {
            title: 'Date Picker',
            key: 'showTime',
            dataIndex: 'createName',
            initialValue: [dayjs().add(-1, 'm'), dayjs()],
            renderFormItem: () => <DatePicker.RangePicker />,
            width: 'md',
            colProps: {
              xs: 24,
              md: 12,
            },
          },
          {
            valueType: 'date',
            initialValue: new Date(),
            dataIndex: 'currentTime',
            width: 'md',
          },
          {
            valueType: 'dateTime',
            initialValue: new Date(),
            dataIndex: 'currentTime',
            width: 'md',
          },
          `}
      </pre>
    </>
  );
}

export default App;
