import React from 'react'

export default function Footer(props) {
  
  return (
    <div>
      <footer className="page-footer bg-dark">
        <div  style={{background:"#28c792"}}>
            <div className="container">
                <div className="row py-4 d-flex align-items-center">
                    <div className="col-md-12 text-center">
                        <a href="/"><i className="fa-brands fa-twitter"></i></a>
                        <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="/"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div className="container text-center text-md-left mt-5">
            <div className="row">
                <div className="col-md-3 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold text-light"></h6>
                    <hr className='bg-success mb-4 mt-0 d-inline-block mx-auto' />
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}
