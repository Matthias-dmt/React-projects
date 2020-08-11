import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {

    constructor(props){
        super(props);

        this.state = {
            showInfo: false
        }
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const {id , key, city, img, name, info} = this.props;
        const { handleDelete } = this.props;
        return (
            <article key={key} className="tour">
                <figure className="img-container">
                    <img src={img} alt={name}/>
                    <span onClick={() => {handleDelete(id)}} className="close-btn">
                        <i className="fas fa-window-close"></i>
                    </span>
                </figure>
                <section className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{" "}
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down"></i>
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                    
                </section>
            </article>
        )
    }
}
