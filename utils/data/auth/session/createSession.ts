async function CreateSession() {
    try {
        const response = await fetch('/api/session', {
            method: 'GET',
        })

        if (response.ok) {
            return true
        } else {
            const errorData = await response.json()
            console.error('Failed to create session:', errorData.error)
            return null
        }
    } catch (error) {
        console.error('Error creating session:', error)
        return null
    }
}
export default CreateSession