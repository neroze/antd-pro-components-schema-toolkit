import { BetaSchemaForm } from '@ant-design/pro-components';
import Text from './schema';

function App() {
  return (
    <>
      <h3>Text Box Example</h3>
      <BetaSchemaForm
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
            title: '',
            dataIndex: 'refetch',
            renderFormItem(a:any, b:any, form: any){
              return (
                <button type="button" onClick={() => {
                  const rand = parseInt(Math.random() * 10)
                  fetch('https://jsonplaceholder.typicode.com/todos/1')
                    .then(response => response.json())
                    .then(json => {
                      console.log(json)
                      form.setFieldsValue({auth_uri: json.title.slice(5,10)})
                      form.setFieldsValue({token: json.title.slice(0,10)})
                    })
                }} > Regenerate </button>
              )
            },
            fieldProps: {
              buttonStyle: 'default',
            },
          },
          {
            title: 'Token',
            valueType: 'password',
            dataIndex: 'token',
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
          }
        
        `}
      </pre>
    </>
  );
}

export default App;
