// Header.jsx

import React, { useContext } from 'react';
import { DataContext } from './ContextData';

function Header() {
  const { Data } = useContext(DataContext);

  if (!Data || Data.length === 0) return null;

  return (
    <section className='text-center bg-body-tertiary mt-3 border border-black'>
      <img src={Data[0].image} alt="img" className='img-fluid' />
    </section>
  );
}

export default Header;
