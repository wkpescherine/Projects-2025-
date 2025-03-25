import React from 'react'
import { StytchLogin } from "@stytch/react"

const Login = () =>{
    const styles = {
        fontFamily: 'Arial',
    };

    const callbacks = {
        onEvent: ({type, data}) => {
            if(type === 'MAGIC_LINK_LOGIN_OR_CREATE'){
                console.log('Email magic link sent', data)
            }
            //These lines caused an error.
            //,
            //onError:(data) => {
            //    console.log(data);
            //}
        }
    };

    const config ={
        products: ['emailMagicLinks', 'oauth'],
        emailMagicLinksOptions: {
            loginRedirectURL: 'https://example.com/authenticate',
            loginExpirationMinutes: 30,
            signupRedirctURL: 'https://example.com/authenticate',
            signupExpirationMinutes: 60,
            createUserasPending: true,
        },
        oauthOptions:{
            providers:[
                {
                    type:'google',
                    one_tap: true,
                    position: 'floating',
                },
                {
                    type: 'microsoft',
                    provider_param: {
                        login_hint: 'example_hint@stytch.com'
                    },
                },
            ],
        },
    };

    return(
        <div className="sign-in-container">
            <StytchLogin config={config} styles={styles} callbacks={callbacks} /> 
        </div>
    )

};

export default Login;