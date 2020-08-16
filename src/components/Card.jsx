import './Card.css'
import React  from 'react'

function getColor(props){
   // exemplo Red é um classe do css
   if(props.Red) return "Red"
   if(props.Green) return "Green"
   if(props.Blue) return "Blue"
   if(props.Purple) return "Purple"
   return ""
}

export default props => {
    return(
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}