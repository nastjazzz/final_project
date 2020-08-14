import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../../filter.css';
import '../../filter.transitions.css';

function ParametersBlock(props) {
    const [open, setOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState(21);
    const [rotate, setRotate] = useState(false);

    function calcHeight(el) {
		if (open) {
			const height = el.offsetHeight + 31;
        	setMenuHeight(height);	
		} else {
			setMenuHeight(21);
		}
    }
    
    return (
        <div className='item__subtitle' style={{height: menuHeight}}>
            <div className='item__title' onClick={() => { setOpen(!open); setRotate(!rotate); }} rotate={`${rotate}`}>{props.title}</div>
            <CSSTransition classNames='item__body' in={open === true} unmountOnExit timeout={500} onEnter={calcHeight} onExit={calcHeight}>
                <div className='parameters__wrapper'>
                    {props.children}
                </div>
            </CSSTransition>
        </div>
    );
}

export default ParametersBlock;
