import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

function Admin() {
  const [orders, setOrders] = useState([]);
const totalOrders = orders.length;

const totalSales = orders.reduce(
  (sum, order) => sum + (order.total || 0),
  0
);
const updateStatus = async (id, currentStatus) => {
  let newStatus = currentStatus;

  if (currentStatus === "Pending") {
    newStatus = "Shipped";
  } else if (currentStatus === "Shipped") {
    newStatus = "Delivered";
  } else {
    return;
  }
const deleteOrder = async (id) => {
  const confirmDelete = window.confirm(
    "Delete this order?"
  );

  if (!confirmDelete) return;

  await deleteDoc(doc(db, "orders", id));

  setOrders(
    orders.filter((order) => order.id !== id)
  );
};
  await updateDoc(doc(db, "orders", id), {
    status: newStatus,
  });

  setOrders(
    orders.map((order) =>
      order.id === id
        ? { ...order, status: newStatus }
        : order
    )
  );
};
  useEffect(() => {
    const fetchOrders = async () => {
      const querySnapshot = await getDocs(
        collection(db, "orders")
      );

      const orderList = [];

      querySnapshot.forEach((doc) => {
        orderList.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setOrders(orderList);
    };

    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>

<div
  style={{
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
  }}
>
  <div
    style={{
      background: "#0f172a",
      color: "white",
      padding: "20px",
      borderRadius: "15px",
      minWidth: "220px",
    }}
  >
    <h3>📦 Total Orders</h3>
    <h2>{totalOrders}</h2>
  </div>

  <div
    style={{
      background: "#16a34a",
      color: "white",
      padding: "20px",
      borderRadius: "15px",
      minWidth: "220px",
    }}
  >
    <h3>💰 Total Sales</h3>
    <h2>৳ {totalSales}</h2>
  </div>
</div>

      {orders.map((order) => (
        <div
          key={order.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>{order.orderId}</h3>

          <p>Name: {order.customerName}</p>

          <p>Phone: {order.phone}</p>

          <p>Address: {order.address}</p>

          <p>
             Date:{" "}
            {order.createdAt?.seconds
             ? new Date(
             order.createdAt.seconds * 1000
              ).toLocaleString()
               : "N/A"}
            </p>

          <p>Payment: {order.payment}</p>

          <p>Status: {order.status}</p>

          <p>Total: ৳ {order.total}</p>
          <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "15px",
    flexWrap: "wrap",
  }}
>
  <button
    onClick={() =>
      updateStatus(order.id, order.status)
    }
    style={{
      padding: "10px 15px",
      border: "none",
      borderRadius: "8px",
      background: "#2563eb",
      color: "white",
      cursor: "pointer",
    }}
  >
    Update Status
  </button>

  <button
    onClick={() => deleteOrder(order.id)}
    style={{
      padding: "10px 15px",
      border: "none",
      borderRadius: "8px",
      background: "#dc2626",
      color: "white",
      cursor: "pointer",
    }}
  >
    Delete Order
  </button>
</div>
        </div>
      ))}
    </div>
  );
}

export default Admin;