import useTranslation from './useTranslation';

const Feedback = ({language}) => {
    //Getting text in proper language
    const {data} = useTranslation("http://localhost:8000/navbar-", language)
    //const {data:exhibitions} = useTranslation("http://localhost:8000/exhibitions-", language);

    //Preparing text for displaying
    if (data) {
        var pageTitle = data[0].feedback;
        var nameText = data[0].name;
        var emailText = data[0].email;
        var commentText = data[0].comments;
        var submitText = data[0].submit;
        var thanksText = data[0].thanks
    }

    function handleSubmit() {
        alert(thanksText)
    }

    return ( 
        <div className="my-4 content bg-white">
            <div id="description-style">
                <div className="row">
                    <div className="col-4">
                        <br></br><h1  style={{height:"150px", lineHeight: "130px", padding:"25px"}}>{pageTitle}</h1>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="card-body bg-light">
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="name" className="form-label"><p>{nameText}</p></label>
                      <input type="text" className="form-control" id="name" required/>
                    </div>
                    <div className="col-6">
                      <label htmlFor="name" className="form-label"><p>{emailText}</p></label>
                      <input type="text" className="form-control" id="email" required />
                    </div>
                   </div>
                   <br></br><label htmlFor="name" className="form-label"><p>{commentText}</p></label>
                    <textarea className="form-control " id="comments" required />
                    <div className="row" >
                    <div className="col-3" >
                    </div>
                    <div className="col-6 inMiddle" style={{textAlign:"center"}}>
                    <br></br><button style={{paddingTop:"15px"}} type="submit" id="finish"><p>{submitText}</p></button>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
                </div>
                    
            </form>
        </div>
        
     );
}
 
export default Feedback;