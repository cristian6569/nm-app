import * as React from 'react';


import Searchbar from '../../../components/Searchbar/Searchbar';
import SearchResults from '../../../components/SearchResults/SearchResults';

import './Home.scss';
import Dash from '../../../components/Editor/Dash/Dash';

export class Home extends React.Component {
    render(){
        return <div className="contHome">  
            <Dash/>
            <div className="app">
            <div ><Searchbar/></div>
            <div><SearchResults /></div>
            </div>
           
        </div>
    }
}























