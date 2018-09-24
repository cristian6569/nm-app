import * as React from 'react';


import Searchbar from '../../../components/Searchbar/Searchbar';
import SearchResults from '../../../components/SearchResults/SearchResults';

import './Home.scss';
import Dash from '../../../components/Editor/Dash/Dash';
import { Masonry } from '../../../components/Editor/Masonry/Masonry';

export class Home extends React.Component {
    render() {
        return (
        <div className="home">
            <Masonry />

        </div>
        )
    }
}