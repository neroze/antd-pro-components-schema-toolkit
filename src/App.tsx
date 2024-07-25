import './App.css';
import TextField from './fields/text';
import PasswordField from './fields/password';
import RadioButton from './fields/radioButton';
import CheckBoxField from './fields/checkbox';
import DynamicDropSelect from './fields/dynamicDropselect';
import Radio from './fields/radio';
import CompositeFields from './fields/compositeFields';
import ConditionalRender from './fields/conditionalRender';
import ReadJson from './fields/file/readJson';
import UploadFile from './fields/file/upload';
import DatePicker from './fields/datePicker';

import 'antd/dist/antd.variable.min.css';

import { Collapse, Layout, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Content } = Layout;

const { Panel } = Collapse;
// @ts-ignore
window.renderFileUpload = (fileUploadConfig: IFileUploadConfig) => {
  if (fileUploadConfig?.isJSONToBEPopulated) {
    return (
      <Upload
        beforeUpload={() => false}
        maxCount={1}
        accept=".json"
        onChange={(files: any) => {
          console.log('file __', files);
          const reader = new FileReader();
          reader.onload = function (event: any) {
            const contents = event?.target?.result;
            console.log(contents);
            try {
              const jsonData = JSON.parse(contents);
              fileUploadConfig?.form?.setFieldsValue(jsonData);
              console.log(fileUploadConfig);
            } catch (e) {
              console.error('Error parsing JSON:', e);
              return;
            }
          };
          //@ts-ignore
          reader.readAsText(files.file);
        }}
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    );
  } else {
    return (
      <Upload
        beforeUpload={() => false}
        multiple={fileUploadConfig?.isMultiple}
        maxCount={fileUploadConfig?.isMultiple ? undefined : 1}
      >
        <Button icon={<UploadOutlined />}>Click to Upload 1</Button>
      </Upload>
    );
  }
};

function App() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
        <Collapse onChange={onChange} style={{ width: '100%' }}>
          <Panel header="Text Field" key="1">
            <TextField />
          </Panel>
        </Collapse>

        <Collapse>
          <Panel header="Password Field." key="2">
            <PasswordField />
          </Panel>
        </Collapse>

        <Collapse>
          <Panel header="Radio Button Field" key="3">
            <RadioButton />
          </Panel>
        </Collapse>

        <Collapse>
          <Panel header="Checkbox Field" key="4">
            <CheckBoxField />
          </Panel>
        </Collapse>

        <Collapse>
          <Panel header="Radio Field" key="5">
            <Radio />
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header="DropSelect Field" key="6">
            <DynamicDropSelect />
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header="CompositeFields Field" key="7">
            <CompositeFields />
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header="Conditional Rendering Field" key="8">
            <ConditionalRender />
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header="Read JSON File" key="9">
            <ReadJson />
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header="Upload File Field" key="10">
            <UploadFile />
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header="Date Picker" key="11">
            <DatePicker />
          </Panel>
        </Collapse>
      </Content>
    </Layout>
  );
}

export default App;
