import Profile from './profile/Profile';
import './App.css';


function App() {
  const fullName ="Achouri Ichrak"
    const bio="Brillante"
    const profession="Full Stack Developer"
  function handleName(){
    alert(`${fullName}`)
  }
  return (
    <div className="App">
      <Profile fullName ={fullName}
                bio={bio}
                profession={profession}
                handleName={handleName}>
        <img style={{width:'500px', border:'2px solid white',marginTop:'50px',marginLeft:'50px'}} src ="./me.jpg" alt='me'/>
     </Profile>
    </div>
  );
}

export default App;
