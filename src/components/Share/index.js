import { react, useState, useEffect} from "react";

import shareIconSRC from '../../assets/share.png';
import qrcodeIconSRC from '../../assets/qrcode.png';

import styles from "./style";



export default function Share( props ) {

    const [isOpen, setIsOpen] = useState( false )


    return(
        <div style={ styles.Main }>
            <div style={ styles.ButtonShare } onClick={ () => { setIsOpen(true) }} >
                <img src={shareIconSRC}  style={ styles.ButtonShareImage }/>
            </div>

            { isOpen && 
                <div style={ styles.QrcodeWrapper }>
                    <img src={qrcodeIconSRC} style={ styles.QrcodeWrapperImage }/>

                    <div style={ styles.CloseShare } onClick={ () => { setIsOpen(false) }}>Fechar Compartilhamento</div>
                </div>
            }
        </div>
    )
}