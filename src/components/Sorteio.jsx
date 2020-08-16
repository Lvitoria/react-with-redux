import React  from 'react'
import Card from './Card'
export default props => {
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return(
        <Card title="Sorteio de um Número" Blue >
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}