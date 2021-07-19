
const Exhibition = ({data}) => {
    console.log(data);
    return ( 
        <div className="my-4 content bg-white">
            <div id="description-style">
                <br></br><h1 style={{height:"150px", lineHeight: "130px", padding:"25px"}}>{data.title}</h1>
            </div>
            {data.body}
        </div>
        
     );
}

export default Exhibition;