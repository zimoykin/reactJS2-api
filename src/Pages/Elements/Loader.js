import React from 'react'


function Loader() {
    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="form-group">
                    <div className="container d-flex h-100">
                        <div className="row justify-content-center align-self-center">
                            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader