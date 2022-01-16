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
    setdata(responseData);
    //put my api inside my data
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  //its like component did mount -
  //render = loading data.
  return <div className="App">Home</div>;
}

export default App;
