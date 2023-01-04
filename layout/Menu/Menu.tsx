import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.logo}>로고</div>
            <ul className={styles.menuList}>
                <li className={styles.menuItem}>홈</li>
                <li className={styles.menuItem}>검색</li>
                <li className={styles.menuItem}>메세지</li>
                <li className={styles.menuItem}>프로필</li>
            </ul>
            <div className={styles.moreBtn}>더 보기</div>
        </div>
    )
}

export default Menu;