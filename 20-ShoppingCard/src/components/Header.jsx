import CartProvider from "../context/CartProvider";
import Modal from "./UI Components/Modal";
import Cart from "./Cart";
import { useEffect, useState } from "react";
const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCartToggle = () => {
    setModalOpen((prev) => !prev);
  };
  useEffect(() => {
    if (modalOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [modalOpen]);

  return (
    <header>
      <nav>
        <h1>Shopping App</h1>
        <button onClick={handleCartToggle}>Cart</button>
      </nav>
      {modalOpen && (
        <Modal closeModal={handleCartToggle}>
          <Cart />
        </Modal>
      )}
    </header>
  );
};

export default Header;
