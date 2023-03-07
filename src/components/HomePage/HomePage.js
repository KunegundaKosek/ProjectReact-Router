import React from 'react';
import { Link } from 'react-router-dom';
import classes from './HomePage.module.css';
import project1 from '../../img/project1.gif';
import project2 from '../../img/project2.gif';
import project3 from '../../img/project3.gif';


const HomePage = () => {
    return (

        <div className={classes.home} >

            <div className={classes['home-item__container']}>


                <Link to='/expenses'>
                    <img className={classes['home-item__img']} src={project1} alt="aplikacja wydatki" />
                </Link>

            </div>


            <div className={classes['home-item__container']}>

                <Link to='/todo'>
                    <img className={classes['home-item__img']} src={project2} alt="miś" />
                </Link>

            </div>

            <div className={classes['home-item__container']}>

                <Link to='/counter'>
                    <img className={classes['home-item__img']} src={project3} alt="miś" />
                </Link>

            </div>

            <div className={classes['home-item__container']}>

                <Link to='/cantor'>
                    <img className={classes['home-item__img']} src="https://i.wpimg.pl/1200x/filerepo.grupawp.pl/api/v1/display/embed/4dd0546d-9af0-4fde-8eb4-fb988a664cad" alt="miś" />
                </Link>

            </div>

            <div className={classes['home-item__container']}>

                <img className={classes['home-item__img']} src="./img/bear.jpg" alt="miś" />

            </div>


        </div>
    );
};

export default HomePage;