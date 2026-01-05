import { Colors } from '@/constants/Colors';
import {View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeScreen = ({children}) => {
  const insets = useSafeAreaInsets(); // 핸드폰의 안전영역을 가져옴
    return (
      <View style={{paddingTop: insets.top,flex:1, backgroundColor:Colors.background}}>
        {children}
      </View>
    )
  }

  export default SafeScreen
