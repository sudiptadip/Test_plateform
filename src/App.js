import axios from "axios";
import { useState } from "react";
import "./App.css";
import Post from "./Components/Post"
function App() {
  const [data,setData] = useState([])
  function Handelclick(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((e)=> setData(e.data))
  }
  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
        onClick={Handelclick}
      >
        GET POSTS
      </button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
        {
          data.map((e) => <Post data={e} />)
        }
      </div>
    </div>
  );
}

export default App;
