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

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ListFood
          onPress={() => navigation.navigate('FoodDetail')}
          price="IDR 130000"
          rating={3}
          title="French Salad"
          type="product"
          images={FoodDummy1}
        />
        <ListFood
          onPress={() => navigation.navigate('FoodDetail')}
          price="IDR 100000"
          rating={3}
          title="Apple Juice"
          type="product"
          images={FoodDummy2}
        />
        <ListFood
          onPress={() => navigation.navigate('FoodDetail')}
          price="IDR 289000"
          rating={3}
          title="Avocado Salad"
          type="product"
          images={FoodDummy3}
        />
        <ListFood
          onPress={() => navigation.navigate('FoodDetail')}
          price="IDR 190000"
          rating={3}
          title="Americano"
          type="product"
          images={FoodDummy4}
        />
        <ListFood
          onPress={() => navigation.navigate('FoodDetail')}
          price="IDR 130000"
          rating={3}
          title="French Salad"
          type="product"
          images={FoodDummy1}
        />
      </View>
    </ScrollView>
  );
};
const Popular = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ListFood
          onPress={() => navigation.navigate('FoodDetail')}
          type="product"
          images={FoodDummy3}
          title="French Salad"
          rating={3}
          price="IDR 130000"
        />
        <ListFood
          onPress={() => navigation.navigate('FoodDetail')}
          type="product"
          images={FoodDummy2}
          title="French Salad"
          price="IDR 130000"
          rating={3}
        />
        <ListFood
          onPress={() => navigation.navigate('FoodDetail')}
          type="product"
          images={FoodDummy1}
          title="French Salad"
          price="IDR 130000"
          rating={3}
        />
        <ListFood
          onPress={() => navigation.navigate('FoodDetail')}
          type="product"
          images={FoodDummy4}
          title="French Salad"
          price="IDR 130000"
          rating={3}
        />
      </View>
    </ScrollView>
  );
};
const Recommended = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ListFood
          onPress={() => navigation.navigate('FoodDetail')}
          type="product"
          images={FoodDummy4}
          title="French Salad"
          price="IDR 130000"
          rating={3}
        />
        <ListFood
          onPress={() => navigation.navigate('FoodDetail')}
          type="product"
          images={FoodDummy3}
          title="French Salad"
          price="IDR 130000"
          rating={3}
        />
        <ListFood
          onPress={() => navigation.navigate('FoodDetail')}
          type="product"
          images={FoodDummy2}
          title="French Salad"
          price="IDR 130000"
          rating={3}
        />
        <ListFood
          onPress={() => navigation.navigate('FoodDetail')}
          type="product"
          images={FoodDummy4}
          title="French Salad"
          price="IDR 130000"
          rating={3}
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

const HomeTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
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

export default HomeTabSection;

const styles = StyleSheet.create({});
