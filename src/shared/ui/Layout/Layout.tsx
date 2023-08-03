import React, {ReactNode} from "react";
import styles from './Layout.module.scss';

type LayoutProps = {
    headerSlot: ReactNode;
    leftSidebarSlot: ReactNode;
    rightSideBarSlot: ReactNode;
    content: ReactNode;
}

export const Layout = ({
                           headerSlot,
                           leftSidebarSlot,
                           rightSideBarSlot,
    content
                       }: LayoutProps) => {
    return (
        <div className={styles.layout}>
            {headerSlot}
            {leftSidebarSlot}
            {content}
            {rightSideBarSlot}
            <footer className={styles.footer}>
                Copyright 2020 SamuraiSocial All Rights Reserved.
            </footer>
        </div>
    );
};