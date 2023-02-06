import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'


const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food Order App</h1>
                <button>장바구니</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="테이블에 맛있는 음식이 가득!" />
            </div>
        </Fragment>
    );
};

export default Header;