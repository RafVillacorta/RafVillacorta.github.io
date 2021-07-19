import ExhibitionCards from "./ExhibitionCards";
import useTranslation from './useTranslation'

const Exhibitions = ({language}) => {
    //Getting text in proper language
    const {data} = useTranslation("http://localhost:8000/navbar-", language)
    const {data:exhibitions} = useTranslation("http://localhost:8000/exhibitions-", language);

    //Preparing text for displaying
    if (data) {
        var pageTitle = data[0].exhibitions;
    }
    return ( 
        <div className="my-4 content bg-white">
            <div id="description-style">
                <br></br><h1  style={{height:"150px", lineHeight: "130px", padding:"25px"}}>{pageTitle}</h1>
            </div>
            {exhibitions && <ExhibitionCards exhibitions={exhibitions}/>}
        </div>
        
     );
}
 
export default Exhibitions;