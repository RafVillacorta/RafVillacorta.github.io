import useTranslation from './useTranslation';

const Navbar = ({language}) => {  
    //Getting text in proper language
    const {data:menus} = useTranslation("http://localhost:8000/navbar-", language);

    //Preparing text for displaying
    if (menus){
        var title = menus[0].title;
        var exhibitions = menus[0].exhibitions;
        var search = menus[0].search;
        var store = menus[0].store;
        var feedback = menus[0].feedback;
        var about = menus[0].about;
    }
    return ( 
        <nav id="nav-style" className="navbar fixed-top navbar-expand-lg bg-dark" >
            <div className="container-fluid" style={{paddingLeft:"10%"}}>
                <h1><a href="/">{title}</a></h1>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 nav-format" >
                        <li className="nav-item active">
                            <a href="/Exhibitions">{exhibitions}</a>
                        </li>
                        <li className="nav-item active">
                            <a href="/Search">{search}</a>
                        </li>
                        <li className="nav-item active">
                            <a href="/Store">{store}</a>
                        </li>
                        <li className="nav-item active">
                            <a href="/Feedback">{feedback}</a>
                        </li>
                    </ul>
                </div>
            </div>{".\n."}
        </nav>
     );
}
 
export default Navbar;

//sfc to create function
