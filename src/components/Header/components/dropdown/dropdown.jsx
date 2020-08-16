import React, { useState, useEffect, useRef, useDebugValue } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './dropdown.module.css';
import './dropdown.transitions.css';
import './indicatorWrapper.transition.css';

import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as Indicator } from './icons/indicator.svg';
import { ReactComponent as LogOut } from './icons/logout.svg';
import { ReactComponent as User } from './icons/user.svg';

console.log(styles);

function Dropdown(props) {
    return (
        <NavItem content={<span className={styles.nickname_wrapper}>
                            {props.nickname}
                            {/* <div className={styles.indicator}><Indicator /></div> */}
                          </span>}>
            <DropdownMenu />
        </NavItem>
    );
}

function NavItem(props) {
    const [open1, setOpen1] = useState(false);
    const [open, setOpen] = useState(false);
    const [rotate, setRotate] = useState(false);

    return (
        <div className={styles.nav__item}>
            <a href='#' className={styles.main__icon__button} onClick={() => { setOpen1(!open1); setOpen(!open); setRotate(!rotate); }}>
                {props.content}
                <CSSTransition classNames='indicator__wrapper' in={open === true || open === false} unmountOnExit timeout={500} rotate={`${rotate}`}>
                    <div className='indicator'><Indicator /></div>
                </CSSTransition>
            </a>

            <CSSTransition classNames='show-dropdown' in={open1 === true} unmountOnExit timeout={500}>
                <DropdownMenu />
            </CSSTransition>
        </div>
    );
}

function DropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState('main');
    // КОСТЫЛЬ!!!
    const [menuHeight, setMenuHeight] = useState(110);
    // КОСТЫЛЬ КОНЧИЛСЯ!!!
    const dropdownRef = useRef(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href='#' className={styles.menu__item} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)} onClick={props.onClick}>
                <span className={styles.icon__button}>{props.leftIcon}</span> 

                <span className={styles.menu__item__content}>{props.children}</span>

                <span className={styles.icon__right}>{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className={styles.dropdown} style={{height: menuHeight}} ref={dropdownRef}>
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames='menu-primary' onEnter={calcHeight}>
                <div className={styles.menu}>
                    <DropdownItem leftIcon={<User />} onClick={() => { window.location.href = '/profile/' + JSON.parse(window.localStorage['user']).id; }}>My Profile</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu='settings'>Settings</DropdownItem>
                    <DropdownItem leftIcon={<LogOut />} onClick={() => { window.localStorage.clear(); window.location.href = '/'; }}>Выйти</DropdownItem>
                    {/* localStorage.removeItem("user") - вот это надо как-то прикрепить к клику */}
                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
                <div className={styles.menu}>
                    <DropdownItem leftIcon={<ArrowIcon />} goToMenu='main'>Go back</DropdownItem>
                    <DropdownItem leftIcon={<ArrowIcon />} goToMenu='main'>Go back once more</DropdownItem>
                    <DropdownItem>Profile settings</DropdownItem>
                    <DropdownItem>Add something shocking</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Dropdown;
