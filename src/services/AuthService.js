import { removeUserLogged, saveUserLogged } from 'utils/AuthUtil';

export const Login = ({email, password}) => {

    return new Promise ( (resolve, reject) => {

        try {
            setTimeout( () => {
                saveUserLogged({email});
                resolve(email);
            }, 2000);
        }catch(err) {
            reject(err)
        }
    });
}

export const Logout = () => {
    
    return new Promise ( (resolve, reject) => {

        try {
            setTimeout( () => {
                removeUserLogged();
                resolve();
            }, 1000);
        }catch(err) {
            reject(err)
        }
    });
}