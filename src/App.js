import React, { useState } from 'react'
import SingleColor from './SingleColor'

import styled from "styled-components";
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello');
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    
  }

  return (
    <>
    <Title className="container">
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={color} 
      onChange={(e) => setColor(e.target.value)}
      placeholder="#f15025"
      className={`${error?'error':null}`}
      ></input>
      <Button type="submit">
        submit
      </Button>
    </form>
    </Title>
    <Colors className="colors">
      {list.map((color, index) => {
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex}></SingleColor>
      })}
    </Colors>
    </>
  )
}

export default App

const Title = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  height: 100px;
  padding-left: 2rem;
  h3 {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const Button = styled.button`
  background: var(--clr-primary-5);
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-color: transparent;
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  text-transform: capitalize;
  color: var(--clr-white);
  cursor: pointer;
`;

const Colors = styled.section`
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
`;