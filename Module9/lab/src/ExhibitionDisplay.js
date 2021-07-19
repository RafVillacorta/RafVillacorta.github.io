const ExhibitionDisplay = ({exhibitions, title}) => {
    return ( 
    <div className="exhibition-display">
        <h2>{title}</h2>
        {exhibitions.map((exhibition) => (
            <div className="exhibition-preview" key={exhibition.id}>
                <h2>{exhibition.title}</h2>
                <p>{exhibition.body.substring(0,80)}...</p>
            </div>
        ))}
    </div>
    );
}
 
export default ExhibitionDisplay;