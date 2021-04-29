// import React, { useState, useEffect } from 'react';
// import { AsyncStorage, Text, View, StyleSheet, TextInput, TouchableOpacity, Button, SafeAreaView, FlatList, StatusBar, Alert, ScrollView, TouchableNativeFeedback} from 'react-native';
// import Constants from 'expo-constants';
// import { NavigationContainer, useNavigationState } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// import { ActivityIndicator, Avatar, DataTable, Divider, Title, Paragraph, List, Card } from 'react-native-paper';
// import { MaterialIcons } from '@expo/vector-icons'; 
// import {   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
//  } from '@react-navigation/drawer';
// import { Appbar, Drawer, FAB, Portal, Provider, Badge } from 'react-native-paper';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import Animated, { block } from 'react-native-reanimated';
// import { Thumbnail, Container, Header, Picker, ListItem, InputGroup, Content, Icon, Left, Body, Item, Input, Label, Form } from "native-base";
// import ToggleSwitch from 'toggle-switch-react-native';
// // ! icons
// import { AntDesign } from '@expo/vector-icons'; 
// import { Ionicons } from '@expo/vector-icons';
// import { Octicons } from '@expo/vector-icons'; 
// import { Feather } from '@expo/vector-icons'; 
// import { Entypo } from '@expo/vector-icons'; 
// import { FontAwesome } from '@expo/vector-icons'; 


// import { LinearGradient } from "expo-linear-gradient";


// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph
// } from 'react-native-chart-kit';

// // import SimpleCrypto from "simple-crypto-js"



// import { Dimensions } from 'react-native';
// const screenWidth = Dimensions.get('window').width

// // import Odoo from 'react-native-odoo-promise-based'
// import Odoo from 'react-native-odoo'



// // You can import from local files
// import AssetExample from './components/AssetExample';

// // or any pure javascript modules available in npm
// import { LongPressGestureHandler } from 'react-native-gesture-handler';

// // import { Base64 } from './node_modules/js-base64';
// // import { Base64 } from './node_modules/base64-js';
// // import base64 from 'react-native-base64'


// const AuthContext = React.createContext();


// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// // const APIDDATA = [...json]
// // console.log(APIDDATA)



// // console.log(username)





// console.log("application==============================================================================================")
// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//   datasets: [{
//     data: [ 20, 45, 28, 80, 99, 43 ]    
//   }]
// }

// // const DATAS = [
// //   {
// //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
// //     title: 'First Item',
// //   },
// //   {
// //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
// //     title: 'Second Item',
// //   },
// //   {
// //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
// //     title: 'Third Item',
// //   },
// // ];

// // const Item = ({ title }) => (
// //   <View style={styles.itemm}>
// //     <Text style={styles.titlee}>{title}</Text>
// //   </View>
// // );

// //!================= for tab chart ====================
// //! this week -- first   ===================
// const FirstRoute = () => {

//   const {analistw, analistlm, analistto} = React.useContext(AuthContext);

//   // debugger;
//   console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
//   // console.log(analistw.dashboards.visits)
//   console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')

//   if (analistw == 'apple' || analistw.dashboards.visits == undefined || analistw.dashboards.visits == 'undefined') {
//     return (
//       <View><Text>Not found data or searching a data</Text></View>
//     )
//   }






//   //! get a cgart list ==== dataa============
//   if (analistw == 'apple' || analistw == undefined || analistw == [] || analistw == {} ||  Object.keys(analistw.dashboards.visits).length === 0 && analistw.dashboards.visits.constructor === Object) {
//     var yviews = []
//     var chartdata = []
  
//     yviews = ['January', 'February', 'March', 'April', 'May', 'June']
//     chartdata = [          
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100]


//   } else {
//     var yviews = []
//     var chartdata = []
  

//     var tyty = analistw.dashboards.sales.graph[0].values //list
//     for(var i = 0; tyty.length > i; i++) {
//       yviews.push(tyty[i][0])
//       chartdata.push(tyty[i][1])
//     }



//   }



// return (
//   <View style={styles.tabBarr}>
//     <Text>Bezier Line Chart</Text>
//     <Button title="Go sale order" />


