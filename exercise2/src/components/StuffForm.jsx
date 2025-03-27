import React from 'react';

export default function StuffForm({ onAddStuff }) {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert price to number and send data to parent
    const priceNumber = parseFloat(price);
    onAddStuff({ name, price: priceNumber });
    // Reset form
    setName("");
    setPrice("");
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input 
        type="text" 
        placeholder="Banana" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Stuff price</p>
      <input 
        type="number" 
        placeholder="15" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add Stuff</button>
    </form>
  );
}
