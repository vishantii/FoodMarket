import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../Atoms';
import {IlEmptyOrder} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.pages}>
      <IlEmptyOrder />
      <Gap height={30} />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Seems like you have not</Text>
      <Text style={styles.subTitle}>ordered any food yet</Text>
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

export default EmptyOrder;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  buttonContainer: {width: '100%', paddingHorizontal: 80},
});
