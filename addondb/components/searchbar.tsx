import React, { useState, useEffect } from 'react';

interface SearchbarProps {
    onSearch: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    // Debounce logic
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if(onSearch){
                onSearch(inputValue);// Trigger search after delay
            } 
        }, 300);

        return () => clearTimeout(delayDebounce); // Clear timeout on value change
    }, [inputValue, onSearch]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <div className="w-[651px] h-[42px] bg-[#f4f4f4] rounded-[15px] p-2">
                <input
                    className="w-full h-full bg-transparent outline-none text-sm px-4 text-black"
                    type="text"
                    placeholder="Search..."
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default Searchbar;
