import image4 from './images/puzzle.jpg';
import image5 from './images/books.jpeg';
import useTranslation from './useTranslation';

const Store = ({language}) => {
    //Getting text in proper language
    const {data} = useTranslation("http://localhost:8000/navbar-", language)

    //Preparing text for displaying
    if (data) {
        var pageTitle = data[0].store;
        var instructions= data[0].instructions;
        var nameText = data[0].name;
        var emailText = data[0].email;
        var phoneText = data[0].phone;
        var addressText = data[0].address;
        var payedText = data[0].payed
        var infoText = data[0].info;
        var paymentText = data[0].payment;
        var ccText = data[0].cc
        var ccNameText = data[0].ccName;
        var cvvText = data[0].cvv;
        var expirationText = data[0].expiration;
        var payText = data[0].pay;
        var booksItem = data[0].books;
        var puzzleItem = data[0].puzzle;
    }

    function handleSubmit() {
        alert(payedText)
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
                <label className="form-label"><p>{instructions}</p></label> 
                <div className="row">
                    <div className="col-6">
                        <img className="d-block w-100 img-format" src={image5} style={{margin:"auto",maxWidth:"400px", height:"300px"}}/>        
                        <input required type="checkbox" name="books" style={{marginLeft:"40%"}}></input>    
                        <label htmlFor="books" className="form-label"><p> -{booksItem}</p></label>
                    </div>
                    <div className="col-6">
                    <img className="d-block w-100 img-format" src={image4} style={{margin:"auto",maxWidth:"400px", height:"300px"}}/>        
                        <input type="checkbox" name="puzzle" style={{marginLeft:"45%"}}></input>    
                        <label htmlFor="puzzle" className="form-label"><p> -{puzzleItem}</p></label>
                    </div>
                   </div>   
                <label className="form-label"><p>{infoText}</p></label>
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="name" className="form-label"><p>{nameText}</p></label>
                      <input type="text" className="form-control" id="name" required/>
                      <br></br><label htmlFor="phone" className="form-label"><p>{phoneText}</p></label>
                      <input type="text" className="form-control" id="phone" required/>
                    </div>
                    <div className="col-6">
                      <label htmlFor="email" className="form-label"><p>{emailText}</p></label>
                      <input type="text" className="form-control" id="email" required />
                      <br></br><label htmlFor="address" className="form-label"><p>{addressText}</p></label>
                      <input type="text" className="form-control" id="address" required/>
                    </div>
                   </div><br></br>
                   <label className="form-label"><p>{paymentText}</p></label>
                    <div className="row">
                    <div className="col-6">
                      <label htmlFor="cc" className="form-label"><p>{ccText}</p></label>
                      <input type="text" className="form-control" id="cc" required/>
                      <br></br><label htmlFor="cvv" className="form-label"><p>{cvvText}</p></label>
                      <input type="text" className="form-control" id="cvv" required/>
                    </div>
                    <div className="col-6">
                      <label htmlFor="ccNameText" className="form-label"><p>{ccNameText}</p></label>
                      <input type="text" className="form-control" id="ccNameText" required />
                      <br></br><label htmlFor="expiration" className="form-label"><p>{expirationText}</p></label>
                      <input type="text" className="form-control" id="expiration" required/>
                    </div>
                   </div>
                    <div className="row" >
                    <div className="col-3" >
                    </div>
                    <div className="col-6 inMiddle" style={{textAlign:"center"}}>
                    <br></br><button style={{paddingTop:"15px"}} type="submit" id="finish"><p>{payText}</p></button>
                    </div>
                    <div className="col-3">
                    </div>
                    </div>
                </div>
            </form>
        </div>
        
     );
}
 
export default Store;