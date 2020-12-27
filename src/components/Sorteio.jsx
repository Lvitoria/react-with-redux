import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
function Sorteio(props) {
    const { min, max } = props
    const aletorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Sorteio de um Número" Blue >
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <strong>{aletorio}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProsp(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProsp)(Sorteio)