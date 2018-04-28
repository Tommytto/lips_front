import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ExampleComponent = ({ prop1, prop2 }) => (
  <div className="example-component">
    <p className="example-component__text">It is simple component</p>
    <p>Prop list:</p>
    <ul>
      <li>prop1: {prop1}</li>
      <li>prop2: {prop2}</li>
    </ul>
  </div>
);

ExampleComponent.propTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.string.isRequired,
};

ExampleComponent.defaultProps = {
  prop1: 'Component default props',
};

export { ExampleComponent };
