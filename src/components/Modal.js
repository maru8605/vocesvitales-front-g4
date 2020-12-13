import React from 'react'
import { Link } from 'react-router-dom'



const Modal=()=>{
    return(<>
    <div id='myModal' class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Se ha enviado tu información</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Gracias por ser parte del cambio</p>
        </div>
        <div class="modal-footer">
          <Link to={`/`}type="button" class="btn btn-primary">volver a home</Link>
        </div>
      </div>
    </div>
  </div>
    </>)
}

export default Modal