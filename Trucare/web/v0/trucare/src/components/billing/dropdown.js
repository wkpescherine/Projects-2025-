import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

      const handleOptionClick = (option) => {
        setSelectedOption(option);
        onSelect(option); // Pass the selected option to a parent component
        setIsOpen(false); // Close the dropdown after selection
      };

      return (
        <div className="dropdown-container">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            {selectedOption ? selectedOption.label : 'Select an option'}
            {/* Add an icon for visual indication of dropdown state */}
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              {options.map((option) => (
                <li key={option.value} onClick={() => handleOptionClick(option)}>
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    };

    export default Dropdown;