import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ExState from './ExState';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

import './App.css';

function Food ({ name, rating }) { // === props.fav bcz props is Object
  
  return (
    <div>
      <h3>I love {name}</h3>
      <h3>Rating is  {rating}/10</h3>
    </div>
  )
}

const foodILike = [
  {
    name: 'kimchi',
    id: 1
  },
  {
    name: 'ramen',
    id: 2,
    rating: 4
  },{
    name: 'kimbap',
    id: 3,
    rating: 7.5
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number
}
function App() {
  return (
    <>
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
    <footer></footer>
    </>
    // <div>
    //   <h1>Hello!!</h1> 
    //   <Home />

    //   {/* <ExState />
    //   {foodILike.map(dish => (<Food name={dish.name} key={dish.id} rating={dish.rating} />))} */}
    // </div>
  );
}

export default App;
