import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <Footer />
        </div>
    )
}

export default Layout;