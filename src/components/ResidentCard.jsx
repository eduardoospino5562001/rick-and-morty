import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const ResidentCard = ({url}) => {

    //console.log(url);
    const [ resident, getResident ] = useFetch();

    useEffect(() => {
      
    getResident(url);
      
    }, []);

    console.log(resident);
    

    return (
        <div>ResidentCard</div>
    )
}

export default ResidentCard;