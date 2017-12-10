import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'

class Home extends React.Component {
  constructor() {
    super()

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render () {
    return (
      <View>
        <Text>Dimanasaja</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});

export default connect(

)(Home)
