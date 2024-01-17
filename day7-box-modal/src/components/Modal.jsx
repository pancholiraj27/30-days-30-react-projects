import React, { useState } from "react";
import ShowModal from "./ShowModal";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="modalContainer">
      <h1>Hi, I am a modal click the button to open</h1>
      <button onClick={() => setShowModal(true)}>Click Me...</button>
      {showModal ? <ShowModal setShowModal={setShowModal} /> : null}
    </div>
  );
};

export default Modal;
