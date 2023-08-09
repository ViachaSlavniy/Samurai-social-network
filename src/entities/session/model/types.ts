export const LOG_OUT = 'LOG_OUT';

export type AuthInitialState = {
    isAuth: boolean;
    id: number | null;
    email: string | null;
    login: string | null;
    captcha: string | null;
    userPhotoURL: string | null;
    userName: string | null;
}
