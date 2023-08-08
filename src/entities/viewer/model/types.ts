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
    items: IUser[];
    isLoaded: boolean;
    totalCount: number | null;
    error: null;
    currentPage: number;
    pageSize: number;
    portionSize: number;
    searchResult: {
        items: IUser[],
        totalCount: number | null;
    },
    friends: {
        items: IUser[];
        totalCount: number | null;
    }
}
