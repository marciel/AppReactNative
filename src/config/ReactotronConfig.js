import Reactotron from 'reactotron-react-native';

//Variável DEV vai ter informação true se está utilizando em ambiente de desenvolvimento
if(__DEV__){
  const tron = Reactotron.configure().useReactNative().connect();
  console.tron = tron;
  tron.clear();
}
