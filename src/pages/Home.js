import React from 'react';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom';
import Services from '../component/Services';
import {RoomProvider} from '../Context';
import FeatureRoom from '../component/FeatureRoom';
const Home = () => {
    return (
        <>
            <RoomProvider>
                <Hero hero = "defaultHero" children = "">
                    <Banner title = "luxurious rooms" subtitle = "deluxe rooms starting at $299"/>
                    <Link to = "/rooms" className = "btn-primary"/>
                </Hero>  
                <Services />
                <FeatureRoom />
            </RoomProvider>
        </>
    )
}

export default Home;
