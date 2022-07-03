/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ScrollView,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ListFood from '../ListFood';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ListFood
          onPress={() => navigation.navigate('OrderDetail')}
          price="IDR 130000"
          orderItems={3}
          title="French Salad"
          images={FoodDummy1}
          type="in-progress"
        />
        <ListFood
          onPress={() => navigation.navigate('OrderDetail')}
          price="IDR 130000"
          orderItems={3}
          title="French Salad"
          images={FoodDummy2}
          type="in-progress"
        />
        <ListFood
          onPress={() => navigation.navigate('OrderDetail')}
          price="IDR 130000"
          orderItems={3}
          title="French Salad"
          images={FoodDummy3}
          type="in-progress"
        />
        <ListFood
          onPress={() => navigation.navigate('OrderDetail')}
          price="IDR 130000"
          orderItems={3}
          title="French Salad"
          images={FoodDummy4}
          type="in-progress"
        />
        <ListFood
          onPress={() => navigation.navigate('OrderDetail')}
          price="IDR 130000"
          orderItems={3}
          title="French Salad"
          images={FoodDummy1}
          type="in-progress"
        />
      </View>
    </ScrollView>
  );
};
const PastOrder = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ListFood
          title="French Salad"
          onPress={() => navigation.navigate('OrderDetail')}
          images={FoodDummy3}
          price="IDR 100000"
          orderItems={3}
          date="Jun 12, 24:00"
          type="past-order"
        />
        <ListFood
          title="French Salad"
          onPress={() => navigation.navigate('OrderDetail')}
          images={FoodDummy2}
          price="IDR 100000"
          orderItems={3}
          date="Jun 12, 24:00"
          type="past-order"
        />
        <ListFood
          title="French Salad"
          onPress={() => navigation.navigate('OrderDetail')}
          images={FoodDummy1}
          price="IDR 100000"
          orderItems={3}
          date="Jun 12, 24:00"
          type="past-order"
        />
        <ListFood
          title="French Salad"
          onPress={() => navigation.navigate('OrderDetail')}
          images={FoodDummy4}
          price="IDR 100000"
          orderItems={3}
          type="past-order"
          date="Jun 12, 24:00"
          status="Canceled"
        />
      </View>
    </ScrollView>
  );
};

const renderTabBar = props => {
  return (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#020202',
        height: 3,
        width: 1,
        marginLeft: 2,
      }}
      style={{
        backgroundColor: 'white',
        elevation: 0,
        borderBottomColor: '#F2F2F2',
        shadowOpacity: 0,
        borderBottomWidth: 1,
      }}
      tabStyle={{width: 'auto'}}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: focused ? '#020202' : '#8D92A3',
          }}>
          {route.title}
        </Text>
      )}
    />
  );
};

const OrderTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Order'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrder,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
