import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Success} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Success />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          label="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  pages: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  buttonContainer: {width: '100%', paddingHorizontal: 80},
});
