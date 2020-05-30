import React from 'react'
import style from './style.scss';
import Boton from '../ui/Boton/boton';

const SignIn = () => {
    return ( 
        <>
        <div className={style.signContainer}>
            <h1 className={style.title}>
                Crear Cuenta
            </h1>
            <form 
                className={style.signForm}
            >
                <div className={style.input}>
                    <label>Nombre</label>
                    <input
                        type="text"
                    />
                </div>
                <div className={style.input}>
                    <label>Apellido</label>
                    <input
                        type="text"
                    />
                </div>
                <div className={style.input}>
                    <label>Dni</label>
                    <input
                        type="number"
                    />
                </div>
                <div className={style.input}>
                    <label>Email</label>
                    <input
                        type="email"
                    />
                </div>
                <div className={style.input}>
                    <label>Consorcio</label>
                    <input
                        type="texto"
                    />
                </div>
                <div className={style.input}>
                    <label>Piso y Dpto</label>
                    <input
                        type="texto"
                    />
                </div>
                <div className={style.botonForm}>
                <Boton 
                    href="/iniciarsesion"
                    texto="Crear Cuenta"
                />
                </div>
            </form>
            <div className={style.botonera}>
                <Boton
                    href="/"
                    texto="Volver"
                />
            </div>
        </div>
            
        </>
     );
}
 
export default SignIn;