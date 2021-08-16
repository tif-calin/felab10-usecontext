import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import APIs from '../../data/characterAPIs.json';

const APISwitcher = props => {

  const history = useHistory();

  const handleSwitch = e => {
    e.preventDefault();

    history.push('/list?api=' + e.target.value);
    props.setApi(e.target.value);
  };

  return <>
    <select 
      className="APISwitcher" 
      role="radiogroup" 
      defaultValue={props.api}
      onChange={handleSwitch}
    >
      {Object.keys(APIs).map(key => <option key={key} value={key}>
        {APIs[key].name}
      </option>)}
    </select>
  </>;
};

APISwitcher.propTypes = {
  api: PropTypes.string,
  setApi: PropTypes.func
};

export default APISwitcher;
