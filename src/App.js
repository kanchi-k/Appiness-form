import { useSelector } from "react-redux";
import LoginPage from './Components/LoginPage';
import EmployeeList from './Components/EmployeeList';
import { selectUser } from './Slices/userSlice';
import './App.css';


function App() {

  const user = useSelector(selectUser)

  return (
    <div className="App">
     {user ? <EmployeeList/> : <LoginPage/>}
    </div>
  );
}

export default App;
