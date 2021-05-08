import './assets/styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './assets/components/Nav';
import News from './assets/components/News';
import UserDetails from './assets/components/UserDetails'; 
import UploadPost from './assets/components/UploadPost';
import "@material-tailwind/react/tailwind.css";
import { useStateValue } from './StateProvider'
import Login_signup from './assets/components/Login-signup';
function App() {

  const [{user}] = useStateValue();
  console.log(process.env);
  return (
    <div className="App">
    {
      !user ? (
        <Login_signup />
      ) : (
        <>
          <Nav />
          <h5><span>Deep Learning Certificate - </span> Foundations and Applications | Interactive Live Online Programme | IISc</h5>
          <div className="components">
            <UserDetails />
            <UploadPost />
            <News />
          </div>
        </>
      )
    }
      
    </div>
  );
}

export default App;
