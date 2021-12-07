import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getItems } from "../Redux/Item/actions";

const Items = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { isLoading, data, error } = state.items;
  const [newItem, setNewItem] = useState('');

  useEffect(() => dispatch(getItems()), [dispatch]);

  const hundleClick = (e) => {
      e.preventDefault()
      dispatch(addItem({
          id:Math.random*10,
          title: newItem
      }))
      setNewItem('')
  }

  return (
    <>
      <div style={{ margin: " 50px 0" }}>
        <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem} />
        <button onClick={hundleClick}>Add Item</button>
      </div>
      <div>
        {error ? (
          <div>{error}</div>
        ) : isLoading ? (
          <span>Loading...</span>
        ) : (
          <div>
            {data.map((e, i) => {
              return <div key={i}>{e.title}</div>;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Items;
