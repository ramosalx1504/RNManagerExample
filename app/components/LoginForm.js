import React , {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,loginUser} from '../src/actions';
import {View} from 'react-native';
import {Button,Text,Form,Item,Input,Label,Spinner} from 'native-base';

class LoginForm extends Component {

	onEmailChange(text){
		this.props.emailChanged(text);
	}

	onPasswordChange(text){
		this.props.passwordChanged(text);
	}

	onButtonPress(){
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	renderButton(){
		if (this.props.loading) {
			return <Spinner size='large' />
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)} style={styles.button} block>
				<Text>Login</Text>
			</Button>
		) 
	}

	render(){
		const {content,errorText} = styles;
		return (
			<View style={content}>
				<Form>
					<Item>
						<Label>Email</Label>
						<Input onChangeText={ (text) => this.onEmailChange(text)} placeholder='ejemplo@correo.com' />
					</Item>
					<Item>
						<Label>Password</Label>
						<Input onChangeText={ (text) => this.onPasswordChange(text)} secureTextEntry placeholder='Password' />
					</Item>
				</Form>
				<Text style={errorText}>{this.props.error}</Text>
				{
					this.renderButton()
				}
			</View>
		)
	}
}

const styles = {
	content:{
		padding:25
	},
	button:{
		marginVertical:25
	},
	errorText:{
		alignSelf:'center',
		color:'red'
	}
}

const mapStateToProps = ({ auth }) => {
	
	const {email,password,error,loading} = auth;
	
	return { email, password, error, loading }
}

export default connect( mapStateToProps ,{emailChanged,passwordChanged,loginUser})(LoginForm);