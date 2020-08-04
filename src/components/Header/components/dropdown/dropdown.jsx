import React, { useState, useEffect, useRef, useDebugValue } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './dropdown.module.css';
import './dropdown.transitions.css';

import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

console.log(styles);

function Dropdown(props) {
  return (
        <NavItem content={props.nickname}>
            <DropdownMenu />
        </NavItem>
  );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.nav__item}>
            <a href='#' className={styles.main__icon__button} onClick={() => setOpen(!open)}>
                {props.content}
            </a>

            {open && props.children}
        </div>
    );
}

function DropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState('main');
    // КОСТЫЛЬ!!!
    const [menuHeight, setMenuHeight] = useState(73);
    // КОСТЫЛЬ КОНЧИЛСЯ!!!
    const dropdownRef = useRef(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href='#' className={styles.menu__item} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
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
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu='settings'>Settings</DropdownItem>
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
