export const handleSubmitForm = async (data) => {
    try {
        const response = await fetch('http://localhost:5000/api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    } catch (error) {
        console.log('Error submitting form', error);
    }
}