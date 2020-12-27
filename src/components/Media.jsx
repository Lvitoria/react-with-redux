import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
const Media = (props) => {
    console.log("%c Numeros ===>", "color: yellow", props.teste)
    const { min, max } = props
    return (
        <Card title="Média dos Números" Green>
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        teste: state.numeros,
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Media)