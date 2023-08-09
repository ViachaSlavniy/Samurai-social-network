export interface IPost {
    id: number;
    postText: string;
    likesCount: number;
}


export type PostInitialState = {
    postText: string,
    postsData: IPost[]
}
