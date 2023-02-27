import React, { useContext, useEffect, useState } from 'react'
import { FaCoffee, FaIceCream } from 'react-icons/fa';
import { ItemsContext } from "../context/ItemsContext";

const BottomNav = () => {
    const { groups, setItemsGroup } = useContext(ItemsContext)

    const [activeNavItem, setActiveNavItem] = useState('Hot');

    const handleItemClick = (item) => {
        setActiveNavItem(item);
    };

    useEffect(() => {
        setItemsGroup(activeNavItem)
    }, [activeNavItem, setItemsGroup])


    return (
        <nav className="fixed bottom-0 w-full bg-gray-900">
            <ul className="flex flex-row justify-center gap-x-2 py-1 px-2">
                {groups.map(group => (
                    <li
                        key={group}
                        className={activeNavItem === group ? 'text-gray-300 hover:text-white cursor-pointer bg-slate-700 w-3/4 py-3 text-center text-lg' : 'text-gray-300 hover:text-white cursor-pointer w-3/4 py-3 text-center text-lg'}
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