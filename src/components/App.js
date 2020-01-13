import React from 'react';
import '../stylesheets/App.css';
import {getDataFromApi} from '../services/Api'
import CartoonsList from './CartoonsList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cartoons: []

    }
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
  

  render() {
    return (
      <div className="App">
        <CartoonsList
           cartoonList={this.state.cartoons}
        />
      </div>
    );
  }
}

export default App;
