import {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import ProfileWithRouter from '../components/Profile/Profile';
import Sidebar from '../components/Sidebar/Sidebar';
import Messages from '../components/Messages/Messages';
import Newsfeed from '../components/News/News';
import Users from '../components/Users/Users';
import Login from '../components/Login/Login';
import {initializeApp} from '../entities/model/actions/app'
import {useDispatch, useSelector} from 'react-redux';
import Preloader from '../components/Common/Preloader';
import Friends from '../components/Friends/Friends';
import './index.css';


function App() {
    const dispatch = useDispatch();

    const {initialize} = useSelector(({app}) => app)

    useEffect(() => {
        dispatch(initializeApp());
    }, [])

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            {initialize
                ? <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile/:userId?" render={() => <ProfileWithRouter/>}/>
                        <Route path="/messages" render={() => <Messages/>}/>
                        <Route path="/news" render={() => <Newsfeed/>}/>
                        <Route path="/friends" render={() => <Friends/>}/>
                        <Route path="/users" render={() => <Users/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Redirect from="/" to="/profile"/>
                    </Switch>
                </div>
                : <Preloader/>
            }
            <Sidebar/>
            <Footer/>
        </div>
    );
}

export default App;
