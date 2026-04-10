import { useRef } from 'react';

 function MyModal() {
  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <dialog ref={dialogRef} className="modal-styling">
        <h2>Modal Title</h2>
        <p>This is a native dialog modal.</p>
        <button onClick={closeModal}>Close</button>
      </dialog>
    </>
  );
}

export default MyModal;