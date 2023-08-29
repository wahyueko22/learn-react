import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function RestAPITable() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            try {
                const response = await fetch('https://dummyjson.com/users') // Replace with your API endpoint
                const json = await response.json()
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

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    {/* Add more table headers here */}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.firstName}</td>
                        <td>{row.lastName}</td>
                        {/* Add more table cells here */}
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default RestAPITable
