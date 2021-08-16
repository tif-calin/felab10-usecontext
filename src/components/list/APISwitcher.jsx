import React from 'react';
import APIs from '../../data/characterAPIs.json';

const APISwitcher = () => {
  return <>
    <select 
      className="APISwitcher" 
      role="radiogroup" 
      onSubmit={e => e.preventDefault()}
    >
      {Object.keys(APIs).map(key => <option key={key} value={key}>
        {APIs[key].name}
      </option>)}
    </select>
  </>;
};

export default APISwitcher;
