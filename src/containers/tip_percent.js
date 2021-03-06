import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { tipPercentage } from "../actions/index";
// import { fetchPrices } from "../actions/index";

class TipPercent extends Component {
  constructor(props) {
    super(props);
    this.updateTip.bind(this);
  }

  calculateTip(percent, fetchPrices) {
    //CALCULATE SUM
    var price = 0;
    this.props.fetchPrices.map((eachAmount) => {
      price = price + Number(eachAmount.amount);
    });
    const priceTotal = price.toFixed(2);

    //CALCULATE EACH TIP
    const tipAmount = (priceTotal * (percent/100)).toFixed(2);
    return tipAmount;
  }

  //CHANGE REDUCER WITH PERCENTAGE SELECTED
  updateTip(percent) {
    const num = Number(percent)
    this.props.tipPercentage(num);
  }

  render() {
    return (
      <div className="col-md-4 middle-boxes">
        <h3 className="important">Select Tip</h3>

        <div className="row">
          <div className="col-md-6">
            <div className="tip-box" onClick={() => this.updateTip(10)}>
              10% - $ {this.calculateTip(10)}
            </div>

            <div className="tip-box" onClick={() => this.updateTip(12)}>
              12% - $ {this.calculateTip(12)}
            </div>

            <div className="tip-box" onClick={() => this.updateTip(15)}>
              15% - $ {this.calculateTip(15)}
            </div>

            <div className="tip-box" onClick={() => this.updateTip(18)}>
              18% - $ {this.calculateTip(18)}
            </div>
          </div>
          <div className="col-md-6">
            <div className="tip-box" onClick={() => this.updateTip(20)}>
              20% - $ {this.calculateTip(20)}
            </div>

            <div className="tip-box" onClick={() => this.updateTip(22)}>
              22% - $ {this.calculateTip(22)}
            </div>

            <div className="tip-box" onClick={() => this.updateTip(25)}>
              25% - $ {this.calculateTip(25)}
            </div>

            <div className="tip-box" onClick={() => this.updateTip(30)}>
              30% - $ {this.calculateTip(30)}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetchPrices: state.fetchPrices
  };
}

export default connect(mapStateToProps, { tipPercentage })(TipPercent);
