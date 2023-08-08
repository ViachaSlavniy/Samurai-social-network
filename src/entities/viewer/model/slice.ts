import {ViewerInitialState} from "./types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: ViewerInitialState = {
    users: [],
    isLoading: false,
    totalCount: 0,
    error: null,
    currentPage: 1,
    pageSize: 10,
    portionSize: 10,
    searchResult: {
        items:[],
        totalCount: 0
    },
    friends: {
        items: [],
        totalCount: 0,
    }
}

const viewerSlice = createSlice({
    name: "viewerSlice",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload.items;
            state.totalCount = action.payload.totalCount;
        },
        setFriends: (state, action) => {
            state.friends = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        searchUsers: (state, action) => {
            state.searchResult = action.payload
        }
    }
})

export const viewerReducer = viewerSlice.reducer;
export const {
    setFriends,
    setCurrentPage,
    searchUsers,
    setIsLoading,
    setUsers,
} = viewerSlice.actions;



