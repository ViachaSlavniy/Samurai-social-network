import {useDispatch} from "react-redux";
import {Button} from "../../../../../shared/ui";
import {logOutTC} from "../../model/thunks";

export const LogoutButton = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logOutTC());
        window.location.href = '/login'
    }

    return (
        <Button onClick={logout}
                buttonType="secondary"
        >
            Logout
        </Button>
    );
};
