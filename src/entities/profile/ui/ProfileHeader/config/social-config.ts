import {facebook, github, instagram, twitter, vk, youtube} from "../../../../../shared/assets/icons";
import {Contact} from "../../../model/types";
import {SocialImages} from "./types";


export const socialImages = {
    [Contact.facebook]: facebook,
    [Contact.vk]: vk,
    [Contact.twitter]: twitter,
    [Contact.instagram]: instagram,
    [Contact.youtube]: youtube,
    [Contact.github]: github,
} as SocialImages



