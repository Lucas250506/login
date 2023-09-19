import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Escolher from '../pages/escolher'
import Errou from '../pages/errou'
import Acertou from '../pages/acertou'
import Quiz from '../pages/quiz'
import Errouu from '../pages/errouu'
import Acertouu from '../pages/acertouu'
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Escolher" 
        component= { Escolher } 
        options= { {headerShown: false} }
        />
         <Stack.Screen 
        name="Errou" 
        component= { Errou } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Acertou" 
        component= { Acertou } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Quiz" 
        component= { Quiz } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Errouu" 
        component= { Errouu } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Acertouu" 
        component= { Acertouu } 
        options= { {headerShown: false} }
        />
    </Stack.Navigator>
  )
}