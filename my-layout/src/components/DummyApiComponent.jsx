import { useEffect, useState } from 'react'

function DummyAPIComponent() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            try {
                const response = await fetch('https://dummyjson.com/users')
                const json = await response.json()
                console.log(json)
                setData(json.users)
                setIsLoading(false)
            } catch (error) {
                console.log('Error:', error)
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!data) {
        return null
    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DummyAPIComponent
