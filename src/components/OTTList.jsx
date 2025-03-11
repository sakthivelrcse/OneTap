import { useState } from "react";
import "./OTTList.css"; // Importing the CSS file

const OTTList = () => {
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: "Netflix", price: "₹499", logo: "/images/netflix.webp", link: "https://www.netflix.com" },
    { id: 2, name: "Amazon Prime", price: "₹299", logo: "/images/amazon.webp", link: "https://www.primevideo.com" },
    { id: 3, name: "Disney+", price: "₹199", logo: "/images/JioHotstar.webp", link: "https://www.hotstar.com" },
    { id: 4, name: "Zerodha", price: "", logo: "/images/zerodha.webp", link: "https://zerodha.com" },
    { id: 5, name: "Groww", price: "", logo: "/images/groww.webp", link: "https://groww.in" },
    { id: 6, name: "Saveetha Engineering College", price: "", logo: "/images/saveetha.png", link: "https://www.saveetha.ac.in" },
  ]);

  // State for form inputs
  const [newSub, setNewSub] = useState({ id: null, name: "", price: "", logo: "", link: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setNewSub({ ...newSub, [e.target.name]: e.target.value });
  };

  // Handle Image Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewSub((prev) => ({ ...prev, logo: imageUrl }));
    }
  };

  // Add or Update subscription
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newSub.name || !newSub.logo || !newSub.link) {
      alert("Please fill all required fields!");
      return;
    }

    if (editingIndex !== null) {
      // Update the existing subscription
      const updatedSubscriptions = subscriptions.map((sub) =>
        sub.id === newSub.id ? { ...newSub } : sub
      );
      setSubscriptions(updatedSubscriptions);
      setEditingIndex(null);
    } else {
      // Add a new subscription with a unique ID
      setSubscriptions([...subscriptions, { ...newSub, id: Date.now() }]);
    }

    // Reset input fields
    setNewSub({ id: null, name: "", price: "", logo: "", link: "" });
  };

  // Delete subscription
  const deleteSubscription = (id) => {
    setSubscriptions(subscriptions.filter((sub) => sub.id !== id));
    if (editingIndex !== null && newSub.id === id) {
      setEditingIndex(null);
      setNewSub({ id: null, name: "", price: "", logo: "", link: "" });
    }
  };

  // Edit subscription
  const editSubscription = (id) => {
    const subToEdit = subscriptions.find((sub) => sub.id === id);
    setNewSub(subToEdit);
    setEditingIndex(id);
  };

  return (
    <div className="ott-container">
      <h2 className="ott-title">Your Subscriptions & Accounts</h2>

      {/* Subscription List */}
      <ul className="ott-list">
        {subscriptions.map((sub) => (
          <li key={sub.id} className="ott-item">
            <a href={sub.link} target="_blank" rel="noopener noreferrer" className="ott-link">
              <img src={sub.logo} alt={sub.name} className="ott-logo" />
              <div>{sub.name} {sub.price ? `- ${sub.price}` : ""}</div>
            </a>
            <div className="ott-actions">
              <button className="edit-btn" onClick={() => editSubscription(sub.id)}>✏️ Edit</button>
              <button className="delete-btn" onClick={() => deleteSubscription(sub.id)}>❌ Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Add/Edit Subscription Form */}
      <form onSubmit={handleSubmit} className="ott-form">
        <input type="text" name="name" placeholder="Subscription Name" value={newSub.name} onChange={handleChange} required />
        <input type="text" name="price" placeholder="Price (Optional)" value={newSub.price} onChange={handleChange} />
        
        {/* File Input for Logo */}
        <input type="file" accept="image/*" onChange={handleFileChange} />
        
        {/* Image Preview */}
        {newSub.logo && <img src={newSub.logo} alt="Preview" className="image-preview" />}
        
        <input type="text" name="link" placeholder="Website Link" value={newSub.link} onChange={handleChange} required />
        <button type="submit">{editingIndex !== null ? "Update" : "Add"} Subscription</button>
      </form>
    </div>
  );
};

export default OTTList;
