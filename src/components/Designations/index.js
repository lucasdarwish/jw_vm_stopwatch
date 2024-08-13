import { react, useState, useEffect } from "react";

import playActionSRC from '../../assets/play.png';
import pauseActionSRC from '../../assets/pause.png';
import trashActionSRC from '../../assets/trash.png';

import { compareAsc, format } from "date-fns";


import styles from "./style";

export default function Designation( props ) {

    const [ designated, setDesignated ] = useState('');
    const [ tempoDesejado, setTempoDesejado ] = useState( 
        props.number == 1 ? "10 min" : props.number == 2 ? "10 min" : props.number == 3 ? "4 min" : props.number == props.totalNumbers && "30 min"
    );

    //Cronometro
    const [tempoDecorrido, setTempoDecorrido] = useState(0);
    const [iniciado, setIniciado] = useState(false);


    useEffect(() => {
        let interval;

        if (iniciado) {
            interval = setInterval(() => {
                setTempoDecorrido(prevTempo => prevTempo + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [iniciado])

    const iniciarCronometro = () => {
        if (!iniciado) {
            setIniciado(true);
        }
    };

    const pausarCronometro = () => {
        if (iniciado) {
            setIniciado(false);
        }
        DesignatedAdd();
    };
    const zerarCronometro = () => {
        setTempoDecorrido(0);

        let designacoes = props.dsg.allDesignateds

        var myEntrie = { Parte : `${props.number}` , Participante : designated , Tempo_Desejado : tempoDesejado != 0 && tempoDesejado  , Tempo_Realizado : ` 0 min`}
        
        designacoes[ ( props.number - 1 ) ] = myEntrie

        props.dsg.setAllDesignateds(designacoes => [...designacoes] );

    };

    const DesignatedAdd = () => {
        let designacoes = props.dsg.allDesignateds

        var myEntrie = { Parte : `${props.number}` , Participante : designated , Tempo_Desejado : tempoDesejado != 0 && tempoDesejado  , Tempo_Realizado : ` ${ format(tempoDecorrido * 1000, "mm:ss") } min`}

        if(designacoes.length == 0) {
            
            props.dsg.setAllDesignateds( [ myEntrie ] )

        } else {
            designacoes[ ( props.number - 1 ) ] = myEntrie

            props.dsg.setAllDesignateds(designacoes => [...designacoes] );

            // props.dsg.setAllDesignateds(designacoes => [...designacoes,  myEntrie ] )
        }

    };

    const handleText = ( text ) => {
        setDesignated( text.target.value )
    }

    const handleSelect = ( selectValue ) => {
        setTempoDesejado( selectValue.target.value );
    };

    return(
        <div style={ styles.Main } className={ !iniciado && "pausado" }>

            <div style = { styles.DesignationTitle }>
                <div style = { styles.DesignationTitleText }>Parte {props.number}:</div>
                <div style = { { ...styles.DesignationTitleText, ...styles.DesignationTitleNumber } }>
                    { props.number <= 3 || props.number == props.totalNumbers ? tempoDesejado : null }

                    { 
                        props.number > 3 && props.number != props.totalNumbers && (
                            <>
                                <select style = { styles.DesignationTimeSelect } onChange={ handleSelect }>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option>
                                </select>
                            min
                            </>
                        )
                    }
                    
                </div>

                <input
                    style = { styles.DesignationInput }
                    placeholder = "Nome do Designado"
                    placeholderTextColor = "#a5a5a5"
                    onChange = { newText => handleText( newText ) }
                    defaultValue = { designated }
                />
            </div>
            <div style = { styles.TimeWrapper }>
                {/* <div style = { styles.TimeValue }> { Moment.utc(tempoDecorrido * 1000).format('mm:ss') } min</div> */}
                <div style = { styles.TimeValue }> { format(tempoDecorrido * 1000, "mm:ss") } <span style = { styles.TimeValueLabel } >min</span></div>
                <div style = { styles.PressableWrapper } >
                    <button
                        title = "Iniciar"
                        style = { styles.TimeAction }
                        onClick = { () => { iniciarCronometro() } }
                    >
                        <img src = { playActionSRC }
                            style = { styles.TimeActionIcon }
                        />
                    </button>

                    <button
                        title = "Pausar"
                        style = { styles.TimeAction }
                        onClick = { () => { pausarCronometro() } }
                    >
                        <img src = { pauseActionSRC }
                            style = { styles.TimeActionIcon }
                        />
                    </button>

                    <button
                        title = "Limpar"
                        style = { styles.TimeActionClear }
                        onClick = { () => { zerarCronometro() }  }
                    >
                        <img src = { trashActionSRC }
                            style = { styles.TimeActionStop }
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}