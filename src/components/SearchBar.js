import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import { connect } from "react-redux";
import { buscaVideo } from '../store/actions/busca-video';
import logo from '../myYoutube.png';
import './SearchBar.css';

class SearchBar extends Component {

    constructor(props) {
        super(props)

        //on load
        this.props.buscaVideo('ikimono gakari sakura')
    }
    pesquisaTermo = e => {

        if (e.keyCode === 13) {
            const termo = e.target.value
            console.log(termo)
            this.props.buscaVideo(termo)
        }

    }
    render() {
        return (
            <div className='search-bar'>
                <div className='items'>
                <img src={logo} alt="logo" />
                     <Input className='search' fluid icon='search' onKeyDown={(e) => this.pesquisaTermo(e)} size='large' placeholder='Seach ...' />
                    
               </div>  
            </div>
        )
    }

}

const DispatchToProps = (dispatch) => {
    return {
        buscaVideo: (termo) => dispatch(buscaVideo(termo))
    }
}

export default connect(null, DispatchToProps)(SearchBar)