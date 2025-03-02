import { useState } from "react"
export default function Authentication() {
    
    const [isRegistration, setIsRegistration] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [authenticating, setAuthenticating] = useState(false)

    async function handleAuthenticate() {
        
    }


    return (
        <>
            <h2 className="sign-up-text">{isRegistration ? "Sign Up" : "Login"}</h2>
            <p>Sign in to your account!</p>
            <input 
                placeholder="example@email.com"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
            />
            <input 
                placeholder="********" 
                type="password"
                value={password}
                onChange={(e) => {setEmail(e.target.value)}}
            />
            <button onClick={handleAuthenticate}><p>Submit</p></button>
            <hr />
            <div className="register-content">
                <p>{isRegistration ? 'Already have an account?' : 'Don\'t have an account?'}</p>
                <button onClick={() => {setIsRegistration(!isRegistration)}}><p>{isRegistration ? "Sign in" : "Sign up"}</p></button>
            </div>
        </>
    )
}