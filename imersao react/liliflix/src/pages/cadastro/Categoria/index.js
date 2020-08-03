import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'
import useForm from '../../../hooks/useForm'


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: 'rgba(0, 0, 0, 1)'
  }
  //const [categorias, setValue] = useState([])
  //const [values, setValue] = useState(valoresIniciais)

  const {handleChange, values, clearForm} = useForm(valoresIniciais)
  const [categorias, setCategorias] = useState([])
  /*
  
  }
  
  function handleChange(infosDoEvento){
    setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      )
  }
  
  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias'
      fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json()
          setCategorias(resposta)
          return; 
        }
        throw new Error('Não foi possível pegar os dados')
       })
    }    
  }, []);
  */

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://devsoutinhoflix.herokuapp.com/categorias'
    // E a ju ama variáveis
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json()
        setCategorias([
          ...resposta,
        ])
      })
    }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form  
        onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault()
        
        setCategorias([
          ...categorias,
          values
        ])

        clearForm()
      }}>
        
        <FormField 
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange = {handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading ...
          <br/>
          Cargando...
        </div>
      )}

      <ul>
          {categorias.map((categoria, index )=> {
            return  (
              <li key={`${categoria.titulo}`}>
                {categoria.tiutlo}
              </li>
            )
          })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;