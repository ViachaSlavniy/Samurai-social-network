import {Post} from "../../entities/post";

export const PostList = () => {

    const posts = Array(2).fill({
        postText: "Some text",
        likesCount: 5,
        userPhoto: null
    }).map((item, index) => <Post key={index} {...item} />)

    return (
        <>
            {posts}
        </>
    );
};
