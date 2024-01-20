import { useState } from 'react'

const Login = ({checklogin, error}) => {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault() //does not submit to a page
        
        checklogin({username, password})

        //clear form
        setUsername("")
        setPassword("")
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            {(error !== "") ? (<div className="error">{error}</div>) : ""}
            
            <div className='form-control'>
                <label>Username</label>
                <input type='text' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Password</label>
                <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <input type='submit' value='Enter' className='btn btn-block' />
        </form>
    )
}

export default Login
