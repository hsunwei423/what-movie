import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Images from 'next/image';
import styled from 'styled-components';

import Avatar from 'components/Avatar';
import Input from 'components/common/Input';

import { HEADER_ROUTE } from 'consts/header'

interface HeaderProps {
  isHitTop?: boolean
}

const Container = styled.header<HeaderProps>`
  height: 58px;
  width: 100%;

  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 5;

  box-shadow: ${props => props.isHitTop
    ? 'none'
    : '0px 2px 8px rgba(0, 0, 0, 0.48)'
  };
  color: #1B1E25AD;
  background-color: rgba(27, 30, 37, 0.68);
`;

const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;

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

interface NavItemProps {
  active: boolean
};

const NavItem = styled.a<NavItemProps>`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #fff;

  border-bottom: ${props => props.active
    ? 'linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%)'
    : 'none'
}
`;

const Header = ({ isHitTop = true }: HeaderProps) => {
  const [searchText, setSearchText] = useState<string>('');
  const router = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value || '');
  };

  const renderNavList = () => {
    return HEADER_ROUTE.map(nav =>{
      return (
        <Link href={nav.href} key={nav.key} passHref>
          <NavItem
            key={nav.key}
            active={router.asPath === nav.href}
          >
            { nav.key }
          </NavItem>
        </Link>
      )
    })
  };

  return (
    <Container isHitTop={isHitTop}>
      <Wrapper>
        <LeftWrapper>
          <Images
            src="/images/logo.svg"
            // layout="fixed"
            alt="logo"
            height={32}
            width={102}
          />
          <Input
            placeholder="搜尋劇名/演員"
            value={searchText}
            onChange={handleSearchChange}
          />
        </LeftWrapper>
        <RightWrapper>
          <NavWrapper>
            { renderNavList() }
          </NavWrapper>
          <Avatar />
        </RightWrapper>
      </Wrapper>
    </Container>
  )
};

export default Header;
