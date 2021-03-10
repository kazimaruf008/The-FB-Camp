import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`)
        .then(response => response.json())
        .then(data => setTeams(data.teams))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className= 'container'>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        teams.map(team => <Team team={team} key={team.idTeam}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
