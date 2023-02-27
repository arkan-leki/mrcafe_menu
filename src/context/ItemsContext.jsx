import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext(undefined)

const ItemsContextProvider = (props) => {
    const [items, setItems] = useState([])
    const [itemsTemp, setItemsTemp] = useState([])
    const [groups, setGroups] = useState([])
    const dataUrl = '/data.json';


    useEffect(() => {
        fetch(dataUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setItems(data)
                setItemsTemp(data)
                setGroups(Array.from(new Set(data.map(item => item.group))))
                // Do something with the retrieved data
            })
            .catch(error => {
                console.error('Error retrieving data:', error);
            });
        console.log(items);
        // eslint-disable-next-line
    }, [])

    const filterItems = (data) => {
        if (data === '0')
            return setItems(itemsTemp);
        setItems(itemsTemp.filter((item) =>
            item.group === data
        ));
    }

    // const searchItems = (data) => {
    //     setItems(itemsTemp.filter((item) =>
    //         item.id === data
    //     ));
    // }

    const setItemsGroup = (data) => {
        if (data === 0)
            return setItems(itemsTemp);
        setItems(itemsTemp.filter((sale) => sale.group === data))
    }

    const value = { items, filterItems, setItemsGroup, groups }
    return (
        <ItemsContext.Provider value={value}>
            {props.children}
        </ItemsContext.Provider>
    )
}

export default ItemsContextProvider;