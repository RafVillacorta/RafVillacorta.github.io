import ExhibitionCards from "./ExhibitionCards";
import useTranslation from './useTranslation'
import { useState, useEffect } from "react";

const Search = ({language}) => {
    //Getting text in proper language
    const {data} = useTranslation("http://localhost:8000/navbar-", language)
    const {data:exhibitions} = useTranslation("http://localhost:8000/exhibitions-", language);

    //Preparing text for displaying
    if (data) {
        var pageTitle = data[0].search;
        var message = data[0].searchMessage;
        var cat1 = data[0].cat1;
        var cat2 = data[0].cat2;
        var cat3 = data[0].cat3;
        var cat4 = data[0].cat4;
    }

    const [cat, setCat] = useState(cat1);

    function handleChange(event){
        setCat(event.target.value);
        console.log(event.target.value);
    }

    
    /*useEffect(() => {
        (exhibitions => {
            setQuery(exhibitions);
        });
    }, [language]);*/

    return ( 
        <div className="my-4 content bg-white">
            <div id="description-style">
                <div className="row">
                    <div className="col-4">
                        <br></br><h1  style={{height:"150px", lineHeight: "130px", padding:"25px"}}>{pageTitle}</h1>
                    </div>
                <div className="col">
                    <br></br><form >
                        <label style={{height:"150px", lineHeight: "140px", padding:"25px"}}>
                        {message}
                        <select value={cat} onChange={handleChange}>
                            <option selected disabled value="-----">----------</option>
                            <option value="cat1">{cat1}</option>
                            <option value="cat2">{cat2}</option>
                            <option value="cat3">{cat3}</option>
                            <option value="cat4">{cat4}</option>
                        </select>
                        </label>
                    </form>
                    </div>
                </div>
            </div>
            {exhibitions && <ExhibitionCards exhibitions={exhibitions.filter((exhibition) => 
                exhibition.category === cat)} />}
        </div>
        
     );
}
 
export default Search;