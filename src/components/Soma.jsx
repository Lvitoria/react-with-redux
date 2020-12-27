import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
function Soma(props) {
    const { min, max } = props
    return (
        <Card title="Soma dos Números" Purple>
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <strong>{min + max}</strong>
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

export default connect(mapStateToProsp)(Soma)