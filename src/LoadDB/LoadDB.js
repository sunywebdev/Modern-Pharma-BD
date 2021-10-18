import { useEffect, useState } from 'react';

const LoadDB = () => {
    const [items, setItems] = useState()
    useEffect(() => {
        fetch('/db.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
};

export default LoadDB;