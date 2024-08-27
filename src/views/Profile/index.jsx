import { Outlet } from 'react-router-dom';
import styles from './index';


const Profile = ()=>{
    return(
        <div className={styles.principalContainer}>
            Profile

            <Outlet/>
        </div>

    )
};

export default Profile;