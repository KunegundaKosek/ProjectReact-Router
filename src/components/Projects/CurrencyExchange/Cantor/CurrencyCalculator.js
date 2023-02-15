import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './CurrencyCalculator.module.css';

const CurrenctCalculator = () => {

    const [value, setValue] = useState('');
    const [result, setResult] = useState();
    const [currency, setCurrency] = useState("EUR");
    const [curriencies, setCurrencies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = "http://api.nbp.pl/api/exchangerates/tables/B/?format=json";
            const response = await fetch(url);
            const json = await response.json();
            setCurrencies(json[0].rates);
        };
        fetchData();

    }, []);

    return (

        <Card className={classes.cantor}>
            <div className={classes['currency__box']}>
                <label>PLN</label>
                <input type="number" />
            </div>

            <div className={classes['currency__box']}>
                <label>Waluta</label>
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {curriencies.map((c) => (
                        <option key={c.code}>
                            {c.code} - {c.currency}
                        </option>
                    ))}

                </select>
            </div>

            <div className={classes['cantor__results']}>

            </div>

        </Card>
    );
};

export default CurrenctCalculator;