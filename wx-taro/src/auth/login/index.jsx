import Taro ,{Component}from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
// import styles from './index.less'

export default class Test extends Component {
    config={
        navigationBarTitleText: 'taro登录页',
    }
  componentDidMount(){
    console.log('taro login')
  }
  render() {
    return (
      <View className="center">
        <Text>taro 登录页 </Text>
      </View>
    );
  }
}
