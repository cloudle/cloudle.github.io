import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Input } from 'react-universal-ui';

import { iStyles } from '../../utils';

@connect(({app}) => {
	return {
		localize: app.localize,
	}
})

export default class RegisterScene extends Component {

  render () {
    return <ScrollView contentContainerStyle={iStyles.scrollContainer}>
	    <Text style={iStyles.headingText}>{this.props.localize.placeholders.userAccount}</Text>
	    <View style={iStyles.sectionContainer}>
				<Input
					floatingLabel={this.props.localize.placeholders.userAccount}
					hint="account@example.com"/>
				<Input floatingLabel={this.props.localize.placeholders.password}/>
	    </View>

	    <Text style={iStyles.headingText}>{this.props.localize.menus.profile}</Text>
	    <View style={iStyles.sectionContainer}>
		    <Input floatingLabel={this.props.localize.placeholders.fullName}
		           hint="John Doe"
		           ref="fullname" maxLength={254}/>
		    <Input floatingLabel={this.props.localize.placeholders.emailAdress}
		           hint="john@doe.com"
		           ref="email" maxLength={254} keyboardType="email-address"/>
		    <Input floatingLabel={this.props.localize.placeholders.phone} ref="phone"
		           maxLength={20} keyboardType="phone-pad"/>
	    </View>
    </ScrollView>
  }
}

const styles = StyleSheet.create({

});