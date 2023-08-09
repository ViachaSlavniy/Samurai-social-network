import {instance} from "../../../shared/api";
import {SecurityApi} from "./types";

export const captchaAPI: SecurityApi = {
    getCaptcha() {
        return instance.get(`/security/get-captcha-url`)
            .then(resp => resp.data);
    }
}
