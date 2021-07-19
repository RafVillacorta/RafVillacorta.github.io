import { useState, useEffect } from "react";

const useTranslation = (location, language) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(location+language)
        .then(res => {
            return res.json();
        })
        .then((data => {
            setData(data);
        }));
    }, [language]);
    return {data};
}
 
export default useTranslation;