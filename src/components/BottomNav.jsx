import React, { useContext, useEffect, useState } from 'react'
// import { FaCoffee, FaIceCream } from 'react-icons/fa';
import { ItemsContext } from "../context/ItemsContext";
import Hot from '../images/hot.png';
import Cold from '../images/cold.png';
import Hot_alt from '../images/hotalt.png';
import Cold_alt from '../images/coldalt.png';


const BottomNav = () => {
    const { groups, setItemsGroup } = useContext(ItemsContext)

    const [activeNavItem, setActiveNavItem] = useState('Cold');

    const handleItemClick = (item) => {
        setActiveNavItem(item);
    };

    useEffect(() => {
        setItemsGroup(activeNavItem)
        // eslint-disable-next-line
    }, [activeNavItem]);

    return (
        <nav className="fixed bottom-0 w-full bg-black bg-opacity-20 backdrop-blur-md h-12 justify-center">
            <ul className="flex flex-row justify-evenly w-full items-center gap-x-2 py-3 mx-auto">
                {groups.map(group => (
                    <li
                        key={group}
                        className='cursor-pointer w-fit'
                        onClick={() => handleItemClick(group)}
                    >
                        {group === 'Cold' && <img src={group === activeNavItem ? Cold : Cold_alt} alt="Cold" width={40} className="mx-auto" />}
                        {group === 'Hot' && <img src={group === activeNavItem ? Hot : Hot_alt} alt="Coffee" width={32} className="mx-auto" />}
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default BottomNav