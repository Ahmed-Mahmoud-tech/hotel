import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";


export default class FeatureRoom extends Component {
    static contextType = RoomContext;
    render() {
        let {loading, featuredRooms : rooms} = this.context; // featuredRoom : rooms this for asign featuredRoom to new variable it's name rooms
        rooms = rooms.map(room => {
            return <Room key = {room.id} room = {room} />
        })
        return (
            <section className = "featured-rooms">
                <Title title = "featured rooms" />
                <div className = "featured-rooms-center">
                    {loading?<Loading />:rooms}
                </div>
            </section>
        )
    }
}


