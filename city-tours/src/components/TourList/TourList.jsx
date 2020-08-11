import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour.jsx';
import {tourData} from './tourData';

export default class TourList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            tours: tourData,
        };
    }

    handleDelete = id => {
        const filterTours = this.state.tours.filter( tour => tour.id !== id)

        this.setState({
            tours: filterTours
        });
    }
    
    
    render() {  
        return (
            <section className="tourlist">
                {this.state.tours.map((tour, i) => {
                    return (
                       <Tour 
                            key={i} 
                            id={tour.id}
                            img={tour.img} 
                            city={tour.city} 
                            name={tour.name} 
                            info={tour.info}
                            handleDelete={this.handleDelete}
                        /> 
                    )
                })}
                
            </section>
        )
    }
}
