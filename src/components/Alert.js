// Alert.js
import React from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
  if (!props.alert) {
    return null; // If no alert is provided, render nothing
  }
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{props.alert}</strong>
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.string,
};
