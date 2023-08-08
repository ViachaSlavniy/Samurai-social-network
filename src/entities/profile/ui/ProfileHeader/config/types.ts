import {Contact} from "../../../model/types";

export type SocialImages = {
    [K in Contact]: string
}

export type SocialButton = [key: Contact, value: string]
