import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {modal} = this.props;
        if (!modal) return null;

        let component;
        switch (modal) {
            case 'Login':
                component = <LoginFormContainer />;
                break;
            case 'Sign Up':
                component = <SignupFormContainer />;
                break;
            default:
                return null;
        }
        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        );
    }




}

export default Modal;