//     { analistw == "apple"   ? <View><Text>Data fetching</Text></View> :  <LineChart
//     data={{
//       labels:yviews,
//       datasets: [
//         {
//           data: chartdata
//         }
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     chartConfig={{
//       backgroundColor: 'orange',
//       backgroundGradientFrom: 'blue',
//       backgroundGradientTo: 'pink',
//       decimalPlaces: 2, // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16,
//       },
//     }}
//   bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   /> }



//     {(Object.keys(analistw.dashboards.visits).length === 0 && analistw.dashboards.visits.constructor === Object) || analistw.dashboards.sales.best_sellers == false ||  analistw == "apple" || analistw.dashboards.sales.best_sellers == undefined ? (<View><Text>Table data is not aviblae</Text></View>) : (<DataTable>
//         <DataTable.Header>
//           <DataTable.Title>PRODUCT</DataTable.Title>
//           <DataTable.Title numeric>QUANTITY</DataTable.Title>
//           <DataTable.Title numeric>SOLD</DataTable.Title>
//         </DataTable.Header>

//         <DataTable.Row>
//           <DataTable.Cell>{analistw.dashboards.sales.best_sellers[0].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistw.dashboards.sales.best_sellers[0].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistw.dashboards.sales.best_sellers[0].sales}</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
//           <DataTable.Cell>{analistw.dashboards.sales.best_sellers[1].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistw.dashboards.sales.best_sellers[1].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistw.dashboards.sales.best_sellers[1].sales}</DataTable.Cell>
//         </DataTable.Row>
//     </DataTable>) } 

//     { analistw == "apple" || (Object.keys(analistw.dashboards.visits).length === 0 && analistw.dashboards.visits.constructor === Object) ? <View><Text>Data fetching</Text></View> :
//     <View  style={styles.lastitem}>
//         <View><Text>Unpaid Orders : {analistw.dashboards.sales.summary.order_unpaid_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders To Invoice : {analistw.dashboards.sales.summary.order_to_invoice_count}</Text></View>  
//         <Divider />
//         <View><Text>Abandoned Carts : {analistw.dashboards.sales.summary.order_carts_abandoned_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders : {analistw.dashboards.sales.summary.order_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders/Day : {analistw.dashboards.sales.summary.order_per_day_ratio}</Text></View>  
//         <Divider />
//         <View><Text>Carts : {analistw.dashboards.sales.summary.order_carts_count}</Text></View>  
//         <Divider />
//         <View><Text>Conversion : {analistw.dashboards.sales.summary.order_convertion_pctg} %</Text></View>  
//         <Divider />
//         <View><Text>Sold : $ {analistw.dashboards.sales.summary.total_sold}</Text></View>  
//         <Divider />
//         <View><Text>Avg Order : $ {analistw.dashboards.sales.summary.order_sold_ratio}</Text></View>  
//    </View>
// }
//   </View>

// )};

// //! last week
// const LastWeekRoute = () => {

//   const {analistlw} = React.useContext(AuthContext);

//   console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
//   console.log(analistlw)
//   console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')

//   if (analistlw == 'apple' || analistlw.dashboards.visits == undefined || analistlw.dashboards.visits == 'undefined') {
//     return (
//       <View><Text>Not found data or searching a data</Text></View>
//     )
//   }






//   //! get a cgart list ==== dataa============
//   if (analistlw == 'apple' || analistlw == undefined || analistlw == [] || analistlw == {} ||  Object.keys(analistlw.dashboards.visits).length === 0 && analistlw.dashboards.visits.constructor === Object) {
//     var yviews = []
//     var chartdata = []
  
//     yviews = ['January', 'February', 'March', 'April', 'May', 'June']
//     chartdata = [          
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100]


//   } else {
//     var yviews = []
//     var chartdata = []
  

//     var tyty = analistlw.dashboards.sales.graph[0].values //list
//     for(var i = 0; tyty.length > i; i++) {
//       yviews.push(tyty[i][0])
//       chartdata.push(tyty[i][1])
//     }



//   }




// return (
//   <View style={styles.tabBarr}>
//     <Text>Bezier Line Chart</Text>
//     <Button title="Go sale order" />


//     { analistlw == "apple"  ? <View><Text>Data fetching</Text></View> :  <LineChart
//     data={{
//       labels:yviews,
//       datasets: [
//         {
//           data: chartdata
//         }
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     chartConfig={{
//       backgroundColor: 'orange',
//       backgroundGradientFrom: 'blue',
//       backgroundGradientTo: 'pink',
//       decimalPlaces: 2, // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16,
//       },
//     }}
//   bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   /> }



//     {(Object.keys(analistlw.dashboards.visits).length === 0 && analistlw.dashboards.visits.constructor === Object) || analistlw.dashboards.sales.best_sellers == false ||  analistlw == "apple" || analistlw.dashboards.sales.best_sellers == undefined ? (<View><Text>Table data is not aviblae</Text></View>) : (<DataTable>
//         <DataTable.Header>
//           <DataTable.Title>PRODUCT</DataTable.Title>
//           <DataTable.Title numeric>QUANTITY</DataTable.Title>
//           <DataTable.Title numeric>SOLD</DataTable.Title>
//         </DataTable.Header>

//         <DataTable.Row>
//           <DataTable.Cell>{analistlw.dashboards.sales.best_sellers[0].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistlw.dashboards.sales.best_sellers[0].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistlw.dashboards.sales.best_sellers[0].sales}</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
//           <DataTable.Cell>{analistlw.dashboards.sales.best_sellers[1].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistlw.dashboards.sales.best_sellers[1].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistlw.dashboards.sales.best_sellers[1].sales}</DataTable.Cell>
//         </DataTable.Row>
//     </DataTable>) } 

//     { analistlw == "apple" || (Object.keys(analistlw.dashboards.visits).length === 0 && analistlw.dashboards.visits.constructor === Object) ? <View><Text>Data fetching</Text></View> :
//     <View  style={styles.lastitem}>
//         <View><Text>Unpaid Orders : {analistlw.dashboards.sales.summary.order_unpaid_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders To Invoice : {analistlw.dashboards.sales.summary.order_to_invoice_count}</Text></View>  
//         <Divider />
//         <View><Text>Abandoned Carts : {analistlw.dashboards.sales.summary.order_carts_abandoned_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders : {analistlw.dashboards.sales.summary.order_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders/Day : {analistlw.dashboards.sales.summary.order_per_day_ratio}</Text></View>  
//         <Divider />
//         <View><Text>Carts : {analistlw.dashboards.sales.summary.order_carts_count}</Text></View>  
//         <Divider />
//         <View><Text>Conversion : {analistlw.dashboards.sales.summary.order_convertion_pctg} %</Text></View>  
//         <Divider />
//         <View><Text>Sold : $ {analistlw.dashboards.sales.summary.total_sold}</Text></View>  
//         <Divider />
//         <View><Text>Avg Order : $ {analistlw.dashboards.sales.summary.order_sold_ratio}</Text></View>  
//    </View>
// }
//   </View>

// )};

// //! this month
// const SecondRoute = () => {

//   const {analist} = React.useContext(AuthContext);

//   if (analist == 'apple' || analist.dashboards.visits == undefined || analist.dashboards.visits == 'undefined') {
//     return (
//       <View><Text>Not found data or searching a data</Text></View>
//     )
//   }


//     //! get a cgart list ==== dataa============
//     if (analist == 'apple' || analist == undefined || analist == [] || analist == {}||  Object.keys(analist.dashboards.visits).length === 0 && analist.dashboards.visits.constructor === Object) {
//       var yviews = []
//       var chartdata = []
    
//       yviews = ['January', 'February', 'March', 'April', 'May', 'June']
//       chartdata = [          
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100]
  
  
//     } else {
//       var yviews = []
//       var chartdata = []
    
  
//       var tyty = analist.dashboards.sales.graph[0].values //list
//       for(var i = 0; tyty.length > i; i++) {
//         yviews.push(tyty[i][0])
//         chartdata.push(tyty[i][1])
//       }
  
  
  
//     }


  

// return (
//   <View style={styles.tabBarr}>
//     <Text>Bezier Line Chart</Text>
//     <Button title="Go sale order" />

//       { analist == "apple"  ? <View><Text>Data fetching</Text></View> :  <LineChart
//     data={{
//       labels:yviews,
//       datasets: [
//         {
//           data: chartdata
//         }
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     chartConfig={{
//       backgroundColor: 'orange',
//       backgroundGradientFrom: 'blue',
//       backgroundGradientTo: 'pink',
//       decimalPlaces: 2, // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16,
//       },
//     }}
//   bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   /> }



//     {(Object.keys(analist.dashboards.visits).length === 0 && analist.dashboards.visits.constructor === Object) || analist.dashboards.sales.best_sellers == false ||  analist == "apple" || analist.dashboards.sales.best_sellers == undefined ? <View><Text>Data fetching</Text></View> : <DataTable>
//         <DataTable.Header>
//           <DataTable.Title>PRODUCT</DataTable.Title>
//           <DataTable.Title numeric>QUANTITY</DataTable.Title>
//           <DataTable.Title numeric>SOLD</DataTable.Title>
//         </DataTable.Header>

//         <DataTable.Row>
//           <DataTable.Cell>{analist.dashboards.sales.best_sellers[0].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analist.dashboards.sales.best_sellers[0].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analist.dashboards.sales.best_sellers[0].sales}</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
//           <DataTable.Cell>{analist.dashboards.sales.best_sellers[1].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analist.dashboards.sales.best_sellers[1].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analist.dashboards.sales.best_sellers[1].sales}</DataTable.Cell>
//         </DataTable.Row>
//     </DataTable> }

//     { analist == "apple" || (Object.keys(analist.dashboards.visits).length === 0 && analist.dashboards.visits.constructor === Object)? <View><Text>Data fetching</Text></View> :
//     <View  style={styles.lastitem}>
//         <View><Text>Unpaid Orders : {analist.dashboards.sales.summary.order_unpaid_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders To Invoice : {analist.dashboards.sales.summary.order_to_invoice_count}</Text></View>  
//         <Divider />
//         <View><Text>Abandoned Carts : {analist.dashboards.sales.summary.order_carts_abandoned_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders : {analist.dashboards.sales.summary.order_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders/Day : {analist.dashboards.sales.summary.order_per_day_ratio}</Text></View>  
//         <Divider />
//         <View><Text>Carts : {analist.dashboards.sales.summary.order_carts_count}</Text></View>  
//         <Divider />
//         <View><Text>Conversion : {analist.dashboards.sales.summary.order_convertion_pctg} %</Text></View>  
//         <Divider />
//         <View><Text>Sold : $ {analist.dashboards.sales.summary.total_sold}</Text></View>  
//         <Divider />
//         <View><Text>Avg Order : $ {analist.dashboards.sales.summary.order_sold_ratio}</Text></View>  
//    </View>
//     }
//   </View>
//    )
// }

// //! last month
// const LastMonthRoute = () => {

//   const {analistlm} = React.useContext(AuthContext);

//   if (analistlm == 'apple' || analistlm.dashboards.visits == undefined || analistlm.dashboards.visits == 'undefined') {
//     return (
//       <View><Text>Not found data or searching a data</Text></View>
//     )
//   }


//     //! get a cgart list ==== dataa============
//     if (analistlm == 'apple' || analistlm == undefined || analistlm == [] || analistlm == {}||  Object.keys(analistlm.dashboards.visits).length === 0 && analistlm.dashboards.visits.constructor === Object) {
//       var yviews = []
//       var chartdata = []
    
//       yviews = ['January', 'February', 'March', 'April', 'May', 'June']
//       chartdata = [          
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100]
  
  
//     } else {
//       var yviews = []
//       var chartdata = []
    
  
//       var tyty = analistlm.dashboards.sales.graph[0].values //list
//       for(var i = 0; tyty.length > i; i++) {
//         yviews.push(tyty[i][0])
//         chartdata.push(tyty[i][1])
//       }
  
  
  
//     }


  

// return (
//   <View style={styles.tabBarr}>
//     <Text>Bezier Line Chart</Text>
//     <Button title="Go sale order" />

//       { analistlm == "apple"  ? <View><Text>Data fetching</Text></View> :  <LineChart
//     data={{
//       labels:yviews,
//       datasets: [
//         {
//           data: chartdata
//         }
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     chartConfig={{
//       backgroundColor: 'orange',
//       backgroundGradientFrom: 'blue',
//       backgroundGradientTo: 'pink',
//       decimalPlaces: 2, // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16,
//       },
//     }}
//   bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   /> }



//     {  (Object.keys(analistlm.dashboards.visits).length === 0 && analistlm.dashboards.visits.constructor === Object) || analistlm.dashboards.sales.best_sellers == false ||  analistlm == "apple" || analistlm.dashboards.sales.best_sellers == undefined ? <View><Text>Data fetching</Text></View> : <DataTable>
//         <DataTable.Header>
//           <DataTable.Title>PRODUCT</DataTable.Title>
//           <DataTable.Title numeric>QUANTITY</DataTable.Title>
//           <DataTable.Title numeric>SOLD</DataTable.Title>
//         </DataTable.Header>

//         <DataTable.Row>
//           <DataTable.Cell>{analistlm.dashboards.sales.best_sellers[0].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistlm.dashboards.sales.best_sellers[0].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistlm.dashboards.sales.best_sellers[0].sales}</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
//           <DataTable.Cell>{analistlm.dashboards.sales.best_sellers[1].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistlm.dashboards.sales.best_sellers[1].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistlm.dashboards.sales.best_sellers[1].sales}</DataTable.Cell>
//         </DataTable.Row>
//     </DataTable> }

//     {analistlm == "apple" || (Object.keys(analistlm.dashboards.visits).length === 0 && analistlm.dashboards.visits.constructor === Object)  ? <View><Text>Data fetching</Text></View> :
//     <View  style={styles.lastitem}>
//         <View><Text>Unpaid Orders : {analistlm.dashboards.sales.summary.order_unpaid_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders To Invoice : {analistlm.dashboards.sales.summary.order_to_invoice_count}</Text></View>  
//         <Divider />
//         <View><Text>Abandoned Carts : {analistlm.dashboards.sales.summary.order_carts_abandoned_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders : {analistlm.dashboards.sales.summary.order_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders/Day : {analistlm.dashboards.sales.summary.order_per_day_ratio}</Text></View>  
//         <Divider />
//         <View><Text>Carts : {analistlm.dashboards.sales.summary.order_carts_count}</Text></View>  
//         <Divider />
//         <View><Text>Conversion : {analistlm.dashboards.sales.summary.order_convertion_pctg} %</Text></View>  
//         <Divider />
//         <View><Text>Sold : $ {analistlm.dashboards.sales.summary.total_sold}</Text></View>  
//         <Divider />
//         <View><Text>Avg Order : $ {analistlm.dashboards.sales.summary.order_sold_ratio}</Text></View>  
//    </View>
//     }
//   </View>
//    )
// }


// //! this year
// const ThirdRoute = () => {

//   const {analisty} = React.useContext(AuthContext);

//   if (analisty == 'apple' || analisty.dashboards.visits == undefined || analisty.dashboards.visits == 'undefined') {
//     return (
//       <View><Text>Not found data or searching a data</Text></View>
//     )
//   }


//     //! get a cgart list ==== dataa============
//     if (analisty == 'apple' || analisty == undefined || analisty == [] || analisty == {} || Object.keys(analisty.dashboards.visits).length === 0 && analisty.dashboards.visits.constructor === Object) {
//       // var yviews = []
//       var chartdata = []
    
//       // yviews = ['January', 'February', 'March', 'April', 'May', 'June', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
//       chartdata = [          
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100]
  
  
//     } else {
//       // var yviews = []
//       var chartdata = []
    
  
//       var tyty = analisty.dashboards.sales.graph[0].values //list
//       for(var i = 0; tyty.length > i; i++) {
//         // yviews.push(tyty[i][0])
//         chartdata.push(tyty[i][1])
//       }
  
  
  
//     }


  

// return (
//   <View style={styles.tabBarr}>
//     <Text>Bezier Line Chart</Text>
//     <Button title="Go sale order" />

//       { analisty == "apple"  ? <View><Text>Data fetching</Text></View> :  <LineChart
//     data={{
//       labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
//       datasets: [
//         {
//           data: chartdata
//         }
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     chartConfig={{
//       backgroundColor: 'orange',
//       backgroundGradientFrom: 'blue',
//       backgroundGradientTo: 'pink',
//       decimalPlaces: 2, // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16,
//       },
//     }}
//   bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   /> }



//     { (Object.keys(analisty.dashboards.visits).length === 0 && analisty.dashboards.visits.constructor === Object) || analisty.dashboards.sales.best_sellers == false ||  analisty == "apple" || analisty.dashboards.sales.best_sellers == undefined? <View><Text>Data fetching</Text></View> : <DataTable>
//         <DataTable.Header>
//           <DataTable.Title>PRODUCT</DataTable.Title>
//           <DataTable.Title numeric>QUANTITY</DataTable.Title>
//           <DataTable.Title numeric>SOLD</DataTable.Title>
//         </DataTable.Header>

//         <DataTable.Row>
//           <DataTable.Cell>{analisty.dashboards.sales.best_sellers[0].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analisty.dashboards.sales.best_sellers[0].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analisty.dashboards.sales.best_sellers[0].sales}</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
//           <DataTable.Cell>{analisty.dashboards.sales.best_sellers[1].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analisty.dashboards.sales.best_sellers[1].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analisty.dashboards.sales.best_sellers[1].sales}</DataTable.Cell>
//         </DataTable.Row>
//     </DataTable> }

//     { analisty == "apple" || (Object.keys(analisty.dashboards.visits).length === 0 && analisty.dashboards.visits.constructor === Object)? <View><Text>Data fetching</Text></View> :
//     <View  style={styles.lastitem}>
//         <View><Text>Unpaid Orders : {analisty.dashboards.sales.summary.order_unpaid_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders To Invoice : {analisty.dashboards.sales.summary.order_to_invoice_count}</Text></View>  
//         <Divider />
//         <View><Text>Abandoned Carts : {analisty.dashboards.sales.summary.order_carts_abandoned_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders : {analisty.dashboards.sales.summary.order_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders/Day : {analisty.dashboards.sales.summary.order_per_day_ratio}</Text></View>  
//         <Divider />
//         <View><Text>Carts : {analisty.dashboards.sales.summary.order_carts_count}</Text></View>  
//         <Divider />
//         <View><Text>Conversion : {analisty.dashboards.sales.summary.order_convertion_pctg} %</Text></View>  
//         <Divider />
//         <View><Text>Sold : $ {analisty.dashboards.sales.summary.total_sold}</Text></View>  
//         <Divider />
//         <View><Text>Avg Order : $ {analisty.dashboards.sales.summary.order_sold_ratio}</Text></View>  
//    </View>
//     }
//   </View>
//    )
// }

// //!  TOday
// const TodayRoute = () => {

//   const {analistto} = React.useContext(AuthContext);

//   if (analistto == 'apple' || analistto.dashboards.visits == undefined || analistto.dashboards.visits == 'undefined') {
//     return (
//       <View><Text>Not found data or searching a data</Text></View>
//     )
//   }


//   console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
//   console.log(analistto)
//   console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')







//   //! get a cgart list ==== dataa============
//   if (analistto == 'apple' || analistto == undefined || analistto == [] || analistto == {} ||  Object.keys(analistto.dashboards.visits).length === 0 && analistto.dashboards.visits.constructor === Object) {
//     var yviews = []
//     var chartdata = []
  
//     yviews = ['January', 'February', 'March', 'April', 'May', 'June']
//     chartdata = [          
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100]


//   } else {
//     var yviews = []
//     var chartdata = []
  

//     var tyty = analistto.dashboards.sales.graph[0].values //list
//     for(var i = 0; tyty.length > i; i++) {
//       yviews.push(tyty[i][0])
//       chartdata.push(tyty[i][1])
//     }



//   }


// return (
//   <View style={styles.tabBarr}>
//     <Text>Bezier Line Chart</Text>
//     <Button title="Go sale order" />


//     { analistto == "apple"  ? <View><Text>Data fetching</Text></View> :  <LineChart
//     data={{
//       labels:yviews,
//       datasets: [
//         {
//           data: chartdata
//         }
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     chartConfig={{
//       backgroundColor: 'orange',
//       backgroundGradientFrom: 'blue',
//       backgroundGradientTo: 'pink',
//       decimalPlaces: 2, // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16,
//       },
//     }}
//   bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   /> }



//     {(Object.keys(analistto.dashboards.visits).length === 0 && analistto.dashboards.visits.constructor === Object) || analistto.dashboards.sales.best_sellers == false ||  analistto == "apple" || analistto.dashboards.sales.best_sellers == undefined ? (<View><Text>Table data is not aviblae</Text></View>) : (<DataTable>
//         <DataTable.Header>
//           <DataTable.Title>PRODUCT</DataTable.Title>
//           <DataTable.Title numeric>QUANTITY</DataTable.Title>
//           <DataTable.Title numeric>SOLD</DataTable.Title>
//         </DataTable.Header>

//         <DataTable.Row>
//           <DataTable.Cell>{analistto.dashboards.sales.best_sellers[0].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistto.dashboards.sales.best_sellers[0].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistto.dashboards.sales.best_sellers[0].sales}</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
//           <DataTable.Cell>{analistto.dashboards.sales.best_sellers[1].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistto.dashboards.sales.best_sellers[1].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistto.dashboards.sales.best_sellers[1].sales}</DataTable.Cell>
//         </DataTable.Row>
//     </DataTable>) } 

//     { analistto == "apple" || (Object.keys(analistto.dashboards.visits).length === 0 && analistto.dashboards.visits.constructor === Object) ? <View><Text>Data fetching</Text></View> :
//     <View  style={styles.lastitem}>
//         <View><Text>Unpaid Orders : {analistto.dashboards.sales.summary.order_unpaid_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders To Invoice : {analistto.dashboards.sales.summary.order_to_invoice_count}</Text></View>  
//         <Divider />
//         <View><Text>Abandoned Carts : {analistto.dashboards.sales.summary.order_carts_abandoned_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders : {analistto.dashboards.sales.summary.order_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders/Day : {analistto.dashboards.sales.summary.order_per_day_ratio}</Text></View>  
//         <Divider />
//         <View><Text>Carts : {analistto.dashboards.sales.summary.order_carts_count}</Text></View>  
//         <Divider />
//         <View><Text>Conversion : {analistto.dashboards.sales.summary.order_convertion_pctg} %</Text></View>  
//         <Divider />
//         <View><Text>Sold : $ {analistto.dashboards.sales.summary.total_sold}</Text></View>  
//         <Divider />
//         <View><Text>Avg Order : $ {analistto.dashboards.sales.summary.order_sold_ratio}</Text></View>  
//    </View>
// }
//   </View>

// )};

// //! Yesteday
// const YodayRoute = () => {

//   const {analistyo} = React.useContext(AuthContext);

//   if (analistyo == 'apple' || analistyo.dashboards.visits == undefined || analistyo.dashboards.visits == 'undefined') {
//     return (
//       <View><Text>Not found data or searching a data</Text></View>
//     )
//   }


//   console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
//   console.log(analistyo)
//   console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')







//   //! get a cgart list ==== dataa============
//   if (analistyo == 'apple' || analistyo == undefined || analistyo == [] || analistyo == {} ||  Object.keys(analistyo.dashboards.visits).length === 0 && analistyo.dashboards.visits.constructor === Object) {
//     var yviews = []
//     var chartdata = []
  
//     yviews = ['January', 'February', 'March', 'April', 'May', 'June']
//     chartdata = [          
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100]


//   } else {
//     var yviews = []
//     var chartdata = []
  

//     var tyty = analistyo.dashboards.sales.graph[0].values //list
//     for(var i = 0; tyty.length > i; i++) {
//       yviews.push(tyty[i][0])
//       chartdata.push(tyty[i][1])
//     }



//   }


// return (
//   <View style={styles.tabBarr}>
//     <Text>Bezier Line Chart</Text>
//     <Button title="Go sale order" />


//     { analistyo == "apple"  ? <View><Text>Data fetching</Text></View> :  <LineChart
//     data={{
//       labels:yviews,
//       datasets: [
//         {
//           data: chartdata
//         }
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     chartConfig={{
//       backgroundColor: 'orange',
//       backgroundGradientFrom: 'blue',
//       backgroundGradientTo: 'pink',
//       decimalPlaces: 2, // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16,
//       },
//     }}
//   bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   /> }



//     {(Object.keys(analistyo.dashboards.visits).length === 0 && analistyo.dashboards.visits.constructor === Object) || analistyo.dashboards.sales.best_sellers == false ||  analistyo == "apple" || analistyo.dashboards.sales.best_sellers == undefined ? (<View><Text>Table data is not aviblae</Text></View>) : (<DataTable>
//         <DataTable.Header>
//           <DataTable.Title>PRODUCT</DataTable.Title>
//           <DataTable.Title numeric>QUANTITY</DataTable.Title>
//           <DataTable.Title numeric>SOLD</DataTable.Title>
//         </DataTable.Header>

//         <DataTable.Row>
//           <DataTable.Cell>{analistyo.dashboards.sales.best_sellers[0].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistyo.dashboards.sales.best_sellers[0].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistyo.dashboards.sales.best_sellers[0].sales}</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
//           <DataTable.Cell>{analistyo.dashboards.sales.best_sellers[1].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistyo.dashboards.sales.best_sellers[1].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analistyo.dashboards.sales.best_sellers[1].sales}</DataTable.Cell>
//         </DataTable.Row>
//     </DataTable>) } 

//     { analistyo == "apple" || (Object.keys(analistyo.dashboards.visits).length === 0 && analistyo.dashboards.visits.constructor === Object)  ? <View><Text>Data fetching</Text></View> :
//     <View  style={styles.lastitem}>
//         <View><Text>Unpaid Orders : {analistyo.dashboards.sales.summary.order_unpaid_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders To Invoice : {analistyo.dashboards.sales.summary.order_to_invoice_count}</Text></View>  
//         <Divider />
//         <View><Text>Abandoned Carts : {analistyo.dashboards.sales.summary.order_carts_abandoned_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders : {analistyo.dashboards.sales.summary.order_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders/Day : {analistyo.dashboards.sales.summary.order_per_day_ratio}</Text></View>  
//         <Divider />
//         <View><Text>Carts : {analistyo.dashboards.sales.summary.order_carts_count}</Text></View>  
//         <Divider />
//         <View><Text>Conversion : {analistyo.dashboards.sales.summary.order_convertion_pctg} %</Text></View>  
//         <Divider />
//         <View><Text>Sold : $ {analistyo.dashboards.sales.summary.total_sold}</Text></View>  
//         <Divider />
//         <View><Text>Avg Order : $ {analistyo.dashboards.sales.summary.order_sold_ratio}</Text></View>  
//    </View>
// }
//   </View>

// )};

// //!=================for tab chart=======================================

// class SettingsScreen extends React.Component {
//   state = {
//     index: 0,
//     routes: [
//       { key: 'first', title: 'This week' },
//       { key: 'second', title: 'This Month' },
//       { key: 'third', title: 'This Year' },
//       { key: 'today', title: 'Today' },
//       { key: 'yoday', title: 'Yesterday' },
//       { key: 'lastweek', title: 'Last Week' },
//       { key: 'lastmonth', title: 'Last Month' }


//     ],
//   };

//   _handleIndexChange = (index) => this.setState({ index });

//   _renderTabBar = (props) => {
//     const inputRange = props.navigationState.routes.map((x, i) => i);

//     return (
//       <SafeAreaView style={styles.containerww}>

//       <ScrollView horizontal={true} style={styles.tss}>

//       <View style={styles.tabBar}>
//         {props.navigationState.routes.map((route, i) => {
//           const color = Animated.color(
//             Animated.round(
//               Animated.interpolate(props.position, {
//                 inputRange,
//                 outputRange: inputRange.map((inputIndex) =>
//                   inputIndex === i ? 255 : 0
//                 ),
//               })
//             ),
//             0,
//             0
//           );

//           return (
//           <>
//             {/* <Appbar.Header>
//             <Appbar.Content title="Title" subtitle="Subtitle" />
//           </Appbar.Header> */}

//             <TouchableOpacity
//               style={styles.tabItem}
//               onPress={() => this.setState({ index: i })}>
//               <Animated.Text style={{ color }}>{route.title}</Animated.Text>
//             </TouchableOpacity>

//           </>
//           );
//         })}
//       </View>
//     </ScrollView>
//     </SafeAreaView>


//     );
//   };

//   _renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//     third : ThirdRoute,
//     today :TodayRoute,
//     yoday :YodayRoute,
//     lastweek: LastWeekRoute,
//     lastmonth: LastMonthRoute
//   });

//   render() {
//     return (
//       <>

//         <TabView
//         style={styles.tbb}
//           navigationState={this.state}
//           renderScene={this._renderScene}
//           renderTabBar={this._renderTabBar}
//           onIndexChange={this._handleIndexChange}
//         />
//         <Text>Application</Text>
//         <Text>Application</Text>
//         <Text>Application</Text>
//         <Text>Application</Text>
//         <Text>Application</Text>


//       </>
//     );
//   }
// }

// //!=================for tab chart=======================================

// // const odoo = new Odoo({
// //   host: '192.168.4.100',
// //   port: 8014, /* Defaults to 80 if not specified */
// //   database: 'demo_db_v14',
// //   username: 'admin', /* Optional if using a stored session_id */
// //   password: 'admin', /* Optional if using a stored session_id */
// //   // sid: 'fd60b09fdb082f7c3c8f6e376f264c611942eda6', /* Optional if using username/password */
// //   protocol: 'http' /* Defaults to http if not specified */
// // })

// // const odoo = new Odoo({
// //   host: '192.168.4.100',
// //   port: 8014,
// //   database: 'demo_db_v14',
// //   username: 'admin',
// //   password: 'admin'
// // });
// // console.log(username)


// // odoo.connect().then(response => {
// //    console.log(response.data.user_context)
// //   //  const context = response.data.user_context
// //   //  console.log(context)
// // }).catch(e => { console.log('error') })

// // odoo.connect(function (err) {
// //   if (err) { return console.log(err); }
// //   console.log('connect is ready stedy go')
// // });


// /* Get partner from server example */
// // const  params = {
// //   ids: [324,323],
// //   fields: [ 'name' ],
// // }

// // console.log('11')
// // odoo.get('mix.spt', params , "bd2144fff1f7b41f4e152a956c83ccb871b7689b"
// // ).then(response => { console.log(response) }).catch(e => { console.log('error') })
// // console.log('22')

// // ! --- get
// // var params = {
// //   ids: [1,2,323,324],
// //   fields: [ 'name' ],
// // }; //params
// // odoo.get('mix.spt', params, function (err, partners) {
// //   if (err) { return console.log(err); }
 
// //   console.log(partners);
// //   var Dataa = [...partners]
// //   console.log(Dataa)
// // // // [  
// // //   { id: 1, name: 'Demo Company' },
// // //   { id: 3, name: 'Administrator' },
// // //   { id: 4, name: 'Public user' },
// // //   { id: 5, name: 'Demo User' }
// // // ]
// // }); //get

// //! --- search
// // var params = {
// //   // ids: [1,2,3,4,5,10,11,12,13,14,15],
// //   domain: [ [ 'classFull', '=', 'True' ]],
// //   fields: [ 'name'],
// //   // order: 'list_price',
// //   // limit: 5,
// //   // offset: 0,  
// // }; //params
// // odoo.search_read('classs.spt', params, function (err, products) {
// //   if (err) { return console.log(err); }
 
// //   console.log(products);
// // // [
// // //   { list_price: 60, id: 52, name: 'Router R430' },
// // //   { list_price: 62, id: 39, name: 'Headset standard' }
// // // ]
 
// // }); //search_read


// //! ---- rip
// // Generic RPC call
// // Note that, unlike the other methods, the context is not automatically included 


// //!==========================================
// // =====================================================================================================================

// console.log('not work well===========================================================================================')

// function SignInScreen({ navigation }) {
  
//   //! react-hook
//   const [username, setUsername] = useState('');
//   const [database, setDatabase] = useState('');
//   const [url, setUrl] = useState('');
//   const [password, setPassword] = useState('');
//   const [mydata, setMydata] = useState([]);

//   const [usernameodoo, setUsernameodoo] = useState('');
//   const [databaseodoo, setDatabaseodoo] = useState('');
//   const [urlodoo, setUrlodoo] = useState('');
//   const [passwordodoo, setPasswordodoo] = useState('');

//   const {signinin, app, partnersss} = React.useContext(AuthContext);
//   console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaa')
//   console.log(app)
//   console.log(signinin)
//   console.log(partnersss)
//   console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111')


//   console.log(username)
//   console.log(database)
//   console.log(url)
//   console.log(password)

//   console.log(usernameodoo)
//   console.log(databaseodoo)
//   console.log(urlodoo)
//   console.log(passwordodoo)

//   // var stater = btoa("123")
//   // console.log(stater)

//   // var endd = atob(stater)
//   // console.log(endd)



  



  
// //   useEffect(() => {   
// //     console.log('================================usee Effect run it==============================')
// //     // Update the document title using the browser API
// //     const odoo = new Odoo({
// //       host: urlodoo,
// //       port: 8014,
// //       database: databaseodoo,
// //       username: usernameodoo,
// //       password: passwordodoo
// //     });

// //     odoo.connect(function (err) {
// //       if (err) { return console.log(err); }
// //       console.log('connect is ready stedy go')
// //       // console.log()
// //     });

// //     // odoo.connect(res => console.log(res))


// //   //! --- get
// //     var params = {
// //       ids: [1,2,323,324,325, 326, 327],
// //       fields: [ 'name' ],
// //     }; //params
// //     odoo.get('mix.spt', params, function (err, partners) {
// //       if (err) { return console.log(err); }
      
// //       console.log(partners);
// //       setMydata([...partners])


      

// //       // console.log(Dataa)
// //     // [
// //     //   { id: 1, name: 'Demo Company' },
// //     //   { id: 3, name: 'Administrator' },
// //     //   { id: 4, name: 'Public user' },
// //     //   { id: 5, name: 'Demo User' }
// //     // ]
// //     }); //get


  
  
// // }, [usernameodoo]); 

// // console.log(Dataa)

// const onPress = () => {

//   if(username == 'undefined' || username == '' || database == 'undefined' || database == '' || password == 'undefined' || password == '' || url == 'undefined' || url == ''){
//     Alert.alert('OOPS', 'You Forget to Enter Something', [
//       {text: 'Understood', onPress: () => console.log('alert closed') }
//     ]);
//   } else {

//     setUsername(username);
//     setUsername(username => setUsernameodoo(username));
//     setUsername('')
//     setDatabase(database);
//     setDatabase(database => setDatabaseodoo(database));
//     setDatabase('');
//     setPassword(password);
//     setPassword(password => setPasswordodoo(password));
//     setPassword('');
//     setUrl(url);
//     setUrl(url => setUrlodoo(url));
//     setUrl('');

//     signinin({
//       username,
//       database,
//       password,
//       url
//     })
  
   
//   }


//   // setUsername(username);
//   // setUsername(username => setUsernameodoo(username));
//   // setDatabase(database);
//   // setDatabase(database => setDatabaseodoo(database));
//   // setPassword(password);
//   // setPassword(password => setPasswordodoo(password));
//   // setUrl(url);
//   // setUrl(url => setUrlodoo(url));


//   // setUrl(username => setDatabase(username));

//   // setUsername(username => setDatabase(username));


//   // setUsername(username => setUsernameodoo(username));
//   // setDatabase(database => setDatabaseodoo(database));
//   // setPassword(password => setUrlodoo(password));
//   // setUrl(url => setPasswordodoo(url));



// }

// // const onPress = () => setUrl(username => setDatabase(username));

// const renderItem = ({ item }) => (
//   <Item title={item.name} />
// );


//   return (

//     <View style={styles.container}>
  
//  <Text style={styles.paragraph}>
//             Odoo Sign In             
//       </Text>
//       {/* <TextInput
//           style={styles.input}
//           placeholder='UserName'
//           onChangeText={username => setUsername(username)}
//           defaultValue={username}  
//           activeOpacity={.7}
//       />
//       <TextInput
//           style={styles.input}   
//           placeholder='Database'
//           onChangeText={database => setDatabase(database)}
//           defaultValue={database}  
//           activeOpacity={.7}

//       />
//       <TextInput
//           style={styles.input}
//           placeholder='Url'
//           onChangeText={url => setUrl(url)}
//           defaultValue={url}  
//           activeOpacity={.7}

//       />
//       <TextInput
//           style={styles.input}
//           placeholder='Password'
//           onChangeText={password => setPassword(password)}
//           defaultValue={password} 
//           secureTextEntry 
//           activeOpacity={.7}

//       /> */}
//            <View style={{marginTop: 10, marginHorizontal: 10}}>
//            <Item floatingLabel>
//               <Label>Username</Label>
//               <Input onChangeText={username => setUsername(username)}
//                    defaultValue={username}  
//                   />
//             </Item></View>
//             <View style={{marginTop: 10, marginHorizontal: 10}}>
//            <Item floatingLabel>
//               <Label>Database</Label>
//               <Input  onChangeText={database => setDatabase(database)}
//                      defaultValue={database}  
//                   />
//             </Item></View>
//             <View style={{marginTop: 10, marginHorizontal: 10}}>
//            <Item floatingLabel>
//               <Label>URL</Label>
//               <Input  onChangeText={url => setUrl(url)}
//                 defaultValue={url}  
//                 />
//             </Item></View>
//             <View style={{marginTop: 10, marginHorizontal: 10}}>
//            <Item floatingLabel>
//               <Label>Password</Label>
//               <Input onChangeText={password => setPassword(password)}
//                  defaultValue={password} 
//                 secureTextEntry/>
//             </Item></View>

//     {/* <Button
//         title="Dashborad Page"
//         onPress={() => navigation.navigate('Details')}
//       /> */}
//     {/* <TouchableOpacity onPress={onPress}>
//       <View style={styles.button}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </View>
//     </TouchableOpacity> */}
//     <TouchableOpacity onPress={onPress} style={styles.linearGradient} activeOpacity={.7} >
//           <LinearGradient style={styles.linearGradientt} colors={['#3068cc', '#6190E8']} 
//           start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}   locations={[0.1, 0.9]}>
//               <Text style={styles.buttonText}> Log in </Text>
//           </LinearGradient>
//      </TouchableOpacity>

//     {/* <SafeAreaView style={styles.containerr}>
//       <FlatList
//         data={mydata}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView> */}

//       {/* <Card>
//         <AssetExample />
//       </Card> */}
//     </View>

    
//   );
// }

// function HomeScreen({ navigation }) {

//   const {signinin, signOut, app, partnersss, uidatas, analist} = React.useContext(AuthContext);
//   console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
//   console.log(signinin)
//   console.log(analist)
//   // console.log(analist.dashboards)
//   console.log(analist)

//   console.log(uidatas)
//   console.log(app)
//   console.log(partnersss)
//   console.log(analist)

//   const [state, setState] = React.useState({ open: false });

//   const onStateChange = ({ open }) => setState({ open });

//   const { open } = state;


//   // console.log(analist.dashboards.sales.best_sellers)

//   // console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
  
//   //! get a cgart list ==== dataa============
//   if (analist == 'apple' || analist == undefined || analist == [] || analist == {} || analist == false ||  Object.keys(analist.dashboards.visits).length === 0 && analist.dashboards.visits.constructor === Object) {
//     var yviews = []
//     var chartdata = []
  
//     yviews = ['January', 'February', 'March', 'April', 'May', 'June']
//     chartdata = [          
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100,
//       Math.random() * 100]


//   } else {
//     var yviews = []
//     var chartdata = []
  

//     var tyty = analist.dashboards.sales.graph[0].values //list
//     for(var i = 0; tyty.length > i; i++) {
//       yviews.push(tyty[i][0])
//       chartdata.push(tyty[i][1])
//     }



//   }

//   // const tokens = props.userToken;
  

//   // const { itemId } = route.params;
//   // const { otherParam } = route.params;


//   console.log('application')
//   // console.log(partnersss)
//   console.log('application')

// // const commitsData = [
// //   { date: "2017-01-02", count: 1 },
// //   { date: "2017-01-03", count: 2 },
// //   { date: "2017-01-04", count: 3 },
// //   { date: "2017-01-05", count: 4 },
// //   { date: "2017-01-06", count: 5 },
// //   { date: "2017-01-30", count: 2 },
// //   { date: "2017-01-31", count: 3 },
// //   { date: "2017-03-01", count: 2 },
// //   { date: "2017-04-02", count: 4 },
// //   { date: "2017-03-05", count: 2 },
// //   { date: "2017-02-30", count: 4 }
// // ];



//   const renderItem = ({ item }) => (
//     <View>
//       <Item title={item.name} />
//     </View>
//   );

//   return (
//     <>
//   <Appbar.Header style={{backgroundColor: '#ffffff', fontWeight: 'bold'}}>
//       <Appbar.Action size={30} icon="menu" color="#3068cc" onPress={() => navigation.openDrawer()}/>
//       {/* <AntDesign onPress={() => navigation.openDrawer()} name="menuunfold" size={26} color="#6A82FB" iconStyle={{marginLeft: 20}} style={{marginHorizontal: 10}} /> */}
//       <Appbar.Content title="Home" color="black" titleStyle={{ fontWeight: 'bold'}}/>
//       <Appbar.Action icon="magnify"  color="#3068cc"/>
//       {/* <Appbar.Action icon="dots-vertical" color="#3068cc"/> */}
//   </Appbar.Header>

//     <SafeAreaView>

//     <ScrollView prop nestedScrollEnabled={true}> 

//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fbfcff', paddingBottom: 120 }}>

//        {/* ! sale order list */}
//       {/* <SafeAreaView style={styles.containerr}>
//       <View>
//         <View>
//         <FlatList
//           data={uidatas}
//           renderItem={renderItem}
//           keyExtractor={item => item.name}
//           nestedScrollEnabled={true}
//           numColumns={2}
//         />
//       </View>

//         </View>
//       </SafeAreaView> */}
//       {/*! sale order list */}

//     <View style={styles.containeraas}>
//       <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple('red')}>
//         <View style={styles.containeraa}>
//           {/* <Text style={styles.paragraphaa}> */}
//           <AntDesign name="home" size={30} color="red" borderRadiusborderRadius={40} backgroundColor="blue"/> 
//           {/* </Text> */}
//           <Text style={styles.cardtext}>Home</Text>
//         </View></TouchableNativeFeedback>
//         <TouchableNativeFeedback      onPress={() => {
//           navigation.navigate('Sale Order');
//         }}
//  background={TouchableNativeFeedback.Ripple('blue')}>
//         <View style={styles.containeraa}>
//           {/* <Text style={styles.paragraphaa}> */}
//           <AntDesign name="infocirlceo" size={30} color="blue" /> 
//           <Text style={styles.cardtext}>Order</Text>
 
//           {/* </Text> */}
//         </View></TouchableNativeFeedback>
//      </View>
//      <View style={styles.containeraas}>
//      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('green')}         
//      onPress={() => {
//           navigation.navigate('Settings');
//         }}
// >
//         <View style={styles.containeraa}>
//           {/* <Text style={styles.paragraphaa}> */}
//           <Octicons name="dashboard" size={30} color="green" /> 
//           <Text style={styles.cardtext}>Dashborad</Text>

//           {/* </Text> */}
//         </View>
//         </TouchableNativeFeedback>
//         <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('orange')}
//              onPress={() => {
//               navigation.navigate('Task side');
//             }}
//     >
//         <View style={styles.containeraa}>
//           {/* <Text style={styles.paragraphaa}> */}
//           <AntDesign name="checksquareo" size={30} color="orange" /> 
//           <Text style={styles.cardtext}>Task</Text>
 
//            {/* </Text> */}
//         </View>
//         </TouchableNativeFeedback>
//      </View>
//      <View style={styles.containeraas}>
//      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('grey')}
//                   onPress={() => {
//                     navigation.navigate('User');
//                   }}
//       >
//         <View style={styles.containeraa}>
//           {/* <Text style={styles.paragraphaa}> */}
//           <AntDesign name="adduser" size={30} color="grey" /> 
//           <Text style={styles.cardtext}>User</Text>
//           {/* </Text> */}
//         </View>
//         </TouchableNativeFeedback>
//         <TouchableNativeFeedback onPress={() => {
//           navigation.navigate('Product'); }}
//  background={TouchableNativeFeedback.Ripple('pink')}>
//         <View style={styles.containeraa}>
//           {/* <Text style={styles.paragraphaa}> */}
//           <AntDesign name="shoppingcart" size={30} color="pink" />
//           <Text style={styles.cardtext}>Product</Text>
//           {/* </Text> */}
//         </View>
//         </TouchableNativeFeedback>

//      </View>


//       {/* <Text>Home Screen</Text> */}
//   {/* <Text>{value.names}</Text> */}

//       {/* <Text>  {tokens} </Text> */}

//       {/* <Button
//         title="Go to Home Page... again"
//         onPress={() => navigation.navigate('Home')}
//       /> */}
//       {/* <Button title="Sign out" onPress={signOut} style={{ margin: 50 }}/> */}
//       {/* <TouchableOpacity  style={styles.linearGradient} activeOpacity={.7} >
//           <LinearGradient style={styles.linearGradientt} colors={['#3068cc', '#6190E8']} 
//           start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}   locations={[0.1, 0.9]}>
//               <Text style={styles.buttonText}> Sign Out </Text>
//           </LinearGradient>
//      </TouchableOpacity> */}
//       <TouchableOpacity  style={styles.linearGradientq} activeOpacity={.8} onPress={signOut}>
//           <LinearGradient style={styles.linearGradienttq} colors={['#3068cc', '#6190E8']} 
//           start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}   locations={[0.1, 0.9]}>
//               <Text style={styles.buttonTextq}> Sign Out </Text>
//           </LinearGradient>
//      </TouchableOpacity>

//      <FAB
//     style={styles.fab}
//     small
//     icon="plus"
//     onPress={() => console.log('Pressed')}
//   />


//       {/* { analist == "apple"  ? <View><Text>Data fetching</Text></View> :  <LineChart
//     data={{
//       labels:yviews,
//       datasets: [
//         {
//           data: chartdata
//         }
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     chartConfig={{
//       backgroundColor: '#e26a00',
//       backgroundGradientFrom: '#fb8c00',
//       backgroundGradientTo: '#ffa726',
//       decimalPlaces: 2, // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16
//       }
//     }}
//     bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   /> } */}

// {/* 
//     <ContributionGraph
//       values={commitsData}
//       endDate={new Date("2017-04-01")}
//       numDays={105}
//       width={Dimensions.get("window").width} // from react-native
//       height={220}
//       chartConfig={{
//         backgroundColor: '#e26a00',
//         backgroundGradientFrom: '#fb8c00',
//         backgroundGradientTo: '#ffa726',
//         decimalPlaces: 2, // optional, defaults to 2dp
//         color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//         style: {
//           borderRadius: 16
//         }
//       }}
//       /> */}


//     {/* { analist == "apple" ? <View><Text>Data fetching</Text></View> : <DataTable>
//         <DataTable.Header>
//           <DataTable.Title>PRODUCT</DataTable.Title>
//           <DataTable.Title numeric>QUANTITY</DataTable.Title>
//           <DataTable.Title numeric>SOLD</DataTable.Title>
//         </DataTable.Header>

//         <DataTable.Row>
//           <DataTable.Cell>{analist.dashboards.sales.best_sellers[0].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analist.dashboards.sales.best_sellers[0].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analist.dashboards.sales.best_sellers[0].sales}</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
//           <DataTable.Cell>{analist.dashboards.sales.best_sellers[1].name}</DataTable.Cell>
//           <DataTable.Cell numeric>{analist.dashboards.sales.best_sellers[1].qty}</DataTable.Cell>
//           <DataTable.Cell numeric>{analist.dashboards.sales.best_sellers[1].sales}</DataTable.Cell>
//         </DataTable.Row>
//     </DataTable> } */}

//     {/* { analist == "apple" ? <View><Text>Data fetching</Text></View> :
//     <View  style={styles.lastitem}>
//         <View><Text>Unpaid Orders : {analist.dashboards.sales.summary.order_unpaid_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders To Invoice : {analist.dashboards.sales.summary.order_to_invoice_count}</Text></View>  
//         <Divider />
//         <View><Text>Abandoned Carts : {analist.dashboards.sales.summary.order_carts_abandoned_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders : {analist.dashboards.sales.summary.order_count}</Text></View>  
//         <Divider />
//         <View><Text>Orders/Day : {analist.dashboards.sales.summary.order_per_day_ratio}</Text></View>  
//         <Divider />
//         <View><Text>Carts : {analist.dashboards.sales.summary.order_carts_count}</Text></View>  
//         <Divider />
//         <View><Text>Conversion : {analist.dashboards.sales.summary.order_convertion_pctg} %</Text></View>  
//         <Divider />
//         <View><Text>Sold : $ {analist.dashboards.sales.summary.total_sold}</Text></View>  
//         <Divider />
//         <View><Text>Avg Order : $ {analist.dashboards.sales.summary.order_sold_ratio}</Text></View>  
//    </View>
//     } */}







//     </View>
//     </ScrollView>
//     </SafeAreaView>
    
//     </>
//   );
// }

// function SplashScreen() {
//   return (
//     <View style={[styles.containerss, styles.horizontall]}>
//       <ActivityIndicator size="large" color="#3068cc" />
//     </View>

//   );
// }

// function TaskScreen({navigation}) {
//   return (
//     <>
//     <Appbar.Header style={{backgroundColor: '#ffffff', fontWeight: 'bold'}}>
//       <Appbar.BackAction color="#3068cc" onPress={() => navigation.navigate('Home side')} />
//       <Appbar.Content title="Task" color="black" titleStyle={{ fontWeight: 'bold'}} />
//       <Appbar.Action icon="magnify"  color="#3068cc" />
//     </Appbar.Header>
                         
  
  
//     <View style={{ flex: 1,  backgroundColor: "#fff"}}>
//   <ScrollView>
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//     <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('task screen')}
//     title="Odoo Traning"
//     description="Odoo new module create"
//     left={props => <Entypo name="dot-single" size={40} color="lightgreen" style={{ margin: 3}}/>}
//     right={props => <View style={{ margin: 6}}><Text style={{color: 'black', fontWeight: 'bold'}}> 02:00 hr</Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20}}
//   />





//   </ScrollView>
//   </View>
//     </>
  
//   );
// }





// function ChoseScreen({navigation}) {  
//   const [Chosedata, setChosedata] = useState([
//    {
//      url: '127.3e434.e2',
//      name: 'First Item',
//      password: 'ahuiahi38f8h48r',
//      database: 'agshsgsgsb',
//      uri: 'https://image.flaticon.com/icons/png/512/147/147144.png'
//    },
//    {
//      url: '192.168.4.100',
//      name: 'admin',
//      password: 'admin',
//      database: 'demo_db_v14',
//      uri: 'data:image/png;base64,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'
//    },
//    {
//      url: '127.3434.3.2.2',
//      name: 'First Item',
//      password: 'ahuiahi38f8h48r',
//      database: 'agshsgsgsb',
//      uri: 'https://img.pngio.com/avatar-icon-png-96686-free-icons-library-avatarpng-512_512.jpg'
//    },
//    {
//      url: '127.3434.34e53',
//      name: 'First Item',
//      password: 'ahuiahi38f8h48r',
//      database: 'agshsgsgsb',
//      uri: 'https://image.flaticon.com/icons/png/512/147/147144.png'
//    },
//    {
//      url: '127.3434.342',
//      name: 'First Item',
//      password: 'ahuiahi38f8h48r',
//      database: 'agshsgsgsb',
//      uri: 'https://image.flaticon.com/icons/png/512/147/147144.png'
//    },
//  ])

//  const [see, setSee] = useState('Odoo React Native')

//  // const [imggg, setImggg] = ("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")

//  var base64Icon = 'data:image/png;base64,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';
// {/* <Image style={{width: 50, height: 50}} source={{uri: base64Icon}}/> */}

//  const {choosesigninin, app, imgg} = React.useContext(AuthContext);

//  console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm')
//  // console.log(imggg)
//  // for(var i = 0; i < imgg.length; i++) {
//  //   var img_string = "data:image/png;base64,"
//  //   imgg[i]["image_1920"] = img_string.concat(imgg[i]["image_1920"])
//  // }
//  console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm')



//  const pressHandler = (item) => {
//    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')
//    console.log(item)
//    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')
//    // alert(item.name)

//    setSee(item.name)

//    choosesigninin({
//      url: item.url,
//      username: item.name,
//      password: item.password,
//      database: item.database,
//    })

//  }

// //  const renderItem = ({ item }) => (
// //  <TouchableOpacity onPress={() => pressHandler(item)}>
// //    <View style={styles.itemm}>
// //      <Avatar.Image
// //          size={50} source={{ uri: item.image_1920}} />
// //      <View style={styles.text}>
// //        <Text style={styles.titlee}>Name: {item.name}</Text>
// //        <Text style={styles.titlee}>URL: {item.url}</Text>
// //      </View>
// //      <View style={styles.delete}><MaterialIcons name="delete" size={24} color="black" /></View>
// //    </View>
// //  </TouchableOpacity>
// //  );

//  return (
//    <View style={{ flex: 1, backgroundColor: 'white',  justifyContent: 'center'  }}>

//      <Text style={styles.paragraphh}>Choose Account</Text>
//      {/* <Text style={styles.titleee}>Choose Account</Text> */}

//         {imgg == null || imgg == 'orange' ?  
//         <View  style={styles.containerr}><Text>No User Found, Please Sign In</Text></View> 
//         : <View style={styles.containerr}>
//             {/* <SafeAreaView> */}
//               <FlatList
//                 data={imgg}
//                 renderItem={({item}) => (
//                   <TouchableNativeFeedback onPress={() => pressHandler(item)}>
//                     <View style={styles.itemm}>
//                       <Avatar.Image
//                           size={50} source={{ uri: item.image_1920}} />
//                       <View style={styles.text}>
//                         <Text style={styles.titlee}>Name: {item.name}</Text>
//                         <Text style={styles.titleeq}>URL: {item.url}</Text>
//                         <Text style={styles.titleeq}>Database: {item.database}</Text>
//                       </View>
//                       {/* <View style={styles.delete}><MaterialIcons name="delete" size={24} color="black" /></View> */}
//                       <View>
//                     <AntDesign onPress={() => console.log('app')} name="delete" size={24} color="black" /></View>

//                     </View>
//                   </TouchableNativeFeedback>
              
//                 )}
//                 keyExtractor={item => item.url}
//               />
//             {/* </SafeAreaView> */}
//             </View>  }


//         {/* <Card onPress={() => console.log('card touch')}>
//           <Card.Content>
//             <Text>Card title</Text>
//           </Card.Content>
//         </Card>
//         <Card onPress={() => console.log('card touch')}> */}
//           {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}
//           {/* <Card.Content>
//             <Text>Card title</Text>
//           </Card.Content>
//         </Card> */}

//           <View style={{ marginBottom: 30 }} >
//             <View style={{  marginHorizontal: 10}}>
//             <TouchableOpacity onPress={() => navigation.navigate('SignIn')}
//                   style={styles.linearGradient} activeOpacity={.7} >
//                 <LinearGradient style={styles.linearGradientt} colors={['#3068cc', '#6190E8']} 
//                 start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}   locations={[0.1, 0.9]}>
//                     <Text style={styles.buttonText}> Go To Sign In </Text>
//                 </LinearGradient>
//           </TouchableOpacity></View>

//               <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
//                 <Text style={{ color: 'grey'}}>Terms of service</Text>
//               </View>
//         </View>
//      </View>
//  )
// }



// function NotificationsScreen({ navigation }) {
//     return (
//         <>

//     <Appbar.Header style={{backgroundColor: '#ffffff', fontWeight: 'bold'}}>
//       <Appbar.Action size={30} icon="menu" color="#3068cc" onPress={() => navigation.openDrawer()}/>
//       {/* <AntDesign onPress={() => navigation.openDrawer()} name="menuunfold" size={26} color="#6A82FB" iconStyle={{marginLeft: 20}} style={{marginHorizontal: 10}} /> */}
//       <Appbar.Content title="Notification" color="black" titleStyle={{ fontWeight: 'bold'}}/>
//       <Appbar.Action icon="magnify"  color="#3068cc"/>
//       {/* <Appbar.Action icon="dots-vertical" color="#3068cc"/> */}
//   </Appbar.Header>

                         


//   <View style={{ flex: 1,  backgroundColor: "#fff"}}>
//   <ScrollView>
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />
//   <List.Item
//      onPress={() => console.log("sale order click")}
//     description="sale order"
//     title="New Sale order created ..."
//     left={props => <AntDesign name="infocirlceo" size={24} color="grey" style={{margin: 10}} />}
//     right={props => <><Entypo name="dot-single" size={40} color="orange" style={{ margin: 3}}/><View><Text style={{ fontSize: 10, color: 'grey', marginTop: 15, marginRight: 4}}>20/4/2020</Text></View></>}
//     style={{padding: -20}}
//   />
//   <Divider />





//   </ScrollView>
//   </View>
//   </>
//     );
// }

// function SaleorderScreen({ navigation }) {
//   return (
//       <>
//   <Appbar.Header style={{backgroundColor: '#ffffff', fontWeight: 'bold'}}>
//     <Appbar.BackAction color="#3068cc" onPress={() => navigation.navigate('Home side')} />
//     <Appbar.Content title="Sale Order" color="black" titleStyle={{ fontWeight: 'bold'}} />
//     <Appbar.Action icon="magnify"  color="#3068cc" />
//   </Appbar.Header>
                       


//   <View style={{ flex: 1,  backgroundColor: "#fff"}}>
//   <ScrollView>
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//     <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />
//   <List.Item
//       background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log("sale order click")}
//     title="S00007"
//     description="Gemini Furnictor"
//     left={props =>   <Badge style={{ marginBottom: 15, marginLeft: 4, backgroundColor: 'lightgreen' }}>sale order</Badge>    }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 200.32 </Text><Text style={{ color: 'grey'}}> 20/1/2020</Text></View>}
//     style={{padding: -20, }}
//   />




//   </ScrollView>
//   </View>
//   </>
//   );
// }

// function ProductScreen({ navigation }) {
//   return (
//       <>
//   <Appbar.Header style={{backgroundColor: '#ffffff', fontWeight: 'bold'}}>
//     <Appbar.BackAction color="#3068cc" onPress={() => navigation.navigate('Home side')} />
//     <Appbar.Content title="Product" color="black" titleStyle={{ fontWeight: 'bold'}} />
//     <Appbar.Action icon="magnify"  color="#3068cc" />
//   </Appbar.Header>
                       


//   <View style={{ flex: 1,  backgroundColor: "#fff"}}>
//   <ScrollView>
//   <List.Item
//   background={TouchableNativeFeedback.Ripple('#3068cc')}
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//     <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />
//   <List.Item
//     onPress={() => console.log('click')}
//     title="Desk Combination"
//     description="FURN_4670"
//     left={props =>     <Avatar.Image style={{ margin: 8 }} size={50} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SX466_.jpg'}} />  }
//     right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//     style={{padding: -20}}
//   />



//   </ScrollView>
//   </View>
//   </>
//   );
// }


// function UserScreen({ navigation }) {
//   return (
//       <>
//   <Appbar.Header style={{backgroundColor: '#ffffff', fontWeight: 'bold'}}>
//     <Appbar.BackAction color="#3068cc" onPress={() => navigation.navigate('Home side')} />
//     <Appbar.Content title="User" color="black" titleStyle={{ fontWeight: 'bold'}} />
//     <Appbar.Action icon="magnify"  color="#3068cc" />
//   </Appbar.Header>
                       


//   <View style={{ alignItems: 'center', justifyContent: 'flex-start' , backgroundColor: "#fbfcff" }}>
//     <Avatar.Image style={{ marginTop: 15 }} size={150} source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
//     <View style={{ backgroundColor: "#fbfcff", margin: 10, padding: 10 }}><Text style={{fontWeight: 'bold', color: '#3068cc', fontSize: 20}}> Micheall Johansan </Text></View>
//   </View>
//   <View style={{ flex: 1,  backgroundColor: "#fbfcff" }}>
//     <List.Item
//     title="User Name"
//     right={props => <Text style={{padding: 10, color: 'grey'}}> Rajan Admin</Text>}
//     style={{padding: -20}}
//   />
//       <Divider style={{padding: 1}}/>
//       <List.Item
//     title="Password"
//     right={props => <Text style={{padding: 10, color: 'grey'}}> 1234567**** </Text>}
//     style={{padding: -20}}
//   />
//       <Divider style={{padding: 1}}/>
//       <List.Item
//     title="Database"
//     right={props => <Text style={{padding: 10, color: 'grey'}}> demo_db_v14</Text>}
//     style={{padding: -20}}
//   />
//       <Divider style={{padding: 1}}/>
//       <List.Item
//     title="Url"
//     right={props => <Text style={{padding: 10, color: 'grey'}}> 192.168.4.100</Text>}
//     style={{padding: -20}}
//   />
//       <Divider style={{padding: 1}}/>
//       <List.Item
//     title="Email"
//     right={props => <Text style={{padding: 10, color: 'grey'}}> rajan.savaliya@sneptech.com</Text>}
//     style={{padding: -20}}
//   />
//       <Divider style={{padding: 1}}/>

//       {/* <List.Item
//     title="Admin Name"
//     description="Item description"
//     left={props => <List.Icon {...props} icon="folder" />}
//     style={{padding: -20}}

//   />
//       <Divider style={{padding: 1}}/> */}



//   </View>
//   </>
//   );
// }





// function DetailsScreen({ navigation }) {
// return (
//   <>
//     <Appbar.Header style={{backgroundColor: '#ffffff', fontWeight: 'bold'}}>
//       <Appbar.Action size={30} icon="menu" color="#3068cc" onPress={() => navigation.openDrawer()}/>
//       {/* <AntDesign onPress={() => navigation.openDrawer()} name="menuunfold" size={26} color="#6A82FB" iconStyle={{marginLeft: 20}} style={{marginHorizontal: 10}} /> */}
//       <Appbar.Content title="Details" color="black" titleStyle={{ fontWeight: 'bold'}}/>
//       <Appbar.Action icon="magnify"  color="#3068cc"/>
//       {/* <Appbar.Action icon="dots-vertical" color="#3068cc"/> */}
//   </Appbar.Header>
                       


//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//   <Button
//       title="Go to Details"
//       onPress={() => navigation.navigate('Home side')}
//     />
//     <Text>This is a DetailsScreen Application</Text>
//   </View>
//   </>
// );
// }



// function SettingScreen({ navigation }) {
//   return (
//     <>
//       <Appbar.Header style={{backgroundColor: '#ffffff', fontWeight: 'bold'}}>
//         <Appbar.Action size={30} icon="menu" color="#3068cc" onPress={() => navigation.openDrawer()}/>
//         {/* <AntDesign onPress={() => navigation.openDrawer()} name="menuunfold" size={26} color="#6A82FB" iconStyle={{marginLeft: 20}} style={{marginHorizontal: 10}} /> */}
//         <Appbar.Content title="Setting" color="black" titleStyle={{ fontWeight: 'bold'}}/>
//         <Appbar.Action icon="magnify"  color="#3068cc"/>
//         {/* <Appbar.Action icon="dots-vertical" color="#3068cc"/> */}
//     </Appbar.Header>
                         
  
  
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Button
//         title="Go to home"
//         onPress={() => navigation.navigate('Home side')}
//       />
//       <ToggleSwitch
//       isOn={true}
//       onColor="#3068cc"
//       offColor="grey"
//       label="is Dark Mode"
//       labelStyle={{ color: "black", fontWeight: "300" }}
//       size="big"
//       onToggle={isOn => console.log("changed to : ", isOn)}
//     />
//     <ToggleSwitch
//       isOn={true}
//       onColor="#3068cc"
//       offColor="grey"
//       label="is Dark Mode"
//       labelStyle={{ color: "black", fontWeight: "300" }}
//       size="big"
//       onToggle={isOn => console.log("changed to : ", isOn)}
//     />
//          <FAB
//     style={styles.fab}
//     big
//     icon="plus"
//     onPress={() => console.log('Pressed')}
//   />



//       <Text>This is a Setting Application</Text>
//     </View>
//     </>
//   );
//   }

    

// function CrmScreen({ navigation }) {
//   return (
//     <>
//       <Appbar.Header style={{backgroundColor: '#ffffff', fontWeight: 'bold'}}>
//         <Appbar.Action size={30} icon="menu" color="#3068cc" onPress={() => navigation.openDrawer()}/>
//         {/* <AntDesign onPress={() => navigation.openDrawer()} name="menuunfold" size={26} color="#6A82FB" iconStyle={{marginLeft: 20}} style={{marginHorizontal: 10}} /> */}
//         <Appbar.Content title="CRM" color="black" titleStyle={{ fontWeight: 'bold'}}/>
//         <Appbar.Action icon="magnify"  color="#3068cc"/>
//         {/* <Appbar.Action icon="dots-vertical" color="#3068cc"/> */}
//     </Appbar.Header>
                         
  
  
//     <View style={{ flex: 1,  backgroundColor: "#fff"}}>
//   <ScrollView>
//     <List.AccordionGroup>
//     <List.Accordion title="New" id="1">
//         <List.Item
//         background={TouchableNativeFeedback.Ripple('red')}
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />
//         <List.Item
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />
//         <List.Item
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />
//         <List.Item
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />
//     </List.Accordion>
//     <List.Accordion title="Accordion 2" id="2">
//     <List.Item
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />
//                 <List.Item
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />
//         <List.Item
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />
//         <List.Item
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />

//     </List.Accordion>
//     <View>
//       <List.Accordion title="Accordion 3" id="3">
//       <List.Item
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />
//                 <List.Item
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />

// <List.Item
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />

// <List.Item
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />

//       </List.Accordion>
//     </View>
//   </List.AccordionGroup>
//   <List.Accordion
//         title="Uncontrolled Accordion"
//         left={props => <List.Icon {...props} icon="folder" />}>
// <List.Item
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />
// <List.Item
//            onPress={() => console.log('click')}
//            title="Desk Combination"
//            description="FURN_4670"
//             right={props => <View style={{ margin: 5}}><Text style={{color: 'black', fontWeight: 'bold'}}> $ 250 </Text><Text style={{ color: 'grey'}}> 15% Tax </Text></View>}
//           style={{padding: -20}}
//         />
//   </List.Accordion>


//   </ScrollView>
//   </View>
//     </>
//   );  
  
//   }
  



// function CustomDrawerContent(props) {
//   return (
//     // <DrawerContentScrollView {...props}>
//     //   <DrawerItemList {...props} />
//     //   <DrawerItem label="Help" onPress={() => alert('Link to help')} />
//     // </DrawerContentScrollView>
//     <View style={{flex: 1}}>
//           <DrawerContentScrollView {...props}>
//                  <View>
                   
//                      <View style={{ flexDirection: 'row' }}>
//                         <Avatar.Image style={{ margin: 15 }} size={100} source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} /> 
//                         <View style={{marginTop: 40}}><Text style={{fontSize: 20, fontWeight: 'bold', color: '#3068cc'}}>Rajan Savaliya</Text><Text style={{ color: 'grey'}}>Admin</Text></View>
//                      </View>
//                  </View>
//                  <Drawer.Section>
//                     <DrawerItem background={TouchableNativeFeedback.Ripple('orange')}
//                     icon={() => (
//                             <AntDesign name="home" size={24} color="black" /> )} 
//                         label="Home"
//                         onPress={() => {props.navigation.navigate('Home side')}}
//                         />
//                     <DrawerItem icon={() => (
//                         <AntDesign name="idcard" size={24} color="black" /> )} 
//                         label="Details"
//                         onPress={() => {props.navigation.navigate('Detais side')}}
//                     />
//                     <DrawerItem icon={() => (
//                           <AntDesign name="notification" size={24} color="black" /> )} 
//                         label="Notification"
//                         onPress={() => {props.navigation.navigate('Notifications side')}}
//                     />
//                     <DrawerItem icon={() => (
//                         <Octicons name="project" size={24} color="black" /> )} 
//                         label="CRM"
//                         onPress={() => {props.navigation.navigate('Crm')}}
//                     />
//                     <DrawerItem icon={() => (
//                       <AntDesign name="setting" size={24} color="black" /> )} 
//                         label="setting"
//                         onPress={() => {props.navigation.navigate('setting')}}
//                     />



//           </Drawer.Section>

//           </DrawerContentScrollView>
//           <Drawer.Section>
//           <Divider />
//             <DrawerItem icon={({color, size}) => (
//             <FontAwesome name="sign-out" size={24} color="grey" /> )} 
//             label="Sign Out"
//             opPress={() => console.log('signi out drwwr button')}
//             />

//           </Drawer.Section>

//     </View>
//   );
// }


// const Drawers = createDrawerNavigator();

// function MainStackScreen({ navigation }) {
//   return (
//     <Drawers.Navigator  
//     drawerContentOptions={{
//       activeTintColor: '#3068cc',
//       itemStyle: { marginVertical: 4 },
//     }}
//     drawerContent={props => <CustomDrawerContent {...props} />}
//       >
//       <Drawers.Screen name="Home side" component={HomeScreen}/>
//       <Drawers.Screen
//         name="Notifications side"
//         component={NotificationsScreen}
//       />
//       <Drawers.Screen
//         name="Detais side"
//         component={DetailsScreen}
//       />
//       <Drawers.Screen
//         name="Task side"
//         component={TaskScreen}
//       />
//       <Drawers.Screen
//         name="Sale Order"
//         component={SaleorderScreen}
//       />
//       <Drawers.Screen
//         name="Product"
//         component={ProductScreen}
//       />
//       <Drawers.Screen
//         name="User"
//         component={UserScreen}
//       />
//       <Drawers.Screen
//         name="Crm"
//         component={CrmScreen}
//       />
//       <Drawers.Screen
//         name="setting"
//         component={SettingScreen}
//       />







//     </Drawers.Navigator>
//   );
// }


// const Tab = createBottomTabNavigator();

// function Alltabs() {
//   return (
//     <Tab.Navigator         screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;

//         if (route.name === 'Main') {
//           iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
//         } else if (route.name === 'Settings') {
//           iconName = focused ? 'ios-list-box' : 'ios-list';
//         }

//         // You can return any component that you like here!
//         return <Ionicons name={iconName} size={size} color={color} />;
//       },
//     })}
//     tabBarOptions={{
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     }}
// >
//       <Tab.Screen name="Main" component={MainStackScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }



// const Stack = createStackNavigator();

// export default function App({ navigation }) {
//   const [state, dispatch] = React.useReducer(
//     (prevState, action) => {
//       switch (action.type) {
//         case 'RESTORE_TOKEN':
//           return {
//             ...prevState,
//             userToken: action.token,
//             isLoading: false,
//             partnersss: action.partnersss
//           };
//         case 'SIGN_IN':
//           return {
//             ...prevState,
//             isSignout: false,
//             userToken: action.token,
//             app: action.app,
//             ress: action.ress
//             // partnersss: action.partnersss
//           };
//         case 'SIGN_OUT':
//           return {
//             ...prevState,
//             isSignout: true,
//             userToken: null,
//             uidatas: []
//           };
//         case 'SETDATA':
//           return {
//             ...prevState,
//             isSignin: true,
//             partnersss: action.partnersss,
//             uidatas: action.uidatas,
//           };
//         case 'SETANA':
//           return {
//             ...prevState,
//             analist: action.analist,
//           };
//         case 'SETANALM':
//           return {
//             ...prevState,
//             analistlm: action.analistlm,
//           };  
//         case 'SETANAW':
//             return {
//               ...prevState,
//               analistw: action.analistw
//             };
//         case 'SETANALW':
//           return {
//             ...prevState,
//             analistlw: action.analistlw
//           };  
//         case 'SETANAY':
//           return {
//             ...prevState,
//             analisty: action.analisty
//           };
//         case 'SETANATO':
//           return {
//             ...prevState,
//             analistto: action.analistto
//           };
//         case 'SETANAYO':
//           return {
//             ...prevState,
//             analistyo: action.analistyo
//           };  
//         case 'SETIMG':
//           return {
//             ...prevState,
//             imgg: action.imgg
            
//           }
//       }
//     },
//     {
//       isLoading: true,
//       isSignout: false,
//       userToken: null,
//       partnersss: [],
//       uidatas: [],
//       app: 'indai vs usa',
//       ress: [],
//       imgg: 'orange',
//       analist: "apple",
//       analistw: 'apple',
//       analisty: 'apple',
//       analistto: 'apple',
//       analistyo: 'apple',
//       analistlw: 'apple',
//       analistlm: 'apple'
//     }  
//   );

//   React.useEffect(() => {

//     //! set a loading scrren for the 5 seconed

//   //! get a async data--------choose acccount na
//   const getchooseaccount = async () => {
//     // let chooseaccount;

//     try {
//       // userToken = await AsyncStorage.getItem('userToken');

//       console.log('choose account ingfo====================================')
//       let chooseaccount;
//       console.log(chooseaccount)
//       chooseaccount = await AsyncStorage.getItem('chooselist');
//       let parsedcose = JSON.parse(chooseaccount); 



//      console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvv--------------------------------')
//      // let mainToken = JSON.parse(userToken)
//      console.log(parsedcose)
//      console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv===========================================')
 
//     //  console.log(userToken.url)
//      dispatch({ type: 'SETIMG', imgg: parsedcose });

  
  
//       // odoo.connect(res => console.log(res))
  
  
 
//     } catch (e) {
//       // Restoring token failed
//     }

//     // After restoring token, we may need to validate it in production apps

//     // This will switch to the App screen or Auth screen and this loading
//     // screen will be unmounted and thrown away.
//     // dispatch({ type: 'RESTORE_TOKEN', token: userToken });
//   };

//   getchooseaccount();

   

//     //  debugger;
//     //  var latin = 'dankogai';
//     //  console.log(latin)
//     //  Base64.encode(latin);             // ZGFua29nYWk=
//     //  Base64.btoa(latin);               // ZGFua29nYWk=
   
//     //  console.log(latin)
   

//     //  const secretKey = "some-unique-key"

//     // const simpleCrypto = new SimpleCrypto(secretKey)

//     // const plainText = "Hello World!"
//     // const cipherText = simpleCrypto.encrypt(plainText)
//     // console.log("Encryption process...")
//     // console.log("Plain Text    : " + plainText)
//     // console.log("Cipher Text   : " + cipherText)
//     // const decipherText = simpleCrypto.decrypt(cipherText)
//     // console.log("... and then decryption...")
//     // console.log("Decipher Text : " + decipherText)
//     // console.log("... done.")

//      console.log('================================usee Effect run it=111111222222222=============================')
//      // Update the document title using the browser API
//      console.log(state)


//     //  console.log('token ---- toekn ---- token==================================================')
//     //  let userToken;
//     //  userToken = AsyncStorage.getItem('newtoken', (err, result) => {
//     //   console.log(result);
//     // })
//     // console.log('--------------------------------')
//     // // let mainToken = JSON.parse(userToken)
//     // // console.log(mainToken)
//     // console.log('token ---- toekn ---- token==================================================')

//     // console.log(userToken.url)
 
//     //  const odoo = new Odoo({
//     //    host: userToken.url,
//     //    port: 8014,
//     //    database: userToken.database,
//     //    username: userToken.username,
//     //    password: userToken.password
//     //  });
 
//     //  odoo.connect(function (err) {
//     //    if (err) { return console.log(err); }
//     //    console.log('zzzzzzzzzzzzzzzzzzzzzzzzz===================connect is ready stedy go')
//     //    // console.log()
//     //  });
 
//     //  // odoo.connect(res => console.log(res))
 
 
//     //  console.log('method work weellll partners::;111===============')
//     //  console.log(userToken.url)


//     //  //! --- get
//     //  var params = {
//     //    ids: [1,2,323,324,325, 326, 327, 328],
//     //    fields: [ 'name' ],
//     //  }; //params
//     //  odoo.get('mix.spt', params, function (err, partners) {
//     //    if (err) { return console.log(err); }
       
//     //    console.log('method work weellll partners::;111===============')

//     //    console.log(partners);

//     //    const partnerss = [...partners]
//     //    console.log(partnerss)
//     //    console.log('method work weellll partners::;2222=================')
       

//     //    // console.log(Dataa)
//     //  // [
//     //  //   { id: 1, name: 'Demo Company' },
//     //  //   { id: 3, name: 'Administrator' },
//     //  //   { id: 4, name: 'Public user' },
//     //  //   { id: 5, name: 'Demo User' }
//     //  // ]
//     //   dispatch({ type: 'SETDATA', partnersss: partnerss });

//     //  }); //get

//     //  dispatch({ type: 'SIGN_IN', partnersss: partnerss });

//      //!


//     // Fetch the token from storage then navigate to our appropriate place
//     const bootstrapAsync = async () => {
//       let userToken; //! this useTOken is impoart to-----if token is aviblae direct go to---home page-----+++ restore token dispatch method for

//       try {
//         // userToken = await AsyncStorage.getItem('userToken');

//         console.log('token ---- toekn ---- token==================================================')
//         // let userToken;
//         console.log(userToken)
//         userToken = await AsyncStorage.getItem('newtoken');
//         let parsed = JSON.parse(userToken); 
//         var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
//         var decodedString = Base64.decode(parsed.password);
//         console.log(decodedString); // Outputs: "Hello World!"
//         parsed.password = decodedString


//         console.log(parsed.url)


//        console.log('--------------------------------')
//        // let mainToken = JSON.parse(userToken)
//        // console.log(mainToken)
//        console.log('token ---- toekn ---- token==================================================')
   
//       //  console.log(userToken.url)
    
//         const odoo = new Odoo({
//           host: parsed.url,
//           port: 8014,
//           database: parsed.database,
//           username: parsed.username,
//           password: parsed.password
//         });
    
//         odoo.connect(function (err) {
//           if (err) { return console.log(err); }
//           console.log('zzzzzzzzzzzzzzzzzzzzzzzzz===================connect is ready stedy go')
//           // console.log()
//         });
    
//         // odoo.connect(res => console.log(res))
    
    
//         console.log('method work weellll partners::;111===============')
   
   
//         //! --- get
//         var params = {
//           ids: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
//           fields: [ 'name' ],
//         }; //params
//         odoo.get('sale.order', params, function (err, partners) {
//           if (err) { return console.log(err); }
          
//           console.log('method work weellll partners::;111===============')
   
//           console.log(partners);
   
//           const tokendata = [...partners]
//           console.log(tokendata)
//           console.log('method work weellll partners::;2222=================')
          
//           let rntoken = "token is here"
//           // console.log(Dataa)
//         // [
//         //   { id: 1, name: 'Demo Company' },
//         //   { id: 3, name: 'Administrator' },
//         //   { id: 4, name: 'Public user' },
//         //   { id: 5, name: 'Demo User' }
//         // ]
//         dispatch({ type: 'RESTORE_TOKEN', token: rntoken });
//         dispatch({ type: 'SETDATA', uidatas: tokendata});  
//         }); //get

//           //TODO: ============================================================================================
//                   // Generic RPC call
//             // // Note that, unlike the other methods, the context is not automatically included
//             console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')

//             var endpoint = '/website/fetch_dashboard_data';
//             var model = 'sale.order';
//             var method = 'fetch_dashboard_data';
            
//             var args = [
//               [53],
//               {
//                 tz: "Europe/Brussels",
//                 uid: 2,
//               },
//             ];//args
            

//             var date = new Date().getDate();
//             var month = new Date().getMonth() + 1;
//             var year = new Date().getFullYear();
//             var datee = year + '-' + month +'-' + date

//             //! this week for----------------------
//             var todayWeek = new Date(); // today!
//             todayWeek.setDate(todayWeek.getDate() - 7);
//             var dateweek = todayWeek.getFullYear() + '-' + (todayWeek.getMonth()+1) + '-' + todayWeek.getDate()
//             // this week-----------------------------

//             //! Last week for----------------------
//             var todaylastWeek = new Date(); // today!
//             todaylastWeek.setDate(todaylastWeek.getDate() - 14);
//             var datelastweek = todaylastWeek.getFullYear() + '-' + (todaylastWeek.getMonth()+1) + '-' + todaylastWeek.getDate()
//             // this week-----------------------------
            

//             //! this Month for----------------------
//             var todayMonth = new Date(); // today!
//             todayMonth.setDate(todayMonth.getDate() - 31);
//             var datemonth = todayMonth.getFullYear() + '-' + (todayMonth.getMonth()+1) + '-' + todayMonth.getDate()
//             // this month-----------------------------

//             //! Last Month for----------------------
//             var todaylastMonth = new Date(); // today!
//             todaylastMonth.setDate(todaylastMonth.getDate() - 62);
//             var datelastmonth = todaylastMonth.getFullYear() + '-' + (todaylastMonth.getMonth()+1) + '-' + todaylastMonth.getDate()
//             // this month-----------------------------
             

//             //! this Year for----------------------
//             var todayYear = new Date(); // today!
//             todayYear.setDate(todayYear.getDate() - 366);
//             var dateyear = todayYear.getFullYear() + '-' + (todayYear.getMonth()+1) + '-' + todayYear.getDate()
//             // this year-----------------------------
//             console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
//             console.log(dateweek)
//             console.log(datemonth)
//             console.log(dateyear)
//             console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')

//             //! this today for----------------------
//             var todayToday = new Date(); // today!
//             todayToday.setDate(todayToday.getDate() - 1);
//             var datetoday = todayToday.getFullYear() + '-' + (todayToday.getMonth()+1) + '-' + todayToday.getDate()
//             // this today-----------------------------
            
//             //! this  for----------------yesterday------
//             var ystart = new Date(); // today!
//             var yend = new Date(); // today!

//             ystart.setDate(ystart.getDate() - 1);
//             yend.setDate(yend.getDate() - 2);

//             var yystart = ystart.getFullYear() + '-' + (ystart.getMonth()+1) + '-' + ystart.getDate()
//             var yyend = yend.getFullYear() + '-' + (yend.getMonth()+1) + '-' + yend.getDate()

//             // this yesterday-----------------------------
                        

                        
//             var paramsto = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: datetoday, 
//               date_to: datee // now date
//             };//params

//             var paramsyo = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: yyend, 
//               date_to: yystart // now date
//             };//params

            
//             var params = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: datemonth, 
//               date_to: datee // now date
//             };//params

//             var paramslm = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: datelastmonth, 
//               date_to: datemonth // now date
//             };//params



//             var paramsw = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: dateweek, 
//               date_to: datee
//             };//params

//             var paramslw = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: datelastweek, 
//               date_to: dateweek
//             };//params


//             var paramsy = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: dateyear, 
//               date_to: datee
//             };//params


            
//             //! View Delivery Order--month
//             odoo.rpc_call(endpoint, params, function(err, result) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_order = result;

//               console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')
//               console.log(delivery_order);
//               dispatch({ type: 'SETANA', analist: delivery_order });

//               console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')

//             });//odoo.rpc_call

//             // View Delivery Order //!-------last month
//             odoo.rpc_call(endpoint, paramslm, function(err, resultlm) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_orderlm = resultlm;

//               console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
//               console.log(delivery_orderlm);
//               dispatch({ type: 'SETANALM', analistlm: delivery_orderlm });
//               console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')

//             });//odoo.rpc_call
            

            

//             //! View Delivery Order--------week
//             odoo.rpc_call(endpoint, paramsw, function(err, resultw) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_orderw = resultw;

//               console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')
//               console.log(delivery_orderw);
//               dispatch({ type: 'SETANAW', analistw: delivery_orderw });

//               console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')

//             });//odoo.rpc_call

//             //! View Delivery Order------Last--week
//             odoo.rpc_call(endpoint, paramslw, function(err, resultlw) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_orderlw = resultlw;

//               console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
//               console.log(delivery_orderlw);
//               dispatch({ type: 'SETANALW', analistlw: delivery_orderlw });

//               console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')

//             });//odoo.rpc_call
            

//             //! View Delivery Order--------year
//             odoo.rpc_call(endpoint, paramsy, function(err, resulty) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_ordery = resulty;

//               console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')
//               console.log(delivery_ordery);
//               dispatch({ type: 'SETANAY', analisty: delivery_ordery });

//               console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')

//             });//odoo.rpc_call
            
//             //! View Delivery Order--------today
//             odoo.rpc_call(endpoint, paramsto, function(err, resultto) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_orderto = resultto;

//               console.log('ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo')
//               console.log(delivery_orderto);
//               dispatch({ type: 'SETANATO', analistto: delivery_orderto });

//               console.log('oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo')

//             });//odoo.rpc_call

//             //! View Delivery Order--------yesteday
//             odoo.rpc_call(endpoint, paramsyo, function(err, resultyo) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_orderyo = resultyo;

//               console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
//               console.log(delivery_orderyo);
//               dispatch({ type: 'SETANAYO', analistyo: delivery_orderyo });

//               console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')

//             });//odoo.rpc_call

            

//             console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')



//             //todo :!==============================================================================================

   
//       } catch (e) {
//         // Restoring token failed
//       }

//       // After restoring token, we may need to validate it in production apps

//       // This will switch to the App screen or Auth screen and this loading
//       // screen will be unmounted and thrown away.
//         // setTimeout(() => {

//           dispatch({ type: 'RESTORE_TOKEN', token: userToken});
//         // }, 4000)
//     };

//     bootstrapAsync();


//   }, []);

//   const signinin = async data => {
//     // setLoading();

//     // const res = await axios.get(
//     //   `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
//     // );
//     console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
//     console.log(data)
//     const odoo = await new Odoo({
//       host: data.url,
//       port: 8014,
//       database: data.database,
//       username: data.username,
//       password: data.password 
//     });

//     odoo.connect(function (err) {
//       if (err) { return console.log(err); }
//       console.log('connect is ready stedy go111111111111111111111')
//       // console.log()
//     });

//     // odoo.connect(res => console.log(res))


//     console.log('method work weellll partners::;1===============')

//     //! --- get
//     var params = {
//       ids: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
//       fields: [ 'name' ],
//     }; //params
//     odoo.get('sale.order', params, function (err, partners) {

//           if (err) { return console.log(err); }
      
//       console.log(partners);
//       console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxmethod work weellll partners::xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=================')

//       const uidata = [...partners]
//       console.log(uidata)
//       console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq work weellll partners::xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=================')
      

//       // console.log(Dataa)
//     // [
//     //   { id: 1, name: 'Demo Company' },
//     //   { id: 3, name: 'Administrator' },
//     //   { id: 4, name: 'Public user' },
//     //   { id: 5, name: 'Demo User' }
//     // ]
//     dispatch({ type: 'SETDATA', uidatas: uidata });

//     }); //get
 
//     var params = {
//       ids: [2],
//       fields: [ 'name', 'image_1920' ],
//     }; //params

//     odoo.get('res.users', params, function (err, xxx) {
//       if (err) { return console.log(err); }
     
//       console.log('application--------------application')
//       console.log(xxx);
//       console.log('application-============application');

//       // dispatch({ type: 'SETIMG', imgg: xxx });


//     //! problum:::asyc data set it up======but all the --account login all list base---choose accoun page show it
//     //! get it---chekc it ---------set it in the list---the go to state--===stat to show
//     // let chooselist = data;
//     // AsyncStorage.setItem(    
//     // )
//     imgDataset()

//     async function imgDataset() {

//     var checklist = await AsyncStorage.getItem('chooselist') //list
//     let parsedd = JSON.parse(checklist); 


    


//     console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
//     console.log(parsedd)
//     console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')

//     if (parsedd == [] || parsedd == undefined || parsedd == null)  {
     
//       console.log('p1111111111111111111111111111111111111111111ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp')

//       parsedd = []
//       // console.log(checklistparse)
          
//       //! data set it up
  
//       //! data set it up


//     var dataobj = data; //obj
//     console.log(dataobj)

//     var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
//     var encodedString = Base64.decode(dataobj.password);     
//     dataobj["password"] = encodedString
//     var imgdata = xxx[0]; //list to obj get it
//     console.log(imgdata)


//     var mixobj = {...dataobj, ...imgdata}
//     console.log(mixobj)


//     parsedd.push(mixobj)
//     console.log(parsedd)
//     // for(var i = 0; i < parsedd.length; i++) {
//       var img_string = "data:image/png;base64,"

//       parsedd[parsedd.length - 1]["image_1920"] = img_string.concat(parsedd[parsedd.length - 1]["image_1920"])
//     // }
  
//     console.log('p2222222222222222222222222222222222222222222222222222222pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp')
    
//     AsyncStorage.setItem(
//       'chooselist',
//       JSON.stringify(parsedd)
//     );

//     dispatch({ type: 'SETIMG', imgg: parsedd });
  

//     } else {

//     console.log('p333333333333333333333333333333333333333333333333333333333333333333333333333331111111111111111111111111111111111111111111ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp')
//     console.log(typeof parsedd)
//     console.log(parsedd)

//     // var checklistparse = checklist;
//     // console.log(typeof checklistparse)
//     // console.log(checklistparse)

          
//     //! data set it up

//     var dataobj = data; //obj
//     console.log(dataobj)

//     // var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
//     // var encodedString = Base64.decode(dataobj.password);

     
//     // dataobj["password"] = encodedString

//     var imgdata = xxx[0]; //list to obj get it
//     console.log(imgdata)


//     var mixobjp = {...dataobj, ...imgdata}
//     console.log(mixobjp)


//     parsedd.push(mixobjp)

//     console.log(parsedd)
//     // for(var i = 0; i < parsedd.length; i++) {
//       var img_string = "data:image/png;base64,"

//       parsedd[parsedd.length - 1]["image_1920"] = img_string.concat(parsedd[parsedd.length - 1]["image_1920"])
//     // }

//     console.log('p2222222222222222222222222222222222222222ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp')
    
//     AsyncStorage.setItem(
//       'chooselist',
//       JSON.stringify(parsedd)
//     );

//     dispatch({ type: 'SETIMG', imgg: parsedd });




//     }



//     }
    


//     }); //get
    


      


    



    

//     //! async data set it up=======that login only===so again app open that open it===============
//     let mytoken = data;
//     var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

//     console.log('password-----encoding----password---encoding---------------------------------------------------------------------------------')
//     var encodedString = Base64.encode(mytoken.password);
//     console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

//     mytoken.password = encodedString
//     console.log('34343434343434343434343434343434343434343434434343434 434 434 ')
//     console.log(mytoken.password)

//     AsyncStorage.setItem(
//       'newtoken',
//       JSON.stringify(mytoken)
//     );
//     //!=========================================
    



//     dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', app: 'rajan'});

//   };

//   const choosesigninin = async data => {
//         // setLoading();

//     // const res = await axios.get(
//     //   `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
//     // );
//     console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
//     console.log(data)
//     const odoo = await new Odoo({
//       host: data.url,
//       port: 8014,
//       database: data.database,
//       username: data.username,
//       password: data.password 
//     });

//     odoo.connect(function (err) {
//       if (err) { return console.log(err); }
//       console.log('connect is ready stedy go111111111111111111111')
//       // console.log()
//     });

//     // odoo.connect(res => console.log(res))


//     console.log('method work weellll partners::;1===============')

//     //! --- get
//         var params = {
//           ids: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
//           fields: [ 'name' ],
//         }; //params
//         odoo.get('sale.order', params, function (err, partners) {

//               if (err) { return console.log(err); }
          
//           console.log(partners);
//           console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxmethod work weellll partners::xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=================')

//           const uidata = [...partners]
//           console.log(uidata)
//           console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq work weellll partners::xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=================')
          

//           // console.log(Dataa)
//         // [
//         //   { id: 1, name: 'Demo Company' },
//         //   { id: 3, name: 'Administrator' },
//         //   { id: 4, name: 'Public user' },
//         //   { id: 5, name: 'Demo User' }
//         // ]
//         dispatch({ type: 'SETDATA', uidatas: uidata });

//         }); //get



//                   //TODO: ============================================================================================
//             //       // Generic RPC call
//             // // Note that, unlike the other methods, the context is not automatically included
//             console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')

            
//             var endpoint = '/website/fetch_dashboard_data';
//             var model = 'sale.order';
//             var method = 'fetch_dashboard_data';
            
//             var args = [
//               [53],
//               {
//                 tz: "Europe/Brussels",
//                 uid: 2,
//               },
//             ];//
            
           
//             var date = new Date().getDate();
//             var month = new Date().getMonth() + 1;
//             var year = new Date().getFullYear();
//             var datee = year + '-' + month +'-' + date

//             //! this week for----------------------
//             var todayWeek = new Date(); // today!
//             todayWeek.setDate(todayWeek.getDate() - 7);
//             var dateweek = todayWeek.getFullYear() + '-' + (todayWeek.getMonth()+1) + '-' + todayWeek.getDate()
//             // this week-----------------------------

//             //! Last week for----------------------
//             var todaylastWeek = new Date(); // today!
//             todaylastWeek.setDate(todaylastWeek.getDate() - 14);
//             var datelastweek = todaylastWeek.getFullYear() + '-' + (todaylastWeek.getMonth()+1) + '-' + todaylastWeek.getDate()
//             // this week-----------------------------
            

//             //! this Month for----------------------
//             var todayMonth = new Date(); // today!
//             todayMonth.setDate(todayMonth.getDate() - 31);
//             var datemonth = todayMonth.getFullYear() + '-' + (todayMonth.getMonth()+1) + '-' + todayMonth.getDate()
//             // this month-----------------------------

//             //! Last Month for----------------------
//             var todaylastMonth = new Date(); // today!
//             todaylastMonth.setDate(todaylastMonth.getDate() - 62);
//             var datelastmonth = todaylastMonth.getFullYear() + '-' + (todaylastMonth.getMonth()+1) + '-' + todaylastMonth.getDate()
//             // this month-----------------------------
            

//             //! this Year for----------------------
//             var todayYear = new Date(); // today!
//             todayYear.setDate(todayYear.getDate() - 366);
//             var dateyear = todayYear.getFullYear() + '-' + (todayYear.getMonth()+1) + '-' + todayYear.getDate()
//             // this year-----------------------------

//             //! this today for----------------------
//             var todayToday = new Date(); // today!
//             todayToday.setDate(todayToday.getDate() - 1);
//             var datetoday = todayToday.getFullYear() + '-' + (todayToday.getMonth()+1) + '-' + todayToday.getDate()
//             // this today-----------------------------

//             //! this  for----------------yesterday------
//             var ystart = new Date(); // today!
//             var yend = new Date(); // today!

//             ystart.setDate(ystart.getDate() - 1);
//             yend.setDate(yend.getDate() - 2);

//             var yystart = ystart.getFullYear() + '-' + (ystart.getMonth()+1) + '-' + ystart.getDate()
//             var yyend = yend.getFullYear() + '-' + (yend.getMonth()+1) + '-' + yend.getDate()

//             // this yesterday-----------------------------
            
            
//             //=======================================

//             console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
//             console.log(dateweek)
//             console.log(datemonth)
//             console.log(dateyear)
//             console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')

//             var paramsto = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: datetoday, 
//               date_to: datee // now date
//             };//params

//             var paramsyo = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: yyend, 
//               date_to: yystart // now date
//             };//params

            
            
//             var params = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: datemonth, 
//               date_to: datee // now date
//             };//params

//             var paramslm = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: datelastmonth, 
//               date_to: datemonth // now date
//             };//params


//             var paramsw = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: dateweek, 
//               date_to: datee
//             };//params

//             var paramslw = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: datelastweek, 
//               date_to: dateweek
//             };//params





//             var paramsy = {
//               model: model,
//               method: method,
//               args: args,
//               kwargs: {},
//               website_id: false, 
//               date_from: dateyear, 
//               date_to: datee
//             };//params

            
//             // View Delivery Order //! this month
//             odoo.rpc_call(endpoint, params, function(err, result) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_order = result;

//               console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')
//               console.log(delivery_order);
//               dispatch({ type: 'SETANA', analist: delivery_order });
//               console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')

//             });//odoo.rpc_call

//             // View Delivery Order //!-------last month
//             odoo.rpc_call(endpoint, paramslm, function(err, resultlm) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_orderlm = resultlm;

//               console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
//               console.log(delivery_orderlm);
//               dispatch({ type: 'SETANALM', analistlm: delivery_orderlm });
//               console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')

//             });//odoo.rpc_call
            

//                         // View Delivery Order
//             //! View Delivery Order--------week
//             odoo.rpc_call(endpoint, paramsw, function(err, resultw) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_orderw = resultw;

//               console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')
//               console.log(delivery_orderw);
//               dispatch({ type: 'SETANAW', analistw: delivery_orderw });

//               console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')

//             });//odoo.rpc_call

//             //! View Delivery Order------Last--week
//             odoo.rpc_call(endpoint, paramslw, function(err, resultlw) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_orderlw = resultlw;

//               console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
//               console.log(delivery_orderlw);
//               dispatch({ type: 'SETANALW', analistlw: delivery_orderlw });

//               console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')

//             });//odoo.rpc_call
                        
            
            

//             //! View Delivery Order--------year
//             odoo.rpc_call(endpoint, paramsy, function(err, resulty) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_ordery = resulty;

//               console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')
//               console.log(delivery_ordery);
//               dispatch({ type: 'SETANAY', analisty: delivery_ordery });

//               console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')

//             });//odoo.rpc_call

//             //! View Delivery Order--------today
//             odoo.rpc_call(endpoint, paramsto, function(err, resultto) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_orderto = resultto;

//               console.log('ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo')
//               console.log(delivery_orderto);
//               dispatch({ type: 'SETANATO', analistto: delivery_orderto });

//               console.log('oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo')

//             });//odoo.rpc_call

//             //! View Delivery Order--------yesteday
//             odoo.rpc_call(endpoint, paramsyo, function(err, resultyo) {
//               if(err) {
//                 console.log(err);
//                 return;
//               }//if
            
//               var delivery_orderyo = resultyo;

//               console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
//               console.log(delivery_orderyo);
//               dispatch({ type: 'SETANAYO', analistyo: delivery_orderyo });

//               console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')

//             });//odoo.rpc_call
            
            
            
            

//             console.log('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')



//             //Todo: !==============================================================================================



      



//     //! async data set it up=======that login only===so again app open that open it===============
//     let mytoken = data;
//     var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

//     console.log('password-----encoding----password---encoding---------------------------------------------------------------------------------')
//     var encodedString = Base64.encode(mytoken.password);
//     console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

//     mytoken.password = encodedString
//     console.log('34343434343434343434343434343434343434343434434343434 434 434 ')
//     console.log(mytoken.password)

//     AsyncStorage.setItem(
//       'newtoken',
//       JSON.stringify(mytoken)
//     );
//     //!=========================================
    



//     dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', app: 'rajan'});



//   }

//   const signOut  = async () => {
//     // await AsyncStorage.clear();
//     await AsyncStorage.removeItem('newtoken')


//     dispatch({ type: 'SIGN_OUT' })
//   }



//   const authContext = React.useMemo(
//     () => ({
//       signIn: async data => {
//           console.log('================================usee Effect run it=222222222=============================')
//           // Update the document title using the browser API
//           // console.log(data.password)
//           // const odoo = await new Odoo({
//           //   host: data.url,
//           //   port: 8014,
//           //   database: data.database,
//           //   username: data.username,
//           //   password: data.password 
//           // });
      
//           // odoo.connect(function (err) {
//           //   if (err) { return console.log(err); }
//           //   console.log('connect is ready stedy go111111111111111111111')
//           //   // console.log()
//           // });
      
//           // // odoo.connect(res => console.log(res))
      
      
//           // console.log('method work weellll partners::;1===============')

//           // //! --- get
//           // var params = {
//           //   ids: [1,2,323,324,325, 326, 327],
//           //   fields: [ 'name' ],
//           // }; //params
//           // odoo.get('mix.spt', params, function (err, partners) {
//           //   if (err) { return console.log(err); }
            
//           //   console.log(partners);
//           //   console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxmethod work weellll partners::xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=================')

//           //   const partnerss = [...partners]
//           //   console.log(partnerss)
//           //   console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxmethod work weellll partners::xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=================')
            

//           //   // console.log(Dataa)
//           // // [
//           // //   { id: 1, name: 'Demo Company' },
//           // //   { id: 3, name: 'Administrator' },
//           // //   { id: 4, name: 'Public user' },
//           // //   { id: 5, name: 'Demo User' }
//           // // ]
//           // dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', app: partnerss});

//           // }); //get
    
      
        
        
      
//         // In a production app, we need to send some data (usually username, password) to server and get a token
//         // We will also need to handle errors if sign in failed
//         // After getting token, we need to persist the token using `AsyncStorage`
//         // In the example, we'll use a dummy token

//         // dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', app: "rajansavaliya"});
//       },
//       signOut: () => dispatch({ type: 'SIGN_OUT' }),
//       signUp: async data => {
//         // In a production app, we need to send user data to server and get a token
//         // We will also need to handle errors if sign up failed
//         // After getting token, we need to persist the token using `AsyncStorage`
//         // In the example, we'll use a dummy token

//         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//       },
//       names: "rajan"
//     }),
//     []
//   );

//   return (
//     <AuthContext.Provider value={
//       {
//         app: state.app,
//         ress: state.ress,
//         partnersss: state.partnersss,
//         uidatas: state.uidatas,
//         imgg: state.imgg,
//         analist: state.analist,
//         analistw: state.analistw,
//         analisty: state.analisty,
//         analistto: state.analistto,
//         analistyo: state.analistyo,
//         analistlw: state.analistlw,
//         analistlm: state.analistlm,
//         signinin,
//         choosesigninin,
//         signOut
//       }
//     }>
//       <NavigationContainer>
//         <Stack.Navigator>
//           {console.log(state)}
//           {state.isLoading ? (
//             // We haven't finished checking for the token yet
//             <Stack.Screen name="Loading..." component={SplashScreen}/>
//           ) : state.userToken == null || state.uidatas == [] ? (
//             // No token found, user isn't signed in
//             <>
//             <Stack.Screen name="Choose Account" component={ChoseScreen} 
//             options={{
//                 title: 'ODOO',
//                 headerTitleStyle: {
//                   fontWeight: 'bold',
//                 }
//               }}

//             />

//             <Stack.Screen
//               name="SignIn"
//               component={SignInScreen}
//               options={{
//                 title: 'Back',
//                 headerTitleStyle: {
//                   fontWeight: 'bold',
//                   marginLeft: -15
//                 },
        
//                 // headerShown: false,
//             // When logging out, a pop animation feels intuitive
//                 animationTypeForReplace: state.isSignout ? 'pop' : 'push',
//               }}
              
//             />
//           </>
//           ) : (

//             // User is signed in
//             <Stack.Screen name="applicationss" component={Alltabs}              options={{
//               headerShown: false,
//               title: 'My home',
//               headerStyle: {
//                 backgroundColor: '#ffff',
//               },
//               headerTintColor: '#fff',
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//               }, }}
//            />


//   )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#fff',
//     padding: 8,
//     paddingBottom: 230
//   },
//   paragraph: {
//     marginTop: 10,
//     marginLeft: 10,
//     marginBottom: 10,
//     fontSize: 35,  
//     fontWeight: 'bold',             
//     textAlign: 'left',
//     color: '#3068cc',
//   },
//   paragraphh: {
//     marginTop: 40,
//     marginLeft: 20,
//     marginBottom: 40,
//     fontSize: 33,  
//     fontWeight: 'bold',             
//     textAlign: 'left',
//     color: '#3068cc',

//   },
//   input: {
//     borderWidth: 1.7,
//     borderColor: 'black',   
//     padding: 10,
//     fontSize: 18,
//     borderRadius: 100,
//     margin: 12,
//     paddingLeft: 20,
//     // shadowColor: "#323643",
//     // shadowOffset: { width: 0, height: 2 },
//     // shadowOpacity: 0.1,
//     // shadowRadius: 10,
//     // elevation: 0.01,
//   },
//   button: {
//     borderRadius: 8,
//     paddingVertical: 14,
//     paddingHorizontal: 10,
//     backgroundColor: '#3068cc',
//     margin: 24,

//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     fontSize: 16,
//     textAlign: 'center',

//   },
//   containerr: {
//     flex: 1,
//     alignItems: 'center', 
//     justifyContent: 'center',
//     marginBottom: 0,
//     paddingBottom: -140
//     // paddingBottom: -100,
//     // margin: -10,
//   //   paddingRight: 30,
//   //   paddingLeft: 30,
//   //   paddingBottom: 10,
//   //   paddingTop: 30,
//   //   marginTop: StatusBar.currentHeight || 0,
//   //  flexGrow: 0,
//   //  flexShrink: 0
//   },
//   itemm: {
//     flexGrow: 1,
//     flex: 1,
//     // backgroundColor: '#f9c2ff',
//     // padding: 20,
//     // marginVertical: 2,
//     // marginHorizontal: 5,
//     // borderRadius: 100,
//     // alignItems: "center", // cross axis
//     paddingTop: 10,
//     paddingBottom: 20,
//     paddingLeft: 40,
//     paddingRight: 40,
//     marginLeft: 20,
//     marginRight: 14,
//     marginTop: 0,
//     marginBottom: 6,
//     elevation: 4,
//     // borderRadius: 100,
//     backgroundColor: '#FFFF',
//     borderColor: '#3068cc',
//     borderWidth: 1.5,
//     flex: 1,
//     flexDirection: "column", // main axis
//     justifyContent: "flex-start", // main axis

//   },
//   titlee: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: '#3068cc',


//   },titleeq: {
//     color: 'grey'
//   },
//   titleee: {
//     fontSize: 21,
//     fontWeight: '500',
//     margin: 10

//   },
//   buttonn: {
//     borderRadius: 8,
//     paddingVertical: 14,
//     paddingHorizontal: 10,
//     margin: 50,

//   },
//   text: {
//     marginTop: '-20%',
//     // marginBottom: '50%'
//     marginLeft: '30%',
//     // marginRight: '40%',
//     // padding: '5%'
//   },
//   delete: {
//     marginTop: '-24%',
//     paddingBottom: '10%',
//     // marginBottom: '50%',
//     marginLeft: '90%',
//     // marginRight: '40%',
//   },
//   lastitem: {
//     margin: '2%'

//   },
//   containerss: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   horizontall: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 10
//   },
//   containerpp: {
//     flex: 1,
//     margin: '40%',
//     padding: '40%',
//     backgroundColor: 'red',
//   },
//   tabBar: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     marginBottom: -100
//     // paddingTop: Constants.statusBarHeight,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     paddingTop: 16,
//     paddingRight: 16,
//     paddingLeft: 16,
//     // paddingTop: 16,
//     textDecorationLine: 'underline',
//     // paddingBottom: 80,

//   },
//     tabBarr: {
//     flexDirection: 'column',
//     backgroundColor: 'white',
//     // paddingBottom: 100,
//     // padding: 30
//     // padding: 300,
//     // margin: 100
//     // paddingTop: Constants.statusBarHeight,
//     // marginBottom: 90,
//     // paddingBottom: 90,

//   },tbb: {
//     // padding: 20
//   },
//   containerww: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//     // paddingBottom: 50,
//     marginBottom: -470 //! import to see the tabview --page
//   },
//   inside: {
//   },
//   containeraa: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//     backgroundColor: '#ffffff',
//     borderRadius: 25,
//     borderWidth: 3,
//     borderColor: 'white',
//         shadowColor: "#323643",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 3,
//     margin: 5,
//     width: 150,
//     height: 150,
//   },
//   containeraas: {
//      flex: 1,
//      flexDirection: 'row',
//      marginTop: 10
//   },
//   paragraphaa: {
//     margin: 24,
//     marginTop: 0,
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: "grey"

//   },
//   linearGradientq: {
//     paddingLeft: 15,
//     paddingRight: 15,
//     shadowColor: "#323643",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 2,
//     margin: 5,
//     marginTop: 25


//   },
//   linearGradienttq: {
//     borderRadius: 50,
//     shadowColor: "#323643",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 2,
//     borderColor:  '#3068cc',
//     borderWidth: 0.7,

//   },
//   linearGradient: {
//     paddingLeft: 15,
//     paddingRight: 15,
//     shadowColor: "#323643",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 2,
//     margin: 5,
//     marginTop: 60,


//   },
//   linearGradientt: {
//     borderRadius: 50,
//     shadowColor: "#323643",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 2,
//     borderColor:  '#3068cc',
//     borderWidth: 0.7,

//   },

//   buttonText: {
//     fontSize: 18,
//     // fontFamily: 'Gill Sans',
//     textAlign: 'center',
//     margin: 10,
//     color: '#ffffff',
//     backgroundColor: 'transparent',
//   },
//   buttonTextq: {
//     fontSize: 18,
//     // fontFamily: 'Gill Sans',
//     textAlign: 'center',
//     margin: 10,
//     color: '#fff',
//     backgroundColor: 'transparent',

//   },
//   cardtext: {
//     fontWeight: 'bold',
//      color: 'grey' 
//   },
//   fab: {
//     position: 'absolute',
//     margin: 16,
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#3068cc'
//   },







// });