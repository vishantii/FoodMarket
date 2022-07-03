/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FoodDummy1} from '../../../assets';
import Rating from '../Rating';

const ListFood = ({
  images,
  title,
  price,
  onPress,
  rating,
  orderItems,
  type,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.desc}> {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.desc}> {price}</Text>
            </View>
            <Text style={styles.items}>{orderItems} Items </Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.desc}>
                {orderItems} Items . IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-order':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.desc}>
                {orderItems} Items . IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.desc}> {price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={images} style={styles.images} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  images: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    borderRadius: 8,
    marginRight: 12,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  desc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  items: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  content: {
    flex: 1,
  },
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  status: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#D9435E',
  },
});
