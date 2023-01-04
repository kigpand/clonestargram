import Menu from '../Menu/Menu';
import styles from './Layout.module.scss';

const Layout = ({component }: any) => {
    return (
        <div className={styles.layout}>
            <Menu />
            {component}
        </div>
    )
}

export default Layout;