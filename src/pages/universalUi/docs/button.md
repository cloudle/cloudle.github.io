# Buttons

```evil
const { View, StyleSheet } = ReactNative; 
const { Button } = UniversalUI;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonWrapperBase: {
    backgroundColor: '#00bcd4',
    width: 120,
    marginRight: 5,
  },
  buttonInner: {
    paddingTop: 8, paddingBottom: 8,
  }
});

<View style={styles.container}>
  <Button 
    wrapperStyle={[styles.buttonWrapperBase]} 
    innerStyle={styles.buttonInner}
    title="click me"/>
 
  <Button 
    wrapperStyle={[styles.buttonWrapperBase, {backgroundColor: "#dedede"}]}
    innerStyle={styles.buttonInner}
    textStyle={{color: "#666666"}}
    title="dark style"/>  
    
  <Button 
    wrapperStyle={[styles.buttonWrapperBase, {backgroundColor: "#ff4081"}]} 
    innerStyle={styles.buttonInner}
    raise={false}
    title="no raise"/>  

  <Button 
    wrapperStyle={[styles.buttonWrapperBase, {backgroundColor: "#7eb328"}]} 
    innerStyle={styles.buttonInner}
    icon={<Icon name="logo-nodejs" size={14}/>}
    title="with icon"/>
</View> 
```

```js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-universal-ui';

function render () { 
	return <Button 
	  wrapperStyle={styles.wrapperStyle}
	  title="no raise" raise={false}/>
}

const styles = StyleSheet.create({
	buttonWrapper: {
		backgroundColor: '#ff4081',
    width: 120,
    marginRight: 5,
	},
})

```