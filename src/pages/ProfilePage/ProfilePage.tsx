import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {Preloader} from "../../shared/ui";
import {setAuthUserDataTC} from "../../entities/session";
import {getProfileTC, ProfileNavigation, ProfileHeader} from "../../entities/profile";
import {AddPostForm} from "../../features/viewer";
import {PostList} from "../../widgets/PostList/PostList";

const ProfilePage = (props: any) => {
    const dispatch = useDispatch();
    const {isAuth, id} = useSelector(({auth}: any) => auth);
    const {isFetching} = useSelector(({profile}: any) => profile);
    const userId = props.match.params.userId;

    useEffect(() => {
        if (!id) {
            dispatch(setAuthUserDataTC())
        }
        if (!userId) {
            dispatch(getProfileTC(id))
        } else {
            dispatch(getProfileTC(userId))
        }
    }, [userId, id])


    if (!isAuth || userId) {
        return <Redirect to="/login" />
    }

    if (isFetching) {
        return <Preloader />
    }

    return (
        <>
            <ProfileHeader />
            <ProfileNavigation />
            <AddPostForm />
            <PostList />
        </>
    );
};

export const ProfilePageWithRouter = withRouter(ProfilePage);


