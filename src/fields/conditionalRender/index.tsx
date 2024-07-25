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
            valueType: 'divider',
            fieldProps: {
              className: 'mt-0',
            },
          },
          {
            title: 'Enable Proxy',
            dataIndex: 'enable_proxy',
            valueType: 'switch',
            initialValue: false,
          },
          {
            title: 'Protocol',
            dataIndex: 'protocol',
            valueType: 'radioButton',
            initialValue: 'http',
            valueEnum: {
              http: { text: 'HTTP' },
              https: { text: 'HTTPS' },
            },
            dependencies: ['enable_proxy'],
            fieldProps: (form: any) => {
              if (!form.getFieldValue('enable_proxy')) {
                return {
                  disabled: true,
                };
              }
              return {
                disabled: false,
              };
            },
          },
          {
            title: 'IP',
            dataIndex: 'ip',
            dependencies: ['enable_proxy'],
            formItemProps: (form: any) => {
              if (!form.getFieldValue('enable_proxy')) {
                return {
                  rules: [
                    {
                      pattern: /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/,
                      message: 'Enter a valid ipv4 ip address',
                    },
                  ],
                };
              }
              return {
                rules: [
                  {
                    required: true,
                    message: 'IP is required',
                  },
                  {
                    pattern: /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/,
                    message: 'Enter a valid ipv4 ip address',
                  },
                ],
              };
            },
            fieldProps: (form: any) => {
              if (!form.getFieldValue('enable_proxy')) {
                return {
                  disabled: true,
                  placeholder: 'IP',
                };
              }
              return {
                disabled: false,
                placeholder: 'IP',
              };
            },
          },
          {
            title: 'PORT',
            dataIndex: 'port',
            dependencies: ['enable_proxy'],
            valueType: 'digit',
            fieldProps: (form: any) => {
              if (!form.getFieldValue('enable_proxy')) {
                return {
                  disabled: true,
                  placeholder: 'PORT',
                };
              }
              return {
                disabled: false,
                placeholder: 'PORT',
              };
            },
            formItemProps: (form: any) => {
              if (!form.getFieldValue('enable_proxy')) {
                return {
                  rules: [
                    {
                      required: false,
                    },
                  ],
                };
              }
              return {
                rules: [
                  {
                    required: true,
                    message: 'PORT is required',
                  },
                  {
                    validator: (_, value: any) => {
                      if (value <= 2999) {
                        return Promise.reject(
                          'Port number should be greater than 2999'
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ],
              };
            },
          },
        
        `}
      </pre>
    </>
  );
}

export default App;
