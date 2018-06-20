import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            seletedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter(dish => { return dish.id === this.state.selectedDish })[0]} />
                <Footer />
            </div>
        );
    }
}

export default Main;
