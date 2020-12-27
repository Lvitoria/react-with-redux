import './intervalo.css'
import React from 'react'
import Card from './Card'

//redux
import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'
const intervalo = props => {
    const { min, max } = props
    return (
        <Card title="Intervalo de Números" Red>
            <div className="Intervalo">
                <span>
                    <strong>Mínino: </strong>
                    <input
                        type="number"
                        value={min}
                        onChange={ e =>  props.alterarMinimo(+e.target.value)  }
                    />
                    {/* o + converte string para inteiro */}
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input
                        type="number"
                        value={max}
                        onChange={ e =>  props.alterarMaximo(+e.target.value)  }
                    />
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

function mapDispatchCreatorsToProps(dispacth){
    return{
        alterarMinimo(novoNumero){
            const action = alterarNumeroMinimo(novoNumero)
            dispacth(action)
        },
        alterarMaximo(novoNumero){
            const action = alterarNumeroMaximo(novoNumero)
            dispacth(action)
        }  
    }
}


//PARAMETROS DO CONNECT
// PRIMEIRO UMA FUNÇÃO PARA MAPEAR OS ESTADOS DA APLICAÇÃO
// SEGUNDO PARAMETRO  UMA FUNÇÃO PARA DISPARAR AS ALTERAÇÕES DO ESTADOS
export default connect(mapStateToProsp,mapDispatchCreatorsToProps)(intervalo)