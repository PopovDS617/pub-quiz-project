import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  onClose: () => void;
};

const Backdrop = (props: Props) => {
  return <div id="backdrop" className="backdrop" onClick={props.onClose}></div>;
};

export default Backdrop;
