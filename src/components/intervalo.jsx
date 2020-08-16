import './intervalo.css'
import React  from 'react'
import Card from './Card'
export default props => {
    return(
        <Card title="Intervalo de Números" Red>
            <div className="Intervalo">
                <span>
                    <strong>Mínino: </strong>
                    <input type="number" name="" id="" value={0} readOnly/>
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" name="" id="" value={10} readOnly/>
                </span>
            </div>
        </Card>
    )
}