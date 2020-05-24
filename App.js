import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App( {navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Paws Off!"
        component={Home}
        options={{headerShown: false}}
        />
    <Stack.Screen name="Profile" component={Profile}
    options={{headerStyle: {backgroundColor: 'paleturquoise'}, headerRight: () => (<TouchableOpacity activeOpacity={0.5}
              onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('./home.png')} 
              style={styles.HomeStyle}
            />
            </TouchableOpacity>),
    }}
    />
    <Stack.Screen name="Connections" component={Connections} options={{headerStyle: {backgroundColor: 'paleturquoise'}, headerRight: () => (<TouchableOpacity activeOpacity={0.5}
              onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('./home.png')} 
              style={styles.HomeStyle}
            />
            </TouchableOpacity>),
    }}
    />
    <Stack.Screen name="FriendStatus" component={FriendStatus} options={{headerStyle: {backgroundColor: 'paleturquoise'}, headerRight: () => (<TouchableOpacity activeOpacity={0.5}
              onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('./home.png')} 
              style={styles.HomeStyle}
            />
            </TouchableOpacity>),
    }}
    />
    <Stack.Screen name="Accessories" component={Accessories} options={{headerStyle: {backgroundColor: 'paleturquoise'}, headerRight: () => (<TouchableOpacity activeOpacity={0.5}
              onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('./home.png')} 
              style={styles.HomeStyle}
            />
            </TouchableOpacity>),
    }}
    />
    <Stack.Screen name="Food" component={Food} options={{headerStyle: {backgroundColor: 'paleturquoise'}, headerRight: () => (<TouchableOpacity activeOpacity={0.5}
              onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('./home.png')} 
              style={styles.HomeStyle}
            />
            </TouchableOpacity>),
    }}
    />
    <Stack.Screen name="MySchedule" component={MySchedule} options={{headerStyle: {backgroundColor: 'paleturquoise'}, headerRight: () => (<TouchableOpacity activeOpacity={0.5}
              onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('./home.png')} 
              style={styles.HomeStyle}
            />
            </TouchableOpacity>),
    }}
    />
  </Stack.Navigator>
  </NavigationContainer>
  );
}

function Home( {navigation}) {
  return (
    <View style={styles.Base}>

        <View style={styles.Head}>
            <View style={{backgroundColor:'paleturquoise',flex:2,padding:'10'}}>
              <TouchableOpacity style={styles.LeftButton} activeOpacity={0.5}
              onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('./images.png')} 
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}>Profile</Text>
            </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'paleturquoise',flex:2,padding:'10'}}>

              <TouchableOpacity style={styles.RightButton} activeOpacity={0.5}
              onPress={() => alert('affirmation of the day')}>
            
            <Text style={styles.TextStyle}>Affirmations</Text>
            </TouchableOpacity>
            
            </View>
        </View>

        <View style={styles.Content}>
            <View style={{flex:2,padding:'10'}}>
            <Text style={styles.HeaderText}>{"\n"}Paws Off!</Text>
            <Text>{"\n"}</Text>
            <Image
              source={require('./images.png')} 
              style={styles.UserPetImage}
            />
            <Text>{"\n\t\t     "}Cocoa is hungry!</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', alignContent: 'center'}}>
            <Text>{"\n\t\t\t"}</Text>
            <Image
              source={require('./images.png')} 
              style={styles.ImageIconStyle}
            />
            <Text>$1000</Text>
            </View>
            </View>
        </View>
      
      <View style={styles.Bottom}>
            <View style={{flex:2,padding:'10'}}>
            </View>
            <View style={styles.Button}>
            <Button
        title="Friends"
        onPress={() => navigation.navigate('Connections')}
        color='black'
        />
        </View>
            <View style={styles.Button}>
            <Button
        title="Buy"
        onPress={() => navigation.navigate('Accessories')}
        color='black'
        />
        </View>
        <View style={styles.Button}>
            <Button
        title="Playtime"
        onPress={() => navigation.navigate('Food')}
        color='black'
        />
        </View>
        <View style={styles.Button}>
            <Button
        title="Gain $"
        onPress={() => navigation.navigate('MySchedule')}
        color='black'
        />
        </View>
        </View>
        </View>

  );
}

