import React from 'react';
/* import PropTypes from 'prop-types'; */
import { useLocation } from 'react-router-dom';
import Header from '../header/Header';
import { useCharacters } from '../../state/listsOfThings.js';
import APISwitcher from './APISwitcher';

const List = () => {

  const api = new URLSearchParams(useLocation().search).get('api');
  const state = useCharacters(api); 
  const { loading, characters, API, page, setPage, setAPI } = state;

  return <>
    <Header/>
    <APISwitcher setAPI={setAPI}/>
    <hr/>
    <h3>{API.name}</h3>
    {loading
      ? <div>Loading...</div>
      : <>
        <form>
          <button 
            onClick={() => setPage(Math.max(page - 1, 1))}
          >&#x2190;</button>
          <span>{page}</span>
          <button 
            onClick={() => setPage(Math.min(page + 1, ~~(API.count / 20)))}
          >&#x2192;</button>
        </form>

        <ul className="List">
          {characters.map(character => <li key={character[API.id]}>
            <img src={character[API.image]} alt={character[API.title]}/>
            <span>{Array.isArray(API.title) 
              ? API.title.reduce((acc, val) => acc[val], character)
              : character[API.title]
            }</span>
          </li>)}
        </ul>
      </>
    }
  </>;
};

List.propTypes = {};

export default List;
