import {Text, SafeAreaView, View} from 'react-native';
import React from 'react';
import {style} from './Home.style';
import Button from '../../components/Button/Button.component';
import Input from '../../components/Input/Input.component';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={style.head}>Login </Text>
        <Input />
        <Input />
        <Button />
      </View>
    </SafeAreaView>
  );
};

export default Home;
