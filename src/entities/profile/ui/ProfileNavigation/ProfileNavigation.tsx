import React, {useState} from "react";
import cn from "classnames";
import styles from './ProfileNavigation.module.scss';

export const ProfileNavigation = () => {

    const [activeInfoItem, setActiveInfoItem] = useState(0)
    const profileNavigation = ['Timeline', 'About'];

    return (
        <div className={styles.navigation}>
            {profileNavigation.map((item, index) => (
                    <button className={cn(styles.item,
                        {
                            [styles.active]: index === activeInfoItem
                        }
                    )}
                         key={item}
                         onClick={() => setActiveInfoItem(index)}
                    >
                        {item}
                    </button>
                )
            )}
        </div>
    );
};
