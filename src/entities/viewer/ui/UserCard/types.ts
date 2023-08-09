import {ReactNode} from "react";
import {IUser} from "../../model/types";

export type UserCardProps = {
    buttonSlot: ReactNode;
    userInfo: IUser;
}
