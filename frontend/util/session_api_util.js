
export const login = user => (
    $.ajax({
        url: "api/session",
        method: "POST",
        data: {user}
    })
)
export const logout = () => (
    $.ajax({
        url: "/api/session",
        method: "DELETE"
    })
)
export const signup = user => (
    $.ajax({
        url: "/api/user",
        method: "POST",
        data: {user}
    })
)

export const testLogin = () => {
    debugger;
    return $.ajax({
        url: "api/session",
        method: "POST",
        data: {
            user: {
                email: "myoung4@binghamton.edu",
                password: "123456"
            }
        }
    })
}