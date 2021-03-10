import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Team = (props) => {
    const {strLeague, strTeamBadge, idTeam} = props.team
    return (
        <div className="mt-5 col-md-4 text-center">
            <div className="card">
                <img src={strTeamBadge} className="card-img-top"></img>
                
                <div className="card-body">
                    <h5 className="card-title">{strLeague}</h5>
                    <p className="card-text">Sports type: Football</p>
                    <Link to={`/explore/${idTeam}`}>
                        <button className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight}/></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Team;
