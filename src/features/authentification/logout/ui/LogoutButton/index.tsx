import {Button} from "../../../../../shared/ui";
import {logOutTC} from "../../../../../entities/model/actions/auth";
import {useDispatch} from "react-redux";

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