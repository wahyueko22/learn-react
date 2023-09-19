import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import LogoutComponent from './LogoutComponent';


// Styled components
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  background-color: #f0f0f0;
  padding: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
`;

const LeftMenu = styled.div`
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

// Layout component
const AfterLoginLayout = () => {
  return (
    <LayoutContainer>
      <Header>
        {/* Contents of the header */}
        <h1>My App</h1>
      </Header>
      <ContentContainer>
        <LeftMenu>
          {/* Contents of the left menu */}
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>  <LogoutComponent></LogoutComponent> </li>
          </ul>
        </LeftMenu>
        <Content>
          {/* Contents of the content area */}
          <Outlet /> {/* Render child routes */}
        </Content>
      </ContentContainer>
    </LayoutContainer>
  );
};

export default AfterLoginLayout;