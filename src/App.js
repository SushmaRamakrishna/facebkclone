import React from 'react';
import './App.css';
import Header from "./Components/header/header"
import Sidebar from "./Components/navbar/navbar"
import Feed from "./Components/Feed/feed"
import Widgets from "./Components/Widgets/widgets"
import Login from "./Components/Login/login"
import { useStateValue} from "./Components/StateProvider/StateProvider"

function App () {
  const [{user}, dispatch] = useStateValue();
  
    return(
      <div className="app">
      {!user ? <Login /> : (
        <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
       </>
      )} 
     
    </div>
    );
 
}

export default App;
