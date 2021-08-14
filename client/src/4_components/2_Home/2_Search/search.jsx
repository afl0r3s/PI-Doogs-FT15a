import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
 import { useDispatch } from 'react-redux'
 import { getBreedsName } from '../../../1_actions';

export default function Search() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [breedName, setBreedName] = useState('');
    
    const handleChange = (e) => {
        setBreedName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(breedName){
            let aux2=breedName.length
            if(aux2<3){
                alert('Breed minimum length musy be of 3 characters !')
            }else{
                dispatch(getBreedsName(breedName));
                history.push(`./home`);
                setBreedName('');
            }
        }
        else{  
            alert('Enter a Breed name to search ..');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="search" 
                placeholder="write here the dog breed for search"
                className="imputSearch"
                value={breedName}
                onChange={(e) => handleChange(e)}
            ></input>
            <button
                type="submit"
                className="buttonSearch"
            > Search </button>
        </form>
    )
}
