import React, { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => item !== itemToRemove);
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  return (
    <>
      <h1>Project 1: Shopping List</h1>
      <div className="container">
        <h2>Items To Buy</h2>
        <form onSubmit={onSubmit}>
          <input type="text" name="item" required placeholder="Add a new Item" />
          <button type="submit">Add</button>
        </form>
        <ol>
          {items.map((item, index) => (
            <Item key={index} onRemoveItem={onRemoveItem} item={item} />
          ))}
        </ol>
      </div>
    </>
  );
}

function Item({ item, onRemoveItem }) {
  return (
    <li>
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>
        X
      </button>
    </li>
  );
}
