import { DatePicker } from 'antd';
import dayjs from 'dayjs';
const columns = [
  {
    title: 'Date Picker',
    placeholder: 'Date Picker',
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
    placeholder: 'Date Picker',
    initialValue: new Date(),
    dataIndex: 'currentTime',
    width: 'md',
  },
  {
    valueType: 'dateTime',
    placeholder: 'Date Time Picker',
    initialValue: new Date(),
    dataIndex: 'currentTime',
    width: 'md',
  },
];

export default columns;
