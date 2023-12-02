export default () => {
    const storageItem = localStorage.getItem('@@remember-rootState')
    const token = storageItem ?
        JSON.parse(storageItem).authSlice.user.token : null
    return token
}