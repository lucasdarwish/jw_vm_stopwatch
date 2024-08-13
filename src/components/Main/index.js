import { react, useState, useEffect} from "react";
import styles from "./style";

//Components
import Designation from "../Designations";
import GetResume from "../Resume";

export default function Main( props ) {

    const [ allDesignateds, setAllDesignateds ] = useState( [  ] );  

    const [ treasuresParts, setTreasuresParts ] = useState( 3 );
    const [ ministryParts, setMinistryParts ] = useState( 2 );
    const [ christianLife , setchristianLife ] = useState( 2 );

    useEffect( () => {
        console.log("geral", allDesignateds)
    }, [allDesignateds] )

    return(
        <>
            <div style={ styles.Main } section = { "Tesouros" }>
                <div style = { { ...styles.TitleSection , ...styles.TreasureTitle } }>Tesouros da Palavra de Deus</div>
                {(
                    function (rows, i, len) {
                        while (++i <= len) {
                            rows.push( <Designation number = { i } totalNumbers = { treasuresParts + ministryParts + christianLife  } dsg = { {  allDesignateds, setAllDesignateds } } /> )
                        }
                        return rows;
                })([], 0, treasuresParts)}

            </div>
            <div style={ styles.Main } section = { "Faça seu melhor no ministério" }>
                <div style = { { ...styles.TitleSection , ...styles.MinistryTitle } }>Faça seu melhor no ministério</div>
                {(
                    function (rows, i, len) {
                        while (++i <= len) {
                            rows.push( <Designation number = {  treasuresParts + i } totalNumbers = { treasuresParts + ministryParts + christianLife  }dsg = { {  allDesignateds, setAllDesignateds } } /> )
                        }
                        return rows;
                })([], 0, ministryParts)}

                <div onClick = { () => { setMinistryParts( ministryParts + 1 ) } }> Adicionar parte </div>

            </div>

            <div style={ styles.Main } section = { "Nossa Vida Cristã" }>
                <div style = { { ...styles.TitleSection , ...styles.LifeTitle } }>Nossa Vida Cristã</div>
                {(
                    function (rows, i, len) {
                        while (++i <= len) {
                            rows.push( <Designation number = { i + treasuresParts + ministryParts } totalNumbers = { treasuresParts + ministryParts + christianLife  } dsg = { {  allDesignateds, setAllDesignateds } } /> )
                        }
                        return rows;
                })([], 0, christianLife)}

                <div onClick = { () => { setchristianLife( christianLife + 1 ) } }> Adicionar parte </div>

            </div>
            <GetResume  dsg = { {  allDesignateds, setAllDesignateds } }/>
        </>

    )
}