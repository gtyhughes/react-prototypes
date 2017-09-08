import React, {Component} from 'react';
import TextField from './field'

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event){
        const {name, value} = event.target;
        const {firstName, lastName, email, phone} = this.state.form;
        const form = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        };
        form[name] = value;
        this.setState({
            form: form
        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.add(this.state.form);
    }
    render() {
        const {firstName, lastName, phone, email} = this.state.form;
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField value={firstName} onChange={this.handleInputChange} name="firstName" label="First Name"/>
                <TextField value={lastName} onChange={this.handleInputChange} name="lastName" label="Last Name"/>
                <TextField value={phone} onChange={this.handleInputChange} name="phone" label="Phone Number"/>
                <TextField value={email} onChange={this.handleInputChange} name="email" label="Email Address"/>
                <button>Add Contact</button>
            </form>
        );
    }
}
export default ContactForm;