function Profile( {navigation} ) {
return (
  <View style={styles.Base}>
        <View style={styles.Content}>
            <View style={{flex:2,padding:'10'}}>
            <Text style={styles.HeaderText}>{"\n"}Profile</Text>
            <Text>{"\n"}</Text>
            <Image
              source={require('./images.png')} 
              style={styles.UserPetImage}
            />
            </View>
        </View>
      
      <View style={styles.Bottom}>
            <View style={{flex:2,padding:'10'}}>
            </View>
            <View style={styles.Button}>
            <Button
        title="Friends"
        onPress={() => navigation.navigate('Connections')}
        color='black'
        />
        </View>
            <View style={styles.Button}>
            <Button
        title="Buy"
        onPress={() => navigation.navigate('Accessories')}
        color='black'
        />
        </View>
        <View style={styles.Button}>
            <Button
        title="Playtime"
        onPress={() => navigation.navigate('Food')}
        color='black'
        />
        </View>
        <View style={styles.Button}>
            <Button
        title="Gain $"
        onPress={() => navigation.navigate('MySchedule')}
        color='black'
        />
        </View>
        </View>
  </View>
);
}

function Connections( {navigation} ) {
return (
  
  <View style={styles.AccessoriesContent}>
            <SafeAreaView style={styles.ViewContainer}>
              <ScrollView contentContainerStyle={styles.ScrollView}>
              <TouchableOpacity style={styles.FriendButton} activeOpacity={0.5}
              onPress={() => navigation.navigate('FriendStatus')}>
            <Image
              source={require('./images.png')} 
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}>Name: KevInTheKnow{"\n"}Status: Busy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FriendButton} activeOpacity={0.5}
              onPress={() => navigation.navigate('FriendStatus')}>
            <Image
              source={require('./images.png')} 
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}>Name: ChloWeGo{"\n"}Status: Busy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FriendButton} activeOpacity={0.5}
              onPress={() => navigation.navigate('FriendStatus')}>
            <Image
              source={require('./images.png')} 
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}>Name: LucyInTheSky{"\n"}Status: Free</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FriendButton} activeOpacity={0.5}
              onPress={() => navigation.navigate('FriendStatus')}>
            <Image
              source={require('./images.png')} 
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}>Name: ZoeHarper{"\n"}Status: Free</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FriendButton} activeOpacity={0.5}
              onPress={() => navigation.navigate('FriendStatus')}>
            <Image
              source={require('./images.png')} 
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}>Name: Master{"\n"}Status: Busy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FriendButton} activeOpacity={0.5}
              onPress={() => navigation.navigate('FriendStatus')}>
            <Image
              source={require('./images.png')} 
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}>Name: Pawtastic{"\n"}Status: Free</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FriendButton} activeOpacity={0.5}
              onPress={() => navigation.navigate('FriendStatus')}>
            <Image
              source={require('./images.png')} 
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}>Name: JohnDoe{"\n"}Status: Free</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FriendButton} activeOpacity={0.5}
              onPress={() => navigation.navigate('FriendStatus')}>
            <Image
              source={require('./images.png')} 
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}>Name: MisterCoolGuy{"\n"}Status: Free</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FriendButton} activeOpacity={0.5}
              onPress={() => navigation.navigate('FriendStatus')}>
            <Image
              source={require('./images.png')} 
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}>Name: TheLastAirbender{"\n"}Status: Busy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FriendButton} activeOpacity={0.5}
              onPress={() => navigation.navigate('FriendStatus')}>
            <Image
              source={require('./images.png')} 
              style={styles.ImageIconStyle}
            />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>ADD FRIENDS</Text>
            </TouchableOpacity>
              </ScrollView>
              
            </SafeAreaView>
            
      
      <View style={styles.Bottom}>
            <View style={{flex:2,padding:'10'}}>
            </View>
            <View style={styles.Button}>
            <Button
        title="Friends"
        onPress={() => navigation.navigate('Connections')}
        color='black'
        />
        </View>
            <View style={styles.Button}>
            <Button
        title="Buy"
        onPress={() => navigation.navigate('Accessories')}
        color='black'
        />
        </View>
        <View style={styles.Button}>
            <Button
        title="Playtime"
        onPress={() => navigation.navigate('Food')}
        color='black'
        />
        </View>
        <View style={styles.Button}>
            <Button
        title="Gain $"
        onPress={() => navigation.navigate('MySchedule')}
        color='black'
        />
        </View>
        </View>
        </View>
        
);
}

