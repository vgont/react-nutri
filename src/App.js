import React, { useEffect, useState } from 'react';
import './style.css';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    
    function loadApi(){
      const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

      fetch(url)
      .then(r => r.json())
      .then((json)=> {
        setNutri(json);  
      })
    }

    loadApi();

  }, [])

  return (
    <div className='container'>
      <header className=''>
        <h1>React Nutri</h1>
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id} className='post'>
            <h1 className='titulo'>{item.titulo}</h1>
            
            <img src={item.capa} alt={item.titulo} className='capa'/>

            <p>{item.subtitulo}</p>
            <a className='botao'>Acessar</a>

          </article>
        )
      })}
    </div>
  );
}

export default App;
