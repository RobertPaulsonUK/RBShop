async function DeleteSession() {
    try {
        const response = await fetch('/api/session', {
            method: 'DELETE',
        })
        if (response.ok) {
            return true
        } else {
            const errorData = await response.json()
            console.error('Failed to delete session:', errorData.error)
            return null
        }
    } catch (error) {
        console.error('Error while deleting session:', error)
        return null
    }
}
export default DeleteSession