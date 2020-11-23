export const setUsersAC = (obj) => {
    return {
        type: "SET_USERS",
        payload: obj
    }
}

export const followAC = (userId) => {
    return {
        type: "FOLLOW",
        payload: userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: "UNFOLLOW",
        payload: userId
    }
}