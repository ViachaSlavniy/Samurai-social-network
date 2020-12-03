import { Route, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileWithRouter from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from './components/Messages/Messages';
import Newsfeed from './components/News/News';
import Users from './components/Users/Users';
import Login from './components/Login/Login';


function App() {

  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
        <div className="app-wrapper-content">
          <Switch>
            <Route path="/profile/:userId?" render={() => <ProfileWithRouter/>} />
            <Route path="/messages" render={() => <Messages/>} />
            <Route path="/news" render={() => <Newsfeed/>} />
            <Route path="/users" render={() => <Users/>} />
            <Route path="/login" render={() => <Login/>} />
            <Route path="/" render={() => <ProfileWithRouter/>} />
          </Switch>
        </div>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
