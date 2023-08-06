import {useDispatch} from "react-redux";
import {Button} from "../../../../../shared/ui";
import {unfollowTC} from "../../model/unfollow";

export const UnFollowButton = ({id}) => {
    const dispatch = useDispatch();

    const handleUnFollowButtonClick = () => {
        dispatch(unfollowTC(id))
    }

    return (
        <Button
            buttonType="secondary"
            onClick={handleUnFollowButtonClick}
        >
            Unfollow
        </Button>
    );
};
