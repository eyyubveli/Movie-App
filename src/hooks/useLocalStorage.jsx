
const useLocalStorage = () => {

    const setDataFromStorage = (mode) => {
        localStorage.setItem('mode', JSON.stringify(mode));
    }

    const getDataFromStorage = () => {
        const mode = JSON.parse(localStorage.getItem('mode'));
        return mode;
    }

    return {
        setDataFromStorage,
        getDataFromStorage  
    }

}

export default useLocalStorage