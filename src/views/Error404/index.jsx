import styles from './ERROR404.module.css';
import {useRouteError} from 'react-router-dom';


const Error404 = ()=>{
    const error = useRouteError();

    return(
        <div className={styles.container}>
            <h1 className={styles.title}> {error.status } Opssss!  </h1>
            <p className={styles.description}>Regresa a la pagina anterior</p>
            <p className={styles.description}>{error.data}</p>
            <img className={styles.img-error} src="/images/6.png" alt="Error 404"/> 
        </div>
    )
};

export default Error404;
