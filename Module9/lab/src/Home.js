import {useState} from "react";
import {useEffect} from "react";
import useTranslation from './useTranslation'
import image1 from './images/www.png';
import image2 from './images/java.png';
import image3 from './images/python.png';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import ExhibitionDisplay from "./ExhibitionDisplay";


const  Home = ({language}) => {
    //Getting text in proper language
    const {data:home} = useTranslation("http://localhost:8000/home-", language)
    const {data:exhibitions} = useTranslation("http://localhost:8000/exhibitions-", language);

    //Preparing text for displaying
    if (home) {
        var description = home[0].text;
        var categories = home[1].text;
    }
    if (exhibitions){
        var featuredTitle1 = exhibitions[0].title;
        var featuredTitle2 = exhibitions[1].title;
        var featuredTitle3 = exhibitions[2].title;
        var featuredBody1 = (exhibitions[0].body).substring(0,45)+"...";
        var featuredBody2 = (exhibitions[1].body).substring(0,45)+"...";
        var featuredBody3 = (exhibitions[2].body).substring(0, 45)+"...";
    }
    
    return (
        <div className="my-4 content">
            <div id="description-style" style={{marginLeft:"12px", marginRight:"12px"}}>
                <div className="row" >
                    <div className="col-3" style={{backgroundColor:"#203647"}}>
                    </div>
                    <div className="col-6 inMiddle" style={{textAlign:"center", backgroundColor:"#203647"}}>
                    <h2 className="exhibition-title"><br></br>{description}</h2>
                    </div>
                    <div className="col-3" style={{ backgroundColor:"#203647"}}>
                    </div>
                </div>
            </div>
            <Carousel fade variant="dark" style={{backgroundColor:"black"}}>
                <Carousel.Item>
                    <img className="d-block w-100 img-format" src={image1} alt="First slide" />
                    <Carousel.Caption className="img-caption">
                        <h2 className="exhibition-title">{featuredTitle1}</h2>
                        <p>{featuredBody1}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100 img-format" src={image2} alt="Second slide" />
                    <Carousel.Caption className="img-caption">
                        <h2 className="exhibition-title">{featuredTitle2}</h2>
                        <p>{featuredBody2}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100 img-format" src={image3} alt="Third slide" />
                    <Carousel.Caption className="img-caption">
                        <h2 className="exhibition-title">{featuredTitle3}</h2>
                        <p>{featuredBody3}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div style={{height:"45px",backgroundColor:"#203647"}}>
                
            </div>

            <br></br>
            {exhibitions && <ExhibitionDisplay exhibitions={exhibitions} title={categories}/>}
        </div>
      );
}
 
export default Home;

/**
     const [exhibitions, setExhibitions] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/exhibitions-"+language)
        .then(res => {
            return res.json();
        })
        .then((data => {
            console.log(data);
            setExhibitions(data);
        }));
    }, [language]);

    const title = "Welcome here";
    const handleClick = () => {
        console.log("Hey now");
    }
    const handleClickAgain = (name) => {
        console.log("You're an All-Star, " + name);
    }
    //Changing value on template, setName can be setVariableName
    const [name, setName] = useState("Go play");

    const handleClickAgainAgain = () => {
        setName("All that glitters is gold.");
    }
 */