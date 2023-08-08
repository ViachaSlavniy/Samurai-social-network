
export type GetCaptchaDto = {
    url: string
}

export type SecurityApi = {
    getCaptcha: () => Promise<GetCaptchaDto>
}

