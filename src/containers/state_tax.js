import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { stateTax } from "../actions/index";
// import { fetchPrices } from "../actions/index";


class StateTax extends Component {

  constructor(props) {
    super(props);
    this.updateTax.bind(this);
  }

  calculateTax(tax, fetchPrices) {
    var price = 0;
    this.props.fetchPrices.map((eachAmount) => {
      price = price + Number(eachAmount.amount);
    });
    const priceTotal = price.toFixed(2);
    const taxSelected = Number(tax);

    const totalTax = ((priceTotal * taxSelected)/100).toFixed(2);

    return totalTax;
  }

  updateTax(percent) {
    const num = Number(percent)
    this.props.stateTax(num);
  }

  render() {
    return (
      <div className="col-md-4 middle-boxes">
        <h3>Select State</h3>
        <div className="tip-box" onClick={() => this.updateTax(0)}>
          Lucky One (0%) - $ {this.calculateTax(0)}
        </div>
        <div className="tip-box" onClick={() => this.updateTax(8.875)}>
          New York (8.875%) - $ {this.calculateTax(8.875)}
        </div>
        <div className="tip-box" onClick={() => this.updateTax(6.875)}>
          New Jersey (6.875%) - $ {this.calculateTax(6.875)}
        </div>
        <div className="tip-box" onClick={() => this.updateTax(6.350)}>
          Connecticut (6.350%) - $ {this.calculateTax(6.350)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetchPrices: state.fetchPrices,
    stateTax: state.stateTax
  };
}

export default connect(mapStateToProps, { stateTax })(StateTax);
