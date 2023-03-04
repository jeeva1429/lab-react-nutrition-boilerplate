import React, { useState } from 'react';
import '../FoodBox/Foodbox.css'

function Foodbox(props) {
  const [searchItem, setSearchItem] = useState('');
  const [quantities, setQuantities] = useState({});

  const handleChange = (e) => setSearchItem(e.target.value);
  const filteredData = props.data.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  const handleItems = (item) => {
    const newQuantities = { ...quantities };
    newQuantities[item.id] = (newQuantities[item.id] || 0) + 1;
    setQuantities(newQuantities);
  }

  const resetItems = (item) => {
    const newQuantities = { ...quantities };
    delete newQuantities[item.id];
    setQuantities(newQuantities);
  }

  const handleNumberControl = (item, e) => {
    const newQuantities = { ...quantities };
    const value = parseInt(e.target.value);
    newQuantities[item.id] = value ? value : 0;
    setQuantities(newQuantities);
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Search...'
        value={searchItem}
        onChange={handleChange}
      ></input>
      {filteredData.map((item) => (
        <div key={item.id} className='box'>
          <article className='media'>
            <div className='media-left'>
              <figure className='image is-64x64'>
                <img src={item.img} alt={item.name} />
              </figure>
            </div>
            <div className='media-content'>
              <div className='content'>
                <p>
                  <strong>{item.name}</strong> <br />
                  <small>{item.cal} cal</small>
                </p>
              </div>
            </div>
            <div className='media-right'>
              <div className='field has-addons'>
                <div className='control'>
                  <input
                    className='input'
                    type='number'
                    placeholder='enter number you want'
                    value={quantities[item.id] || ''}
                    onChange={(e) => handleNumberControl(item, e)}
                  />
                </div>
                <div className='control'>
                  <button className='button is-info' onClick={() => handleItems(item)}>+</button>
                </div>
              </div>
            </div>
          </article>
          <div className='calculate calories'>
            {quantities[item.id] || 0} {item.name} = {(quantities[item.id] || 0) * item.cal} calories{' '}
            <button onClick={() => resetItems(item)}>reset</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Foodbox;
