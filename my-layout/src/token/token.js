const checkToken = () => {
    const storedValue = localStorage.getItem('authenticated')
    console.log('storedValue:', storedValue)
    if (storedValue !== null) {
        // The item exists in the local storage
        console.log('Item found:', storedValue)
        return true
    } else {
        // The item does not exist in the local storage
        console.log('Item not found')
        return false
    }
}

export { checkToken }
