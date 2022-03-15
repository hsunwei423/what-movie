import { useState } from 'react';
import Images from 'next/image';
import styled from 'styled-components';

import Avatar from 'components/Avatar';

import { HEADER_ROUTE } from 'consts/header'

const Container = styled.header`
  height: 58px;

  display: flex;
  align-items: center;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
  color: #1B1E25AD;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  row-gap: 12px;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const NavItem = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #fff;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <Images
            src="/images/logo.svg"
            // layout="fixed"
            alt="logo"
            height={32}
            width={102}
          />
        </LeftWrapper>
        <RightWrapper>
          <NavWrapper>
            {
              HEADER_ROUTE.map(nav =>{
                return (
                  <NavItem key={nav}>
                    { nav }
                  </NavItem>
                )
              })
            }
            <Avatar />
          </NavWrapper>
        </RightWrapper>
      </Wrapper>
    </Container>
  )
};

export default Header;
