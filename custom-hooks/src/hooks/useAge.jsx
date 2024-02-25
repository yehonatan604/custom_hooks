import { useState, useEffect } from 'react';

const useAge = (initialAge) => {
    const [age, setAge] = useState(0);

    useEffect(() => {
        setAge(initialAge);
    }, [initialAge]);

    const increase = () => {
        setAge(age + 1);
    }

    const decrease = () => {
        setAge(age - 1);
    }

    const fragment = (
        <>
            <h2>Age: {age}</h2>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </>
    )

    return { fragment };
}

export default useAge;