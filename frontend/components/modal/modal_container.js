import Modal from "./modal"
import {connect} from 'react-redux';
import { closeModal } from '../../actions/modal_actions';


const msp = state => ({
    modal: state.ui.modal
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(Modal);