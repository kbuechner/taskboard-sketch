import React from 'react'

const Group = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

/*
var myHeaders = new Headers();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

*/


    console.log(JSON.stringify(props));
    const {accessToken, url, children } = props;
    const requestHeaders = {
      'Access-Token': accessToken,
      'Authorization': `Bearer ${accessToken}`
    }
    const requestOptions = {
      method: 'GET',
      headers: requestHeaders,
      redirect: 'follow'
    };

    useEffect(() => {
        fetch(url, requestOptions).then((res) => {
            console.log(res);
        });
    });

    return <div>{children}</div>;
};

export default Group;
