import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setdata] = useState([]);
  // we made state by hooks - set do render ..
  // by useeffect we control the infinity render
  //data is my state
  const getData = async () => {
    // asyncronic b couse we call api
    const responseData = await axios.get(
      'http://localhost:3000/users/'
      // headers: { 'Access-Control-Allow-Origin': '*' },
    );
    setdata(responseData.data);
    //put my api inside my data
  };
  useEffect(() => {
    getData();
  }, []);

  console.log('hila', data);

  const dataMap = () => {
    return data.map((dataobject) => {
      <div>
        <h1>{dataobject.id}</h1>
        <h1>{dataobject.cash}</h1>
        <h1>{dataobject.credit}</h1>
      </div>;
    });
  };

  return <div className="App">hila{dataMap()}</div>;
}
export default App;
