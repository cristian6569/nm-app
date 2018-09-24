import * as React from 'react';


import Searchbar from '../../../components/Searchbar/Searchbar';
import SearchResults from '../../../components/SearchResults/SearchResults';

import './Masonry.scss';
import Dash from '../../../components/Editor/Dash/Dash';

export class Masonry extends React.Component {
    
    createColumns = () => {

        let array = [{
            name: "Nombre carpeta 1"
        }, {
            name: "Nombre carpeta 2"
        }, {
            name: "Nombre carpeta 3"
        }, {
            name: "Nombre carpeta 4"
        }, {
            name: "Nombre carpeta 5"
        }
        ];

        function generateColumnArray(initialArray: any, elemsInCol: number) {
            // This function will create an Array for the column
            let columnArray = [];

            /*
                It will loop until it have a array for the column. And had eliminated all the 
                elements in the initial array. */
            for (let i = 0; i > elemsInCol; i++) {
                let folder = initialArray.shift();
                columnArray.push(folder);
            }
            return [columnArray, initialArray]
        }

        let columns = [];

        for (let i = 0; array.length != 0; i++) {

            let columnArray = [];

            if (array.length >= 3) {
                let elemsInCol = (Math.floor(Math.random() * 3) + 1);
                let tem = generateColumnArray(array, elemsInCol);
                columnArray = tem[0];
                array = tem[1];

            }
            if (array.length == 2) {
                let elemsInCol = (Math.floor(Math.random() * 2) + 1);
                let tem = generateColumnArray(array, elemsInCol);
                columnArray = tem[0];
                array = tem[1];
            }
            if (array.length == 1) {
                let elemsInCol = 1;
                let tem = generateColumnArray(array, elemsInCol);
                columnArray = tem[0];
                array = tem[1];
            }

            columns.push(<p> {columnArray} </p>)
        }
        
        return columns;

    }
    render() {
        return(
            <div>
              {this.createColumns()}
            </div>
          )
    }
}