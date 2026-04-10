import { useRef } from 'react';

 function Login() {
  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  return (
    <>
      <button onClick={openModal}>Login</button>
      <dialog ref={dialogRef} className="modal-styling">
        <h2>Login</h2>
        <p>This is a native dialog modal.</p>
        <button onClick={closeModal}>Close</button>
      </dialog>
    </>
  );
}

export default Login;