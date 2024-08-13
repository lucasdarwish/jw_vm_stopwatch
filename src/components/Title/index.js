import react from "react";
import styles from "./style";

export default function Title( props ) {
    return(
        <div style={ styles.TitleWrap }>
            <span style={ styles.TitleText}>Designações - v2</span>
            <button onClick={ () => { props.qtd.setDesignationsCounter( props.qtd.designationsCounter + 1 ) } }>
                <img 
                    src = { '../../../assets/plus.png' }
                    style = { styles.PlusIcon }
                />
            </button>
        </div>
    )
}