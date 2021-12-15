import LOGO from '../assets/images/logo.svg'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaTimes, FaBars, FaRegMoon, FaRegSun } from 'react-icons/fa'
import { Container } from './Container'

const Nav = styled.nav`
    background: ${props => props.theme.primary1};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 1100;
    .brand{
        color:${props => props.theme.secondary};
        text-decoration:none;
        font-size:26px;
    }
`
const MenuIcon = styled.div`
    display: none;
    font-size: 1.8rem;
    cursor: pointer;    
    color:${props => props.theme.secondary};
    @media screen and (max-width: 960px) {
        display: block;
    }
`
const NavMenu = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
    @media screen and (max-width: 960px) {
        background-color: ${props => props.theme.primary};
        border:1px solid ${props => props.theme.gray};
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 1;
        transition: left 300ms ease-out;
        &.active {
            left: 0;
            opacity: 1;
            z-index: 1100;
            transition: left 300ms ease-out;
        }
    }
`
const NavItem = styled.li`
    height: 80px;
`
const NavLink = styled(Link)`
    color: ${props => props.theme.secondary};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    border-bottom: 4px solid transparent;
    &:hover, &.active {
        border-bottom: 4px solid ${props => props.theme.secondary};
        transition: border-color 300ms ease-out;
    }
    @media screen and (max-width: 960px) {
        border-bottom: 0;
        border-left: 8px solid transparent;
        transition: border-color 300ms ease-out;
        &:hover, &.active {
            border-bottom: 0;
            transition: border-color 300ms ease-out;
            border-left: 8px solid ${props => props.theme.primary2};
        }
    }
`
const NavbarContainer = styled(Container)`
    display:flex;
    justify-content: space-between;
    align-items:center;
`
const ThemeToggleWrapper = styled.div`
    color: ${props => props.theme.secondary};
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    height: 100%;
    border-bottom: 4px solid transparent;
    @media screen and (max-width: 960px) {
        border-bottom: 0;
        border-left: 8px solid transparent;
    }
`
const ThemeToggle = styled.div`
    cursor:pointer;
    background: ${props => props.theme.primary};
    height:16px;
    width:36px;
    padding:1px;
    border:1px solid ${props => props.theme.secondary};
    border-radius:16px;
    margin:0 6px;
    position:relative;
    .dot{
        position:absolute;
        background: ${props => props.theme.secondary};
        width:12px;
        height:12px;
        border-radius:50%;
        border:1px solid ${props => props.theme.black};
        top:50%;
        transition:left 150ms ease-out;
        transform:translateY(-50%);
    }
    &.left .dot{
        left:2px;
    }
    &.right .dot{
        left:18px;
    }
`

type Props = {
    themeName: string,
    themeToggler: () => void
}

const Navbar = ({ themeName, themeToggler }: Props) => {
    const location = useLocation()
    const [openMenu, setOpenMenu] = useState(false)
    const [activeMenuItem, setActiveMenuItem] = useState("/")
    const handleHamburgerClick = () => setOpenMenu(!openMenu)
    const handleMenuItemClick = () => {
        setOpenMenu(false)
    }
    useEffect(() => {
        setActiveMenuItem(location.pathname)
    }, [location.pathname])
    return (
        <>            
            <Nav>
                <NavbarContainer>
                    <Link to='/' onClick={() => handleMenuItemClick()} className='brand'>&lt;Des&nbsp;/&gt;</Link>
                    <MenuIcon onClick={handleHamburgerClick}>
                        {openMenu ? <FaTimes /> : <FaBars />}
                    </MenuIcon>
                    <NavMenu className={openMenu ? 'active' : ''}>
                        <NavItem>
                            <NavLink to='/o-meni' className={`${activeMenuItem === '/o-meni' && 'active'}`} onClick={() => handleMenuItemClick()}>
                                O meni
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/usluge' className={`${activeMenuItem === '/usluge' && 'active'}`} onClick={() => handleMenuItemClick()}>
                                Usluge
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/kontakt' className={`${activeMenuItem === '/kontakt' && 'active'}`} onClick={() => handleMenuItemClick()}>
                                Kontakt
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <ThemeToggleWrapper>
                                <FaRegMoon size='.7em' /> 
                                <ThemeToggle className={themeName === 'light' ? 'right' : 'left'} onClick={() => themeToggler()}>
                                    <div className='dot'></div>
                                </ThemeToggle>
                                <FaRegSun size='.8em' /> 
                            </ThemeToggleWrapper>                            
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
