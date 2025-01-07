// import React, { useState } from "react";

// const Update = ({ currentOrder, onUpdate, onCancel }) => {
//   const [formData, setFormData] = useState(currentOrder);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdate(formData);
//   };

//   return (
//     <div className="update-container">
//       <h2>Update Cake Order</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Cake Name"
//           required
//         />
//         <input
//           type="text"
//           name="flavor"
//           value={formData.flavor}
//           onChange={handleChange}
//           placeholder="Cake Flavor"
//           required
//         />
//         <input
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           placeholder="Cake Price"
//           required
//         />
//         <button type="submit">Update</button>
//         <button type="button" onClick={onCancel}>
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Update;
import React, { useState } from "react";

const Update = ({ currentOrder, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState(currentOrder);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="update-container">
      <h2>Update Cake Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Cake Name"
          required
        />
        <input
          type="text"
          name="flavor"
          value={formData.flavor}
          onChange={handleChange}
          placeholder="Cake Flavor"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Cake Price"
          required
        />
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Update;
