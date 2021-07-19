import Exhibition from './Exhibition';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const ExhibitionCards = ({exhibitions}) => {
    return ( 
        <div  style={{margin:"20px"}}>
            {exhibitions.map((exhibition) => (
            <div key={exhibition.id}>
                <div className="exhibition-preview" >
                <h2>{exhibition.title}</h2>
                <p>{exhibition.body}</p>
                
            </div><br></br>
            </div>
            
            
        ))}
    </div>
    );
}
 
export default ExhibitionCards;