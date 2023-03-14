
import React from 'react'

const Table = ({address}) => {
  return (
    <>
    
         {address && (
            <div id = 'tab'>
              <table className="table table-success  table-striped mt-3">
                <thead>
                  <tr>
                    <th scope="col">Logradouro</th>
                    <th scope="col">Bairro</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
  
                <tbody>
                  <tr>
                    <td>{address.logradouro}</td>
                    <td>{address.bairro}</td>
                    <td>{address.localidade}</td>
                    <td>{address.uf}</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
          )}
          </>
        
      
  )
}

export default Table

