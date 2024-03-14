import { createContext, useState } from "react";


export const AuthContext = createContext({});



export function AuthProvider({children}){
    
    const [user, setUser] = useState({
        email: 'teste@teste.com'
    });
    
    function login(email, senha){
        if(email == 'teste@teste.com' && senha =='123456'){
            setUser({
                nome: 'Teste',
                email
            })
            return "ok"
        }
        if(email == 'joao@teste.com' && senha =='123456'){
            setUser({
                nome: 'João',
                email
            })
            return "ok"
        }           
        return "E-mail ou senha inválidos."
    }

    function logout(){
        setUser(null);
    }
    
    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
        )

};   