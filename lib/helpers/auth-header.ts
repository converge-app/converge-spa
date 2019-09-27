export const authHeader = () => {
    const jsonUser = localStorage.getItem('user')
    if (jsonUser) {
        const user = JSON.parse(jsonUser)

        if (user && user.token) {
            return {'Authorization': 'Bearer ' + user.token}
        } else {
            return {}
        }
    }
    return {}
}
