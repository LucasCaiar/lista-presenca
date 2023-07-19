import './style.css'
import { Card } from '../../components/Card'

export function Home() {
    return (
      <div className='container'>
        <h1>Lista de Presença</h1>
        <input type="text" placeholder="Digite seu nome"/>
        <button>Adicionar</button>
        <Card name='Dora' time='10:12:15'/>
        <Card name='Tiago' time='09:06:05'/>
        <Card name='Osmar' time='23:14:17'/>
        <Card name='Lucas' time='16:11:16'/>
      </div>

    
      
    );
}


  