
import './App.css';
import abc from './logo2.jpg';

function App() {
  return (
    <div>
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="titleRed">Your name here</h1>



<img src={abc} alt="abcj" />



<img src="/logo1.png" alt="abcjv"/>

       </div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4"/> 

</video>
        </div>
  );
}

export default App;
