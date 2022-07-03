import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, ItemValue, ListFood} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="You Deserve Better Meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ListFood
          title="Cherry Healthy"
          price="Rp.190000"
          images={FoodDummy1}
          items="20"
          type="order-summary"
          orderItems={14}
        />
        <Text style={styles.label}>Detail Transaction:</Text>
        <ItemValue item="test" value="123" />
        <ItemValue item="test" value="123" />
        <ItemValue item="test" value="123" />
        <ItemValue item="test" value="123" color="#1ABC9C" />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver To :</Text>
        <ItemValue item="test" value="123" />
        <ItemValue item="test" value="123" />
        <ItemValue item="test" value="123" />
        <ItemValue item="test" value="123" />
        <ItemValue item="test" value="123" />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Order Status</Text>
        <ItemValue item="test" value="123" />
      </View>
      <View style={styles.button}>
        <Button
          label="Cancel My Order"
          color="#D9435E"
          textColor="white"
          onPress={() => navigation.replace('OrderSuccess')}
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    color: '#020202',
    marginBottom: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
