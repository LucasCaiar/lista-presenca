import './style.css'
import { Card } from '../../components/Card'

export function Home() {
    return (
      <div className='container'>
        <h1>Lista de Presença</h1>
        <input type="text" placeholder="Digite seu nome"/>
        <button>Adicionar</button>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    
      
    );
}


  