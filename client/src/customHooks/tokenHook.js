import {useState} from 'react';

const useTokenHook = (key, initialValue) => {
    const [token, setStoredToken] = useState(() => {
        const localToken = localStorage.getItem(key);
        return localToken ? localToken: initialValue;
    });

    const setToken = (key, value) => {
        setStoredToken(value);
        window.localStorage.setItem(key, value)
    }

    return [token, setToken]
};

export default useTokenHook;