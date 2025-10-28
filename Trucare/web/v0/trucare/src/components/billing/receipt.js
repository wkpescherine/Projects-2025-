import React, { useState } from 'react';

const Receipt = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(true);


      return (
        <div className="dropdown-container">
            {/*<button className="dropdown-toggle" onClick={toggleDropdown}>
            {selectedOption ? selectedOption.label : 'Select Procedure'}
            {/* Add an icon for visual indication of dropdown state *
          </button>*/}
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option) => (
                        <ul>{option.label}</ul>
                    )
                )
            }
            </ul>
          )}
        </div>
      );
    };

    export default Receipt;