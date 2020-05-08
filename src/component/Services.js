import React, { Component } from 'react';
import Tille from './Title';
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services : [
            {
                icon: <FaCocktail />,
                title: "free cocktail",
                info: "ya 3yny ya lele ya msher 3eny hambola wla 3ola"
            },
            {
                icon: <FaHiking />,
                title: "free Hiking",
                info: "ya 3yny ya lele ya msher 3eny hambola wla 3ola"
            },
            {
                icon: <FaShuttleVan />,
                title: "free ShuttleVan",
                info: "ya 3yny ya lele ya msher 3eny hambola wla 3ola"
            },
            {
                icon: <FaBeer />,
                title: "free Beer",
                info: "ya 3yny ya lele ya msher 3eny hambola wla 3ola"
            }
        ]
    }

    render() {
        return (
            <section className = "services">
                <Tille title = "service"/>
                <div className = "services-center">
                {this.state.services.map((item,index) =>{
                        return(
                            <article key = {index} className = "service">
                                <span> {item.icon} </span>
                                <h6> {item.title} </h6>
                                <p> {item.info} </p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
