import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Colors, Shadows, Sizes, Transitions } from '../global/styles'
import { HeaderContainer } from './base/base'
import { AccountButton } from '../components/account/AccountButton'
import mainLogo from "../assets/images/white-elephant66x50.svg"




export function TopBar() {
  return (
    <Header>
      <HeaderContainer>
        <HeaderNav>
          <ToMain href="/">
            <LogoSvg />
          </ToMain>
          <HeaderNavLinks>
            <HeaderLink activeClassName="active-page" to="/play">
              {' '}
              Play{' '}
            </HeaderLink>
            <HeaderLink activeClassName="active-page" to="/rules">
              {' '}
              Rules{' '}
            </HeaderLink>
            {/* <HeaderLink activeClassName="active-page" to="/tokens">
              {' '}
              Tokens{' '}
            </HeaderLink> */}
            {/* <HeaderLink activeClassName="active-page" to="/send">
              {' '}
              Send Ether{' '}
            </HeaderLink>
            <HeaderLink activeClassName="active-page" to="/transactions">
              {' '}
              Transactions{' '}
            </HeaderLink> */}
          </HeaderNavLinks>
        </HeaderNav>
      </HeaderContainer>
      <AccountButton />
    </Header>
  )
}



const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  width: 100%;
  height: ${Sizes.headerHeight};
  background-color: ${Colors.White};
  box-shadow: ${Shadows.main};
  z-index: 100;
`

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
`

const ToMain = styled.a`
  display: flex;
  flex-direction: column;
  width: fit-content;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  transition: ${Transitions.all};
  margin-top: 15px;
  margin-left: 40px;

`


const LogoSvg = styled.img`
`
LogoSvg.defaultProps = {
  src: mainLogo,
}

const HeaderNavLinks = styled.div`
  display: grid;
  position: absolute;
  left: 60%;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 20px;
  align-items: center;
  height: 100%;
  transform: translateX(-50%);
`

// Component based on NavLink, but with few additions.
// This is how you implement classes. 
const HeaderLink = styled(NavLink)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px 20px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: ${Transitions.all};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 20px);
    height: 2px;
    background-color: ${Colors.Salmon[100]};
    transform: scaleX(0);
    transform-origin: 50% 50%;
    transition: ${Transitions.all};
  }

  &:hover {
    color: ${Colors.Purple[400]};

    &:after {
      transform: scaleX(1);
    }
  }
  &.active-page {
    &:after {
      transform: scaleX(1);
    }
  }
`
