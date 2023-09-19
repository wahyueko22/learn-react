import React from 'react';
import { Outlet } from 'react-router-dom';
// import styled from 'styled-components';

// const StyledPage = styled(Page)`
//   min-height: 100vh;
//   display: flex;
// `;

const BeforeLoginLayout = () => {
  return (
    <div>
      <header>Header</header>
      <nav>Navigation</nav>
      <main>
        <Outlet /> {/* Render child routes */}
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default BeforeLoginLayout ;
