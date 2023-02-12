import React from 'react';
import { Link } from 'react-router-dom';
import classes from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={classes.home} >

            <div className={classes['home-item__container']}>

                <Link to='/expenses'>
                    <img className={classes['home-item__img']} src="https://github.com/KunegundaKosek/image/blob/main/project1.gif?raw=true" alt="miś" />
                </Link>

            </div>


            <div className={classes['home-item__container']}>

                <img className={classes['home-item__img']} src="https://i.wpimg.pl/1200x/filerepo.grupawp.pl/api/v1/display/embed/4dd0546d-9af0-4fde-8eb4-fb988a664cad" alt="miś" />

            </div>

            <div className={classes['home-item__container']}>

                <img className={classes['home-item__img']} src="https://i.wpimg.pl/1200x/filerepo.grupawp.pl/api/v1/display/embed/4dd0546d-9af0-4fde-8eb4-fb988a664cad" alt="miś" />

            </div>

            <div className={classes['home-item__container']}>

                <img className={classes['home-item__img']} src="https://i.wpimg.pl/1200x/filerepo.grupawp.pl/api/v1/display/embed/4dd0546d-9af0-4fde-8eb4-fb988a664cad" alt="miś" />

            </div>

            <div className={classes['home-item__container']}>

                <img className={classes['home-item__img']} src="https://i.wpimg.pl/1200x/filerepo.grupawp.pl/api/v1/display/embed/4dd0546d-9af0-4fde-8eb4-fb988a664cad" alt="miś" />

            </div>


        </div>
    );
};

export default HomePage;