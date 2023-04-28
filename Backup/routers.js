import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons'
import Home from './pages/home'
import Login from './pages/login'
import Create from './pages/create'
import Read from './pages/read'
import Update from './pages/update'
import Delete from './pages/delete'
import Main from "./pages/Main";

const Pilha = createStackNavigator()
const Nav = createBottomTabNavigator()

function NavBar(){
    return(
        <Nav.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor:'#000',
                    borderTopColor: 'transparent',
                    paddingBottom: 1,
                    paddingTop: 1,
                },
                tabBarActiveTintColor:'#f0f',
                tabBarInactiveTintColor: '#555',
            }}
        >
            <Nav.Screen name="Home" component={Home}
                options={{
                    tabBarStyle: {display:'none'},
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
            />


            <Nav.Screen 
            name="Login" 
            component={Login}
                options={{
                    tabBarStyle: {display:'none'},
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="user" size={size} color={color}/>
                    )
                }}
            />

            <Nav.Screen name="Create" component={Create}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="plus-square" size={size} color={color}/>
                    )
                }}
            />

            <Nav.Screen name="Read" component={Read}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="list" size={size} color={color}/>
                    )
                }}
            />

            <Nav.Screen name="Update" component={Update}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="edit" size={size} color={color}/>
                    )
                }}
            />

            <Nav.Screen name="Delete" component={Delete}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="trash-2" size={size} color={color}/>
                    )
                }}
            />
        </Nav.Navigator>
    )
}

export default function Routers({navigation}){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                
                <Pilha.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ title: false, headerShown: false }}
                />

                <Pilha.Screen
                    name='Main'
                    component={Main}
                    options={{ title: false, headerShown: false }}
                />
{/* 
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home Lindomar'}}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login Lindomar' }}
                />
                <Pilha.Screen
                    name="Create"
                    component={Create}
                    options={{ title: 'Login Lindomar' }}
                />
                <Pilha.Screen
                    name="Read"
                    component={Read}
                    options={{ title: 'Login Lindomar' }}
                />
                <Pilha.Screen
                    name="Update"
                    component={Update}
                    options={{ title: 'Login Lindomar' }}
                />
                <Pilha.Screen
                    name="Delete"
                    component={Delete}
                    options={{ title: 'Login Lindomar' }}
                /> */}
                

            </Pilha.Navigator>
        </NavigationContainer>
    )
}
