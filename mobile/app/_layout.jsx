import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}


//화면 이동시 stack으로 인해 화면이 바뀜
// 핸드폰 처럼 뒤로버튼을 만들어 주는 기능

//<Stack screenOptions={{headerShown: false}} />
// 위에있는 뒤로버튼이 사라짐 