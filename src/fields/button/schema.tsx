import { useState } from "react";

const columns = [
    {
      title: '',
      dataIndex: 'refetch',
      renderFormItem(a:any, b:any, form: any){
        const [loading, setLoading] = useState(false);
        const rand = Math.ceil( Math.random() * 10 );
        const getToken = () => {
          setLoading(true);
          fetch(`https://jsonplaceholder.typicode.com/todos/${rand}`)
          .then(response => response.json())
          .then(json => {
            console.log(json)
            form.setFieldsValue({auth_uri: json.title.slice(5,10)})
            form.setFieldsValue({token: json.title.slice(0,10)})
            setLoading(false);
          })
        }

        // return (
        //   <>
        //     <button type="button" onClick={getToken} > Regenerate Token </button>
        //     {loading && <span > Fetching token ...</span>}
        //   </>
          
        // )
        //@ts-ignore
        return clickableComponent(getToken, loading, form);
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
      title: 'Auth URI ',
      dataIndex: 'auth_uri',
      fieldProps: {
        placeholder: 'Auth URI',
      },
    },
  ];
  
  export default columns;
  