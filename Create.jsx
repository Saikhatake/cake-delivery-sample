// import React, { useState } from "react";
// import axios from "axios";

// const Create = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     flavor: "",
//     price: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("https://677cef244496848554c8417a.mockapi.io/yes/cake", formData);
//       alert("Order created successfully!");
//       setFormData({ name: "", flavor: "", price: "" }); // Clear the form
//     } catch (error) {
//       alert("Error creating order. Please try again.");
//     }
//   };

//   return (
//     <div className="create-container">
//       <h2>Create a Cake Order</h2>
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
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// export default Create;
import React, { useState } from "react";
import axios from "axios";

const Create = ({ onOrderCreated }) => {
  const [formData, setFormData] = useState({
    name: "",
    flavor: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://677cef244496848554c8417a.mockapi.io/yes/cake",
        formData
      );
      alert("Order created successfully!");
      onOrderCreated(response.data); // Add the new order to the list
      setFormData({ name: "", flavor: "", price: "" }); // Clear form
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Failed to create order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-container">
      <h2>Create a Cake Order</h2>
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
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default Create;
