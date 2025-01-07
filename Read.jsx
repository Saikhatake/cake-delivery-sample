// import React from "react";

// const Read = ({ orders, onDelete, onEdit }) => {
//   return (
//     <div className="read-container">
//       <h2>All Cake Orders</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Flavor</th>
//             <th>Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order, index) => (
//             <tr key={index}>
//               <td>{order.name}</td>
//               <td>{order.flavor}</td>
//               <td>${order.price}</td>
//               <td>
//                 <button onClick={() => onEdit(index)}>Edit</button>
//                 <button onClick={() => onDelete(index)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Read;
import React from "react";

const Read = ({ orders, onDelete, onEdit }) => {
  return (
    <div className="read-container">
      <h2>All Cake Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Flavor</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.name}</td>
              <td>{order.flavor}</td>
              <td>${order.price}</td>
              <td>
                <button onClick={() => onEdit(order)}>Edit</button>
                <button onClick={() => onDelete(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
