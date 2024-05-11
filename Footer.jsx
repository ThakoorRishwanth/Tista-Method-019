import React, { useState } from 'react';

function DropdownButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const countries = [
        { id: 1, name: 'USA', language: 'English' },
        { id: 2, name: 'Germany', language: 'German' },
        { id: 3, name: 'France', language: 'French' },
        
    ];

    const handleOptionClick = (option) => {
        setSelectedOption(option.name);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption || 'Select Country'}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <input
                        type="text"
                        className="dropdown-input"
                        placeholder="Search country..."
                    />
                    {countries.map((country) => (
                        <div
                            key={country.id}
                            className="dropdown-item"
                            onClick={() => handleOptionClick(country)}
                        >
                            {country.name} - {country.language}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropdownButton;
