import React from 'react';

function AddPizzaForm({ onSubmit, size, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="number" value={size} onChange={onChange} />
      <button>Add Pizza</button>
    </form>
  )
}

export default AddPizzaForm;
