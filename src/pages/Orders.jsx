import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../service/Firebase";
import BtnPrimary from "../components/BtnPrimary";
import "../css/Orders.css";
import BasicModal from "../components/Modal.tsx";

const OrderForm = () => {
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "", address: "" });
  const { cart, cartTotal } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
    setBuyer({ name: "", phone: "", email: "", address: "" });
};

  const sendOrder = (e) => {
    e.preventDefault();

    const order = {
      buyer,
      itens: cart.map(item => {
        if (item.size === undefined) {
          const { size, ...rest } = item;
          return rest;
        }
        return item;
      }),
      total: cartTotal(),
    };

    try {
      const ordersCollection = collection(db, 'orders');
      addDoc(ordersCollection, order).then((doc) => {
        setOrderId(doc.id);
        setModalOpen(true);
      });
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
      <form className='order__form'>
        <h2>Informações do Comprador</h2>

        <input
          type="text"
          placeholder="Nome"
          value={buyer.name}
          onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={buyer.phone}
          onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={buyer.email}
          onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Endereço"
          value={buyer.address}
          onChange={(e) => setBuyer({ ...buyer, address: e.target.value })}
          required
        />
        <BtnPrimary onClick={sendOrder} text={'Finalizar compra'} />
      </form>

      <BasicModal open={modalOpen} onClose={closeModal} orderId={orderId} />

    </div>
  );
};

export default OrderForm;
