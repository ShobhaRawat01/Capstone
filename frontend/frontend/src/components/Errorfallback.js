import image from '../components/Assets/error.gif';
import React from 'react'
function Errorfallback({error, resetErrorBoundary}) {
  return (
    <div id="login">
        <div className="container ">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                {" "}
      <img src={image} alt="" />
      <pre>Oops something went wrong!!</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Errorfallback;