function FriendStatus( {navigation} ) {
return (
  <View style={styles.Base}>
        <View style={styles.Content}>
            <View style={{flex:2,padding:'10'}}>
            <Text style={styles.HeaderText}>{"\n"}Friend's Profile</Text>
            <Text>{"\n"}</Text>
            <Image
              source={require('./dogaccessorized.jpg')} 
              style={styles.UserPetImage}
            />
            <Text>{"\n\t\t "}Meet Baxter Beuford!</Text>
            </View>
        </View>
      
      <View style={styles.Bottom}>
            <View style={{flex:2,padding:'10'}}>
            </View>
            <View style={styles.Button}>
            <Button
        title="Friends"
        onPress={() => navigation.navigate('Connections')}
        color='black'
        />
        </View>
            <View style={styles.Button}>
            <Button
        title="Buy"
        onPress={() => navigation.navigate('Accessories')}
        color='black'
        />
        </View>
        <View style={styles.Button}>
            <Button
        title="Playtime"
        onPress={() => navigation.navigate('Food')}
        color='black'
        />
        </View>
        <View style={styles.Button}>
            <Button
        title="Gain $"
        onPress={() => navigation.navigate('MySchedule')}
        color='black'
        />
        </View>
        </View>
  </View>
);
}

function Accessories( {navigation} ) {
return (
<View style={styles.AccessoriesContent}>
<Text style={{fontSize: 20}}>{"\n"}Clothing</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('Clothing Purchased')}>
            <Image
              source={require('./shirt.png')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Shirt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('Clothing Purchased')}>
            <Image
              source={require('./shirt.png')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Pants</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('Clothing Purchased')}>
            <Image
              source={require('./shirt.png')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Costume</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('Clothing Purchased')}>
            <Image
              source={require('./shirt.png')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Shoes</Text>
            </TouchableOpacity>
      </View>
<Text style={{fontSize: 20}}>{"\n"}Collars</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('Collar Purchased')}>
            <Image
              source={require('./collar.jpg')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Sparkly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('Collar Purchased')}>
            <Image
              source={require('./collar.jpg')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Basic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('Collar Purchased')}>
            <Image
              source={require('./collar.jpg')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Special</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('Collar Purchased')}>
            <Image
              source={require('./collar.jpg')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>One Color</Text>
            </TouchableOpacity>
            </View>

            <Text style={{fontSize: 20}}>{"\n"}Treats</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('Treats Purchased')}>
            <Image
              source={require('./treat.jpg')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Biscuits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('Treats Purchased')}>
            <Image
              source={require('./treat.jpg')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Drinks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('Treats Purchased')}>
            <Image
              source={require('./treat.jpg')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Snacks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('Treats Purchased')}>
            <Image
              source={require('./treat.jpg')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Bones</Text>
            </TouchableOpacity>
      </View>

      <Text style={{fontSize: 20}}>{"\n"}Houses</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('House Purchased')}>
            <Image
              source={require('./doughouse.jpg')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Large</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('House Purchased')}>
            <Image
              source={require('./doughouse.jpg')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('House Purchased')}>
            <Image
              source={require('./doughouse.jpg')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Small</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccessoriesButton} activeOpacity={0.5}
              onPress={() => Alert.alert('House Purchased')}>
            <Image
              source={require('./doughouse.jpg')} 
              style={styles.ItemImageIconStyle}
            />
            <Text style={styles.AccessoriesTextStyle}>Unique</Text>
            </TouchableOpacity>
      </View>
      
      <View style={styles.Bottom}>
            <View style={{backgroundColor:'yellow',flex:2,padding:'10'}}>
            </View>
            <View style={styles.Button}>
            <Button
        title="Friends"
        onPress={() => navigation.navigate('Connections')}
        color='black'
        />
        </View>
            <View style={styles.Button}>
            <Button
        title="Buy"
        onPress={() => navigation.navigate('Accessories')}
        color='black'
        />
        </View>
        <View style={styles.Button}>
            <Button
        title="Playtime"
        onPress={() => navigation.navigate('Food')}
        color='black'
        />
        </View>
        <View style={styles.Button}>
            <Button
        title="Gain $"
        onPress={() => navigation.navigate('MySchedule')}
        color='black'
        />
        </View>
        </View>
</View>

);
}

