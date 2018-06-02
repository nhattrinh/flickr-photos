import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// redux-related imports
import { connect } from 'react-redux';
import * as actions from './actions';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state= {
            tags: ''
        };
    }

    handleClick(){
        if (!this.state.tags.length){
            this.props.resetQuery();
            this.props.resetLink();
        }
        else{
            this.props.incrementQueryCount();
            this.props.setTags(this.state.tags);
        }
    }

    render(){
        return(
            <div className='container' style={{ marginTop: 10 }}>
                <form>
                    <div className='form-group'>
                        <label>Search by Tags</label>
                            <div className='input-group'>
                            <input 
                                style={{ marginRight: 3 }}
                                placeholder='Enter tags' 
                                value={this.state.tags} 
                                type='text' 
                                className='form-control col-sm-12 col-md-10'
                                onChange={event => this.setState({tags: event.target.value})}
                            />
                            <Button className='col-sm-12 col-md-2' onClick={this.handleClick.bind(this)} bsStyle='primary'>Search</Button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        tags: state.tags,
        link: state.link
    };
};

export default connect(mapStateToProps,actions)(SearchBar);