import {useDispatch} from "react-redux";
import {Button} from "../../../../../shared/ui";
import {logOutTC} from "../../model/logout";

export const LogoutButton = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logOutTC());
        window.location.href = '/login'
    }

    return (
        <Button onClick={logout} buttonType="reject">
            Logout
        </Button>
    );
};