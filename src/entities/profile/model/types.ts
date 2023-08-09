export enum Contact {
    facebook = "facebook",
    website = "website",
    vk = "vk",
    twitter = "twitter",
    instagram = "instagram",
    youtube = "youtube",
    github = "github",
    mainLink = "mainLink"
}

export interface IProfile {
    aboutMe: string;
    contacts: {
        [K in Contact]: string
    },
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: {
        small: string;
        large: string;
    }
}

export type ProfileInitialState = {
    profilePage: IProfile | null,
    isFetching: boolean;
    editMode: boolean;
}
