import React, { useState } from 'react'
import './style.css'
import { Card } from '../../components/Card'

export function Home() {

    const [name, setName] = useState('Lucas')
    
    return (

      <div className='container'>
        <h1>{name}</h1>
        <input 
        type="text" 
        placeholder="Digite seu nome"
        onChange={function(event) {setName(event.target.value)}}
        />
        <button>Adicionar</button>
        <Card name='Dora' time='10:12:15'/>
        <Card name='Tiago' time='09:06:05'/>
        <Card name='Osmar' time='23:14:17'/>
        <Card name='Lucas' time='16:11:16'/>
      </div>

    
      
    );
}


  