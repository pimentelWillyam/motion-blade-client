export const handleSignOut = (navegar,setSessao) =>{
    setSessao({
        login: undefined,
        rank: undefined,
        token: undefined
    })
    navegar('/')


}