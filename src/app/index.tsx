import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar/Sidebar';
import {LayoutHeader} from "../widgets/Header";
import {Navigation} from "../widgets/Navigation";
import {initializeApp} from "../entities/app";
import {Layout, Preloader} from "../shared/ui";
import {AppRouter} from "./appRouter";
import './index.css';


export const App = () => {
    const dispatch = useDispatch();

    const {initialized} = useSelector(({app}: any) => app)

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch])

    if (!initialized) {
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
