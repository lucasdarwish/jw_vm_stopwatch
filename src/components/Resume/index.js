import { react, useEffect, useState} from "react";
import styles from "./style";

//Components
export default function GetResume( props ) {

    // console.log("designados", props.dsg.allDesignateds)

    const generateResume = () => {
        const generatedArr = props.dsg.allDesignateds.map( (item) => {
            return item
        })
        // const generatedString = JSON.stringify(generatedArr).replaceAll(",", ", ").replace(/[`~!@#$%^&*()_|+\-?;'".<>\{\}\[\]\\\/]/gi, '')

        // console.log("generatedString", generatedString)

        // window.open(`whatsapp://send?text=${generatedString}`)
    }

    return(
        // <div style = { styles.GetResumeWrapper }>
            <button
                    style = { styles.GetResume }
                    onClick = { () => { generateResume() } }
            >
                    <span style={ styles.GetResumeLabel }>Gerar Relatório</span>
            </button>
        // </div>
    )
}