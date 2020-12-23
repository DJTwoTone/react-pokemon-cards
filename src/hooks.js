import { useState } from 'react';
import axios from 'axios';

function useFlip(initialFlipState = true) {
    const [isFlipped, setIsFlipped] = useState(initialFlipState);

    function flip() {
        setIsFlipped(flipped => !flipped);
    };

    return [isFlipped, flip];
}

function useAxios(URL) {
    const [responces, setResponces] = useState([]);

    const addCardData = async () => {
        const resp = await axios.get(`${URL}`);
        setResponces(data => [...data, resp.data]);
    }

    return [responces, addCardData];
}



export { useFlip, useAxios };