import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar/Sidebar';
import {initializeApp} from "../entities/session";
import {Layout, Preloader} from "../shared/ui";
import {LayoutHeader} from "../widgets/Header";
import {AppRouter} from "./appRouter";
import {Navigation} from "../widgets/Navigation/ui/Navigation";
import './index.css';


function App() {
    const dispatch = useDispatch();

    const {initialize} = useSelector(({app}) => app)

    useEffect(() => {
        dispatch(initializeApp());
    }, [])

    if (!initialize) {
        return <Preloader/>
    }

    return (
        <Layout
            headerSlot={<LayoutHeader/>}
            leftSidebarSlot={<Navigation/>}
            rightSideBarSlot={<Sidebar/>}
            content={
                <div className="app-wrapper-content">
                    <AppRouter/>
                </div>
            }
        />
    );
}

export default App;
