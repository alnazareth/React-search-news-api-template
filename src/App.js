import React,{Component,useState,useEffect} from 'react'
import "./App.css"
import logo from "./logo.svg"


const App=()=>{

  const [news, setNews] = useState([]);
  const [searchQquery, setSearchQuery] =useState('react');
  const [url, setUrl] = useState("http://hn.algolia.com/api/v1/search?query=react");
  const [loading, setLoading] = useState(false);


  const faceNews=()=>{
    setLoading(true)
    fetch(url)
    .then(result=> result.json())
    .then(data=>(setNews(data.hits), setLoading(false)))
    .then(data=>console.log(data))
    .catch(error=>console.log(error));
  };

  useEffect(()=>{
    faceNews();
  },[url])

const handleChange= (e)=>{
  setSearchQuery(e.target.value);
}

const handleSubmit=(e) =>{
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQquery}`);
}

return (
  <div> 
  <h2>News</h2>
  {loading ? <img src={logo}/>: "" }
  <form onSubmit={handleSubmit}> 
  <input type="text" value={searchQquery} onChange={handleChange} />
  <button >Search </button>
  </form>
  {news.map((n,i)=>(
    <p key={i}> <a href={n.url} target="_blank">{n.title}</a></p>
  ))}



  </div>

  )


}














/*
const App =()=>{

const [count, setCount] = useState(0);

useEffect(()=>{
  document.title = `Clicked ${count} times`;
})


const increment =() =>{
  setCount(count+1);
   
}

return(
<div className="app">
   <h2> Counter App</h2>
   <button onClick={increment}>
   Clicked {count} times
   </button> 
</div> 
  )



};




class App extends Component {

state={
  count:0
};

increment =()=>{
  this.setState({
    count: this.state.count +1
  });
};


componentDidMount(){
  document.title = `Clicked ${this.state.count} times`;
}


componentDidUpdate(){
  document.title = `Clicked ${this.state.count} times`;
}

render(){

 return <div className="app">
   <h2> Counter App</h2>
   <button onClick={this.increment}>
   Clicked {this.state.count} times
   </button> 
</div> 
}

}

*/


export default App;
