import React from 'react';
import IconSwitch from './IconSwitch.js';
import CardsView from './CardsView.js';
import ListView from './ListView.js';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.products = [{
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];    
    this.icon = VIEW_LIST;
    this.state = { value: this.icon };
  }

  onSwitch = () => {
    if (this.icon === VIEW_LIST) {
      this.icon = VIEW_MODULE;
      this.setState(() => ({value: this.icon}));      
    } else if (this.icon === VIEW_MODULE) {
      this.icon = VIEW_LIST;
      this.setState(() => ({value: this.icon}));
    }
    console.log(this.state.value);    
  }

  renderLayout = () =>{
    if (this.icon === VIEW_LIST) {
      return (
        <CardsView
          // layout={this.layout}
          cards={this.products} />
      );
    }
    return (<ListView items={this.products} />);
  }

  render() {    
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon = {this.icon}
            onSwitch = {this.onSwitch} />
        </div>
        {this.renderLayout()}      
      </div>
    );
  }  
}

export default Store;
