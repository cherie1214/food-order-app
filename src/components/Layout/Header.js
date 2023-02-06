import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'


const Header = () => {
    return (
        <Fragment>
            <header>
                <h1>Food Order App</h1>
                <button>장바구니</button>
            </header>
            <div>
                <img src={mealsImage} />
            </div>
        </Fragment>
    );
};

export default Header;