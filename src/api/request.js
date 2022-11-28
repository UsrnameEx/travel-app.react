export default function request(endpoint, params = {}) {
    const sendRequest = async () => {
        const apiUrl = 'http://127.0.0.1:8000/' + endpoint

        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            credentials: 'same-origin'
        }).then(async function (response) {
            if (response) {
                await response.json();
            } else {
                console.log('Server no response');
            }
        }).catch(function () {
            console.log('Network error');
        });
    }

    sendRequest();
}