import React, { useState } from 'react'
import axios from 'axios'

export default function AutismModel() {
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    const imageUrl = 'https://picsum.photos/id/237/200.jpg'
    const apiUrl = `http://localhost:5000/image-to-numpy?image_url=${encodeURIComponent(imageUrl)}`

    axios.get(apiUrl)
        .then(response => {
        const data = response.data
        setResult(data)
        setError(null)
    })
        .catch(error => {
        setError(error.response.data.error)
        setResult(null)
    });

    console.log(result)

    return (
        <div>
            {result}
        </div>
    )
}
