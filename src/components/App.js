import React from 'react';
import '../stylesheets/App.css';
import {getDataFromApi} from '../services/Api';
import CartoonsList from './CartoonsList';
import FilterCartoon from './FilterCartoon';
import CartoonDetail from './CartoonDetail';
import Header from './Header'
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cartoons: [],
      value:""
    } 
    this.handleSearch = this.handleSearch.bind(this)
    this.renderCartoonDetail = this.renderCartoonDetail.bind(this)
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

  renderCartoonDetail(props) {
    console.log(props)
    const selectId = parseInt(props.match.params.id); //url
    let selectCartoons = this.state.cartoons.find(cartoon => cartoon.id === selectId);
    
    return <CartoonDetail cartoons={selectCartoons} />;
    //cartoon puede ser patata
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <FilterCartoon
            handleSearch={this.handleSearch}
            />
            <CartoonsList
              cartoonList={this.state.cartoons}
              value={this.state.value}
            />
          </Route>
          <Route path ="/:id/" render={this.renderCartoonDetail}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
