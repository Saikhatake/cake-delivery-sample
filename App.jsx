import React, { useState, useEffect } from "react";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import axios from "axios";
import "./index.css";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://677cef244496848554c8417a.mockapi.io/yes/cake"
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const handleCreate = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://677cef244496848554c8417a.mockapi.io/yes/cake/${id}`
      );
      setOrders(orders.filter((order) => order.id !== id));
      alert("Order deleted successfully!");
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Failed to delete order. Please try again.");
    }
  };

  const handleEdit = (order) => {
    setCurrentOrder(order);
    setIsEditing(true);
  };

  const handleUpdate = async (updatedOrder) => {
    try {
      const response = await axios.put(
        `https://677cef244496848554c8417a.mockapi.io/yes/cake/${updatedOrder.id}`,
        updatedOrder
      );
      setOrders(
        orders.map((order) =>
          order.id === updatedOrder.id ? response.data : order
        )
      );
      setIsEditing(false);
      alert("Order updated successfully!");
    } catch (error) {
      console.error("Error updating order:", error);
      alert("Failed to update order. Please try again.");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="app-container">
      <h1>Cake Ordering Website</h1>
      {isEditing ? (
        <Update
          currentOrder={currentOrder}
          onUpdate={handleUpdate}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <Create onOrderCreated={handleCreate} />
          <Read orders={orders} onDelete={handleDelete} onEdit={handleEdit} />
        </>
      )}
    </div>
  );
};

export default App;
