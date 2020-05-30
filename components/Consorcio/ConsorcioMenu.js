import React from 'react'
import style from './style.scss';

import Boton from '../ui/Boton/boton';

const ConsorcioMenu = () => {
    return ( 
        <>
            <div className={style.menu}>
                <h1 className={style.title}>
                    Consorcio
                </h1>
                <div className={style.form}>
                    <div className={style.table}>
                        <h1>Apellido/Nombre</h1>
                        <h1>Piso/Dpto</h1>
                    </div>
                </div>
                <div className={style.botonVolver}>
                    <Boton
                        href="/inquilino"
                        texto="Volver"
                    />
                </div> 
            </div>
        </>
     );
}
 
export default ConsorcioMenu;