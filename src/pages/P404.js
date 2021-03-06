import React from 'react';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom';

const P404 = () => {
    return (
        <>
          <Hero>
              <Banner title = "404 page">
                <Link to = "/" className = "btn-primary">
                    return home
                </Link>
              </Banner>
          </Hero>
        </>
    )
}

export default P404;