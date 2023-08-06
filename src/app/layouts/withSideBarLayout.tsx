import React, {ReactNode} from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";

type WithSideBarLayoutProps = {
    children: ReactNode;
}

const WithSideBarLayout = ({children}: WithSideBarLayoutProps) => {
    return (
        <>
            {children}
            <Sidebar />
        </>
    );
};