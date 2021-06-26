import callApi from "./index";

export function userLogin(data) {
    return callApi({
        url: "/auth/login",
        data: data,
        method: "post",
    })
}

export function userRegister(data) {
    return callApi({
        url: "/auth/register",
        data: data,
        method: "post",
    })
}
