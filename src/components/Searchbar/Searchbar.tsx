import * as React from 'react';
import './Searchbar.scss';

const Searchbar = () => {
    return (
        <section className='appCont'>
               <h2>Buscar</h2>
            <input id="inputBuscar" type="text" />
            <div className="contTags">
                <article className="tag">TagName</article>
                <article className="tag">TagName</article>
                <article className="tag">TagName</article>
                <article className="tag">TagName</article>
                <article className="tag">TagName</article>
                <article className="tag">TagName</article>
                <article className="tag">TagName</article>
                <article className="tag">TagName</article>
            </div>
        </section>
    )
}
export default Searchbar;