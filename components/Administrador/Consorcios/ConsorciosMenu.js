import React from 'react'
import style from './style.scss';

import Boton from '../../ui/Boton/boton';

const ConsorciosMenu = () => {
    return ( 
        <>
            <div className={style.menu}>
                <h1 className={style.title}>
                    Consorcios
                </h1>
                <div className={style.botonera}>
                    <Boton 
                        href="/administrador/consorcios/consorcio"
                        texto="Consorcio 1"
                    />
                    <Boton 
                        href="/administrador/consorcios/consorcio"
                        texto="Consorcio 2"
                    />
                    <Boton 
                        href="/administrador/consorcios/consorcio"
                        texto="Consorcio 3"
                    />
                </div>
                <div className={style.botonVolver}>
                    <Boton 
                        href="/administrador"
                        texto="Volver"
                    />
                </div>
            </div>
        </>
     );
}
 
export default ConsorciosMenu;