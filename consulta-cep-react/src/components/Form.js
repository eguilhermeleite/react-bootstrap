import React from 'react'

const Form = ({handleSubmit,handleInputChange,cep}) => {
  return (
    <>
       <form className='mt-3 mb-5' onSubmit={handleSubmit}>
          <div className='row'>
            <div className="col-6 col-lg-2">
              <input type="text" minLength={8} maxLength={9} required className="form-control" onChange={handleInputChange} value={cep} placeholder="Digite o CEP"/>
            </div>

            <div className='col-6 col-lg-2' style={{marginLeft:'-18px'}}>
              <button type="submit" className="btn btn-primary">Consultar</button>
            </div>
          </div>
        </form>
    </>
  )
}

export default Form
