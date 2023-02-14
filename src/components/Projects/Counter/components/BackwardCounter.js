import Card from './Card';
import React from 'react';
import useCounter from '../hooks/use-counter';

const BackwardCounter = () => {

    const counter = useCounter(false);

    return (
        <Card>
            {counter}
        </Card>
    );
};

export default BackwardCounter;