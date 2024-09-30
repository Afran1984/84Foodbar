import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../popularMenu/popularMenu';
import Featured from '../Featured/Featured';
import Teastimonial from '../Teastimonial/Teastimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Teastimonial></Teastimonial>

        </div>
    );
};

export default Home;