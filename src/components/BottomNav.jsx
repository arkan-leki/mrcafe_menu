import React, { useContext, useEffect, useState } from 'react'
import { FaCoffee, FaIceCream } from 'react-icons/fa';
import { ItemsContext } from "../context/ItemsContext";

const BottomNav = () => {
    const { groups, setItemsGroup } = useContext(ItemsContext)

    const [activeNavItem, setActiveNavItem] = useState('');

    const handleItemClick = (item) => {
        setActiveNavItem(item);
    };

    useEffect(() => {
        setItemsGroup(activeNavItem)
    }, [activeNavItem]);

    return (
        <nav className="fixed bottom-0 w-full bg-black bg-opacity-20 backdrop-blur-md h-12 justify-center">
            <ul className="flex flex-row-reverse justify-center gap-x-2 py-3 px-2">
                {groups.map(group => (
                    <li
                        key={group}
                        className={activeNavItem === group ? 'text-[#fff] cursor-pointer  w-3/4  text-center text-lg' : 'text-[#ffffff70] cursor-pointer w-3/4  text-center text-lg'}
                        onClick={() => handleItemClick(group)}
                    >
                        {group === 'Cold' && <FaIceCream size={28} className='mx-auto' />}
                        {group === 'Hot' && <FaCoffee size={28} className='mx-auto' />}
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default BottomNav