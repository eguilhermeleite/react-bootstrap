
import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';



function App() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);

  const handleInputChange = event => {
    setCep(event.target.value);
  };

  const handleSubmit = event => {
    // evita o reload da página
    event.preventDefault();

    // faz a consulta à API
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Dados inválidos.');
        } else {
          return response.json();
        }
      })

      .then(data => {
        // entao defina o endereco com os dados retornados
        setAddress(data)
      })

      .catch(error => {
        console.error(error);
        // retorna um alert e limpa os dados de address
        alert("CEP Inválido!")
        setAddress("")
      });
  };

  return (
    <>
      <div className="container">
        <h1 className='mt-5 mb-3 h4'><strong>Consulta CEP com React</strong></h1>
        <Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
        <Table address={address} />

      </div>
    </>
  );
}

export default App;


