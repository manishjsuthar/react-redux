import { connect } from "react-redux";
import Checkout from "../components/Checkout";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
} from "../Services/Actions/Actions";
const mapStateToProps = (state) => ({
  data: state.cardItems,
});
// const mapDispatchToProps = (dispatch) => ({});
const mapDispatchToProps = (dispatch) => ({
  IncrementHandler: (data) => dispatch(IncreaseQuantity(data)),
  DecrementHandler: (data) => dispatch(DecreaseQuantity(data)),
  DeleteCartHandler: (data) => dispatch(DeleteCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
