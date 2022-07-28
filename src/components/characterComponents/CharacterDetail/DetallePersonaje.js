import React, { useEffect, useState } from 'react';
import './DetallePersonaje.css';
import Loading from '../../commons/Loading';
import { Button } from '@mui/material';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onFetchOneCharacter } from '../../../redux/actions';
import PersonajesUI from '../CharacterCard/PersonajesUI';

const DetallePersonaje = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const character = useSelector((state) => state.charactersData.character);
  const charactersData = useSelector((state) => state);

  console.log('ACA ESTA EL PERSONAJE: ', charactersData);
  const { userID } = useParams();

  useEffect(() => {
    dispatch(onFetchOneCharacter(userID));
    return () => {
      onFetchOneCharacter('');
    };
  }, [dispatch, userID]);

  useEffect(() => {
    if (character && character.length > 0) {
      setIsLoading(false);
    }
  }, [character]);

  return (
    <div>
      <Outlet />
      {isLoading ? (
        <Loading />
      ) : (
        <div className='Personaje-detail'>
          {character.map((char) => {
            return (
              <div key={char.char_id}>
                <PersonajesUI data={char} />
                <Button component={Link} to='mas-detalles' variant='contained'>
                  Más detalles anidados
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DetallePersonaje;
