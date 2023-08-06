import React, {useState} from "react";

export const ProfileNavigation = () => {

    const [activeInfoItem, setActiveInfoItem] = useState(0)
    const profileInfoArr = ['Timeline', 'About'];

    return (
        <div className={s.profileInfo}>
            {
                profileInfoArr.map((item, index) => (
                    <div key={item}
                         onClick={() => setActiveInfoItem(index)}
                         className={`${s.profileInfo__item} ${index === activeInfoItem && s.active}`}>
                        {item}
                    </div>))
            }
        </div>
    );
};
