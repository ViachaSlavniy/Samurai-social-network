import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {Button} from "../../../../../shared/ui";
import {followTC} from "../../model/follow";
import {FollowButtonProps} from "./types";

export const FollowButton = ({id}: FollowButtonProps) => {
    const dispatch = useDispatch();

    const handleFollowButtonClick = useCallback(() => {
        dispatch(followTC(id))
    }, [])

    return (
        <Button
            buttonType="primary"
            onClick={handleFollowButtonClick}
        >
            Follow
        </Button>
    );
};
