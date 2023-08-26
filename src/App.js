import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import College from './component/College';
import Home from './component/Home';
import University from './data/College_list';
import Mentor from './component/Mentor';

function App() {
  return (
   <>
  
     <Home/>
     <div>
     <h4 >
     Learn from top universities in the world
     </h4>
    {University.map((val) => (
        <College
          imgsrc={val.imgsrc}
          Name={val.Name}
        />
        
      ))}
      
      <hr/>
</div> 
<div>
     <h4 >
     Meet Your Mentor
     </h4>
     <p className='text-center'>please click on Mentor</p>
    {University.map((val) => (
        <Mentor
         mansrc={val.mansrc}
         Name={val.Name}
        />
        
      ))}
      
      <hr/>
</div>
   </>
  );
}

export default App;
