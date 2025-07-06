export default function handleResponse(promise) {
    return promise
        .then(response => ({
            success: true,
            error: null,
            data: response.data,
        }))
        .catch(error => {
            console.error('Erro na requisição:', error.message);
            return {
                success: false,
                error: error.response?.data?.message || error.message,
                data: []
            };
        });
}