function Food ( {navigation} ) {
return (
  <View style={styles.Head}>
  <Text>OHM NOM NOM page</Text>
  <Button title="go to home" onPress={() => navigation.navigate('Home')} />
  <Button title="go back" onPress={() => navigation.goBack()} />
  </View>
);
}

function MySchedule( {navigation} ) {
return (
  <View style={styles.Base}>
        <View style={styles.Content}>
            <View style={{flex:2,padding:'10'}}>
            <Text style={styles.HeaderText}>{"\n"}Profile</Text>
            <Text>{"\n"}</Text>
            <Image
              source={require('./calendar.jpg')} 
              style={styles.CalendarStyle}
            />
            
            </View>
        </View>
      
      <View style={styles.Bottom}>
            <View style={{flex:2,padding:'10'}}>
            </View>
            <View style={styles.Button}>
            <Button
        title="Friends"
        onPress={() => navigation.navigate('Connections')}
        color='black'
        />
        </View>
            <View style={styles.Button}>
            <Button
        title="Buy"
        onPress={() => navigation.navigate('Accessories')}
        color='black'
        />
        </View>
        <View style={styles.Button}>
            <Button
        title="Playtime"
        onPress={() => navigation.navigate('Food')}
        color='black'
        />
        </View>
        <View style={styles.Button}>
            <Button
        title="Gain $"
        onPress={() => navigation.navigate('MySchedule')}
        color='black'
        />
        </View>
        </View>
  </View>
);
}

const styles = StyleSheet.create({
  Base: {
    flexDirection:'column',
      flex:1,
      backgroundColor: 'paleturquoise',
  },
  Head: {
    flex:2,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    //marginBottom:5,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  LeftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'paleturquoise',
    borderWidth: 0.5,
    borderColor: 'paleturquoise',
    height: 40,
    width: 80,
    borderRadius: 5,
    margin: 5,
  },
  RightButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    Right: 0,
    backgroundColor: 'orange',
    borderWidth: 0.5,
    borderColor: 'black',
    height: 40,
    width: 105,
    borderRadius: 5,
    margin: 5,
  },
  FriendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'paleturquoise',
    borderWidth: 0.5,
    borderColor: 'paleturquoise',
    height: 40,
    width: 250,
    borderRadius: 5,
    margin: 5,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    borderRadius: 400/2,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  ItemImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 35,
    width: 40,
    resizeMode: 'stretch',
  },
  HomeStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    marginRight: 20,
  },
  AccessoriesTextStyle: {
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },
  HeaderText: {
    fontSize: 55,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Content: {
    flex:15,
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  AccessoriesContent: {
    flex:10,
    flexDirection:'column',
    backgroundColor: 'paleturquoise',
  },
  UserPetImage: {
    padding: 10,
    margin: 5,
    height: 250,
    width: 250,
    alignItems: 'center',
    resizeMode: 'stretch',
    borderRadius: 400/2,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  CalendarStyle: {
    padding: 10,
    margin: 5,
    height: 250,
    width: 320,
    alignItems: 'center',
    resizeMode: 'stretch',
    
    borderColor: 'black',
    borderWidth: 0.5,
  },
  ViewContainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  ScrollView: {
    backgroundColor: 'paleturquoise',
    marginHorizontal: 10,
    //paddingVertical: 10,
  },
  Bottom: {
    flex:1,
    flexDirection:'row',
    position: 'absolute',
    bottom: 0,
    justifyContent:'space-between',
    padding: '10',
    marginBottom:10,
    marginLeft: 10,
    marginRight: 10
  },
  Button: {
    backgroundColor: 'orange',
    width: '24%',
    height: 40,
    borderWidth: 0.5,
    borderColor: 'black',
    marginRight: 5,
  },
  AccessoriesButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
    height: 80,
    width: 80,
    
    margin: 5,
    borderRadius: 400/2,
  },
});
