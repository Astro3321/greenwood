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


    const height = {

        height: "100vh"

    }

    return (

        <>
        <div>  
            {result}

            <div class="container" style={height}>
  <div class="form-group" x-data="{ fileName: '' }">
    <div class="input-group shadow">
      <span class="input-group-text px-3 text-muted"><i class="fas fa-image fa-lg"></i></span>
      <input type="file" x-ref="file"  name="img[]" class="d-none"/>
      <input type="text" class="form-control form-control-lg" placeholder="Upload Image" x-model="fileName"/>
      <button class="browse btn btn-primary px-10" type="button" > <i class="fas fa-image"></i> Browse
      </button> <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  </div>
</div>   
        </div>     </>
    )
}
