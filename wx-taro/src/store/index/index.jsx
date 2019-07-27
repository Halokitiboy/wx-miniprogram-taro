import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'taro store 页',
    navigationBarBackgroundColor: "#0f0"
  }

  componentWillMount () { 
    console.log("ok")
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
    console.log('didshow')
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index center'>
        <Text>taro store页</Text>
      </View>
    )
  }
}
