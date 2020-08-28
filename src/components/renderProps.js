import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const Modal = ({ children, trigger }) => {
  const [active, setActive] = React.useState(false);

  const activate = () => {
    setActive(true);
  };
  
  const deactivate = () => {
    setActive(false);
  };
  
  return (
    <>
      {trigger(activate)}

      {active && <div className="modal">{children(deactivate)}</div>}
    </>
  );
};

export default function App() {
  return (
    <div className="app">
      <h1>My app</h1>
      
      
      <Modal
        trigger={activate => <button onClick={activate}>Open modal</button>}
      >
        {(deactivate) =>
          <>
            Hello!
            
            <button onClick={() => {deactivate();}}>Close</button>
          </>
        }
      </Modal>
    </div>
  );
}


// ReactDOM.createPortal(domElement, reactElement)

/*
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
*/
