import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchJsonp from 'fetch-jsonp';

import * as actions from './actions';

class ImagesGrid extends Component{
    constructor(props){
        super(props);
        this.state={
            images: []
        };
    }
    componentWillMount(){
        this.setImages();
    }

    componentWillReceiveProps(nextProps){
        if ( nextProps.queryCount !== 0 )
            this.setImages();
    }

    setImages(){
        fetchJsonp(this.props.link,{
            jsonpCallbackFunction: 'jsonFlickrFeed'
          })
            .then(response => response.json())
            .then(response => {
                this.props.setImages(response.items);
                this.setState({images: response.items});
            })
            .catch(err => console.log(err));
    }

    renderImages(){
        if (this.state.images !== null){
            return(
                <div className='row align-center'>
                    {
                        this.state.images.map((v,i)=>{
                            return(
                                <div 
                                    key={v.media.m} 
                                    className='col-sm-12 col-md-5 offset-md-1 col-lg-3 text-center' 
                                    style={{ 
                                        marginLeft: '3vw',
                                        marginRight: '1vw',
                                        marginTop: 5,
                                        marginBottom: 10
                                    }}
                                >
                                    <img src={v.media.m} alt='' />
                                </div>
                            );
                        })
                    }
                </div>
            );
        }

    }

    render(){
        return(
            <div className='container'>
                { this.renderImages() }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        images: state.images,
        link: state.link,
        queryCount: state.queryCount
    };
};

export default connect(mapStateToProps,actions)(ImagesGrid);