import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function SortRestAPITable() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
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

    const handleSort = (column) => {
        // Sort the data based on the selected column
        const sortedData = data.sort((a, b) => {
            if (a[column] < b[column]) {
                return -1
            }
            if (a[column] > b[column]) {
                return 1
            }
            return 0
        })
        setData([...sortedData])
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th onClick={() => handleSort('id')}>ID</th>
                    <th onClick={() => handleSort('firstName')}>FirstName</th>
                    <th onClick={() => handleSort('lastName')}>FastName</th>
                    {/* Add more sortable table headers here */}
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

export default SortRestAPITable
