import { ReactNode, FC } from 'react';

import Header from 'components/Header';

import styled from 'styled-components';

const MyLayout = styled.div`
  background-color: #444444;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;

interface LayoutProps {
  children: ReactNode
};

const Layout = ({ children }: LayoutProps)  => {
  return (
    <MyLayout>
      <Header />
      <main>
        {children}
      </main>
    </MyLayout>
  );
}

export default Layout;
