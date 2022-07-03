import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, Gap, Button, TextInput, Select} from '../../components';
import {useForm} from '../../utils';
import {useSelector} from 'react-redux';
import Axios from 'axios';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    address: '',
    phoneNumber: '',
    houseNumber: '',
    city: 'Jakarta',
  });

  const registerReducer = useSelector(state => state.registerReducer);

  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer,
    };
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
      .then(res => {
        console.log(res?.data);
      })
      .catch(err => {
        console.log(err);
      });

    console.log(data);
    navigation.replace('SuccessSignUp');
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.pages}>
        <Header
          title="Address"
          subTitle="Make sure it's valid"
          onBack={() => {}}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No"
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No"
            placeholder="Type your house no"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectedChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button label="Sign Up Now" onPress={() => onSubmit()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  pages: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
