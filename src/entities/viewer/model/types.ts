export interface IUser {
    id: number;
    followed: boolean;
    name: string;
    photos: {
        small: string | null;
        large: string | null;
    };
    status: string | null;
    uniqueUrlName: string | null;
}


export type ViewerInitialState = {
    users: IUser[];
    isLoading: boolean;
    totalCount: number;
    error: null;
    currentPage: number;
    pageSize: number;
    portionSize: number;
    searchResult: {
        items: IUser[],
        totalCount: number;
    },
    friends: {
        items: IUser[];
        totalCount: number;
    }
}
