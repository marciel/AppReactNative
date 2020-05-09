import React from 'react';
import {StatusBar} from 'react-native';

//import {View} from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';

//console.log('Hello World');
//console.tron.log('Teste');

export default function App(){
  //return <View />;
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
