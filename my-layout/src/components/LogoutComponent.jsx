import { useNavigate } from 'react-router-dom'

function LogoutComponent() {
    const navigate = useNavigate()

    const handleLogout = () => {
        // Perform logout actions such as clearing session or authentication state
        // ...
        console.log('ridirect to loginn')
        localStorage.removeItem('authenticated')
        // Redirect to the login page after logout
        navigate('/login')
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default LogoutComponent
