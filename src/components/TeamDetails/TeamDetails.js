import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css'
import male from '../images/male.png'
import female from '../images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const TeamDetails = () => {


    let { idTeam } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(response => response.json())
        .then(data => setDetails(data.teams[0]))
    }, [idTeam])

    const {strTwitter, strYoutube, strDescriptionEN, strFacebook, strGender, strInstagram, strLeague, strStadiumDescription, strCountry, intFormedYear} = details
    
    // let setImages;
    // if(str){}
    return (
        <div className="bg-color">
            <div className="container">
                <div className="row d-flex justify-content-center banner">
                    <div className="coll-md-12">
                        <img src=
                            {
                                strGender=== 'Male'? <img src={male}/>:<img src={female}/>
                            } alt="facebook"/>
                    </div>
                </div>
                <div className="row d-flex justify-content-between mt-5 details-cart">
                    <div className="col-md-4 text-justify">
                        <h3>{strLeague}</h3>
                        <br/>
                        <h5>Founded: {intFormedYear}</h5>
                        <h5>Country: {strCountry}</h5>
                        <h5>Sports type: Football</h5>
                        <h5>Gender: {strGender}</h5>
                    </div>
                    <div className="col-md-4">
                        <img src={male} alt=""/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <p className="text-justify">{strDescriptionEN}</p>
                        <br/>
                        <br/>
                        <p className='text-justify'>{strStadiumDescription}</p>
                    </div>
                </div>
            </div>
            <div className = "icons mt-5 d-flex justify-content-center">
                <a className = 'ml-3 youtube' href={strYoutube}><FontAwesomeIcon icon={faYoutube} /></a>
                <a className = 'ml-3' href={strTwitter}><FontAwesomeIcon icon={faTwitter} /></a>
                <a className = 'ml-3 instagram' href={strInstagram}><FontAwesomeIcon icon={faInstagram} /></a>
                <a className = 'ml-3' href={strFacebook}><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
        </div>
    );
};

export default TeamDetails;
