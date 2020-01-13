import React from 'react';
import '../stylesheets/App.css';
import {getDataFromApi} from '../services/Api';
import CartoonsList from './CartoonsList';
import FilterCartoon from './FilterCartoon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cartoons: [],
      value:""
    } 
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount(){
    getDataFromApi()
     .then(data=>{
       this.setState({
         cartoons: data.results
       })
       console.log(data.results)
     })
    
  }

  handleSearch(value){
    this.setState({
      value:value
    })
    console.log(value)
  }
  

  render() {
    return (
      <div className="App">
        <FilterCartoon
         value={this.state.value}
         handleSearch={this.handleSearch}
        />
        <CartoonsList
           cartoonList={this.state.cartoons}
        />
      </div>
    );
  }
}

export default App;
