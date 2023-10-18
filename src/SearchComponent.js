import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect ,useRef} from 'react';
const SearchComponent = ({ onClose }) => {
    const inputRef = useRef(null);
    useEffect(() => {
        // Disable scrolling when the component mounts
        document.body.style.overflow = 'hidden';
        inputRef.current.focus();
        // Re-enable scrolling when the component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);
    return (
        <div className="search-popup">
            <div className="exit-icon" onClick={onClose}>
                <FontAwesomeIcon style={{ fontSize: '2rem' }} icon={faTimes} />
            </div>
            <div className="search-content">
                <input className='search-input' type="text" ref={inputRef} placeholder="Search" />
           
                <div className="search1-icon"><FontAwesomeIcon className="" icon={faSearch} color="black" /></div>
            </div>
        </div>
    );
};

export default SearchComponent;
