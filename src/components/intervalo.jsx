import './intervalo.css'
import React  from 'react'
import Card from './Card'
export default props => {

    return(
        <Card title="Intervalo de Números" Red>
            <div className="Intervalo">
                <span>
                    <strong>Mínino: </strong>
                    <input 
                        type="number" 
                        value={5} 
                       />
                        {/* o + converte string para inteiro */}
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input 
                        type="number" 
                        value={6} 
                        />
                </span>
            </div>
        </Card>
    )
}