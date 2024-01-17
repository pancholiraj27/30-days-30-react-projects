import React from "react";

const ShowModal = ({ setShowModal }) => {
  return (
    <div className="showModalContainer">
      <h1>Modal Opend</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus
        eligendi in rem necessitatibus autem blanditiis neque facere quibusdam,
        cumque ab quia officia quis voluptas dolore facilis placeat cum non.
      </p>
      <button onClick={() => setShowModal(false)}>Close Modal</button>
    </div>
  );
};

export default ShowModal;
