import * as React from 'react';
import PropTypes from 'prop-types';

MainTitle.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
};

export default function MainTitle(props = {}) {

  function render() {
    const { title, color } = props;

    return (
      <div>
        <h1 style={{color: color}}>{title}</h1>
      </div>
    );
  }

  return render();
}