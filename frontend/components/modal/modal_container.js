import Modal from "./modal"
import {connect} from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import {clearErrors} from '../../actions/session_actions'


const msp = state => ({
    modal: state.ui.modal
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(Modal);