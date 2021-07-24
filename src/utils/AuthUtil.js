export const saveUserLogged = (user) => {

    try{
        localStorage.setItem('user', JSON.stringify(user));
    }catch(err) {
        console.error(err)
    }
}

export const getUserLogged = () => {

    try{
        const data = JSON.parse(localStorage.getItem('user'));
        return data;
    }catch(err){
        console.err(err);
    }
}

export const removeUserLogged = (user) => {

    try{
        localStorage.removeItem('user');
    }catch(err) {
        console.error(err)
    }
}