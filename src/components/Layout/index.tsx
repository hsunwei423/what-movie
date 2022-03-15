import { ReactNode } from 'react';
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
      <main>
        {children}
      </main>
    </MyLayout>
  );
}

export default Layout;
