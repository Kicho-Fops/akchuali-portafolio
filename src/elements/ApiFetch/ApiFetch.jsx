import React, { useState, useEffect } from 'react';

function ApiFetch() {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [width, setWidth] = useState()

    useEffect(() => {
        const url = "https://api.tinyfox.dev/img?animal=fox&json";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const urlF = 'https://api.tinyfox.dev/' + data.loc;
                setImageUrl(urlF);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <img src={imageUrl} alt="Fox" style={{ width: '100%', height: '100%' }} />
    );
}

export default ApiFetch;