import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Nav/Nav';
import Sidebar from '../components/Sidebar/Sidebar';
import Preloader from '../components/Common/Preloader';
import {initializeApp} from "../entities/session";
import {Layout} from "../shared/ui";
import {LayoutHeader} from "../widgets/LayoutHeader";
import {AppRouter} from "./appRouter";
import './index.css';


function App() {
    const dispatch = useDispatch();

    const {initialize} = useSelector(({app}) => app)

    useEffect(() => {
        dispatch(initializeApp());
    }, [])

    return (
        <Layout
            headerSlot={<LayoutHeader/>}
            leftSidebarSlot={<Nav/>}
            rightSideBarSlot={<Sidebar/>}
            content={initialize
                ? (
                    <div className="app-wrapper-content">
                        <AppRouter/>
                    </div>
                )
                : <Preloader/>
            }
        />
    );
}

export default App;
