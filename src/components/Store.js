import React from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class Store extends React.Component {
  
  products = [{
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
  icon = VIEW_LIST;
  state = {    
    icon: this.icon,
    products: this.products,
  };

  onSwitch = () => {
    const { icon } = this.state;

    if (icon === VIEW_LIST) {    
      this.icon = VIEW_MODULE;
      this.setState({icon: this.icon});           
    } else if (icon === VIEW_MODULE) {
      this.icon = VIEW_LIST;
      this.setState({icon: this.icon});
    }    
  }

  renderLayout = () =>{
    const { icon, products } = this.state;

    if (icon === VIEW_LIST) {
      return (
        <CardsView          
          cards={products} />
      );
    }
    return (<ListView items={products} />);
  }

  render() {
    const { icon } = this.state;
    
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon = {icon}
            onSwitch = {this.onSwitch} />
        </div>
        {this.renderLayout()}      
      </div>
    );
  }  
}

export default Store;
