import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppIntroSlider from 'react-native-app-intro-slider';

const Tab = createBottomTabNavigator();

const slides = [
    { key: '1', image: { uri: 'https://cdn.glitch.global/36f5aa98-eb39-4dc4-be0a-ca929cd46442/Group%2033660.png?v=1723643019447' } },
    { key: '2', image: { uri: 'https://cdn.glitch.global/36f5aa98-eb39-4dc4-be0a-ca929cd46442/Group%2033656.png?v=1723642692361' } },
    { key: '3', image: { uri: 'https://cdn.glitch.global/36f5aa98-eb39-4dc4-be0a-ca929cd46442/Group%2018103.png?v=1723642696636' } }
];

const categories = [
    { image: { uri: 'https://cdn.glitch.global/36f5aa98-eb39-4dc4-be0a-ca929cd46442/Vector.png?v=1723642564391' }, color: '#29D697', name: 'Category 1' },
    { image: { uri: 'https://cdn.glitch.global/36f5aa98-eb39-4dc4-be0a-ca929cd46442/Group%2033654.png?v=1723642567106' }, color: '#F5F5F5', name: 'Category 2' },
    { image: { uri: 'https://cdn.glitch.global/36f5aa98-eb39-4dc4-be0a-ca929cd46442/Group%2033653.png?v=1723642572599' }, color: '#F5F5F5', name: 'Category 3' },
    { image: { uri: 'https://cdn.glitch.global/36f5aa98-eb39-4dc4-be0a-ca929cd46442/Group%2033655.png?v=1723642575428' }, color: '#F5F5F5', name: 'Category 4' },
];

const popularItems = [
    { name: 'BURGER', image: { uri: 'https://cdn.glitch.global/36f5aa98-eb39-4dc4-be0a-ca929cd46442/Rectangle%2029.png?v=1723642768575' } },
    { name: 'PIZZA', image: { uri: 'https://cdn.glitch.global/36f5aa98-eb39-4dc4-be0a-ca929cd46442/Rectangle%2033.png?v=1723642770064' } },
];

const HomeScreen = () => {
    const renderCategory = ({ item }) => (
        <View style={[styles.categoryButton, { backgroundColor: item.color }]}>
            <Image source={item.image} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>{item.name}</Text>
        </View>
    );

    const renderSlide = ({ item }) => (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.slideImage} />
            <Text style={styles.slideTitle}>{item.title}</Text>
            <Text style={styles.slideText}>{item.text}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.gradientOverlay} />
                <View style={styles.header}>
                    <Image style={styles.profileImage} source={{ uri: 'https://cdn.glitch.global/36f5aa98-eb39-4dc4-be0a-ca929cd46442/Ellipse%2022.png?v=1723642689615' }} />
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationLabel}>Your Location</Text>
                        <View style={styles.locationRow}>
                            <Image style={styles.bellIcon} source={{ uri: 'https://cdn.glitch.global/36f5aa98-eb39-4dc4-be0a-ca929cd46442/Group%2033656.png?v=1723642692361' }} />
                            <Text style={styles.location}>Savar, Dhaka</Text>
                        </View>
                    </View>
                    <View style={styles.bellContainer}>
                        <Image style={styles.bellIcon} source={{ uri: 'https://cdn.glitch.global/36f5aa98-eb39-4dc4-be0a-ca929cd46442/Group%2018103.png?v=1723642696636' }} />
                    </View>
                </View>
            </View>

            <View style={styles.searchBarContainer}>
                <Icon name="search" size={20} color="#fff" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search your food"
                    placeholderTextColor="#fff"
                />
                <Image style={styles.picture} source={{ uri: 'https://cdn.glitch.global/36f5aa98-eb39-4dc4-be0a-ca929cd46442/Frame%20(2).png?v=1723643520072' }} />
            </View>

            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={(item, index) => index.toString()}
                numColumns={4}  // Số cột để hiển thị các danh mục theo chiều ngang
                contentContainerStyle={styles.categories}
                columnWrapperStyle={styles.categoryRow}  // Đặt các danh mục vào hàng ngang
            />

            <AppIntroSlider
                renderItem={renderSlide}
                data={slides}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                containerStyle={styles.sliderContainer}
                onSkip={() => console.log('Skipped')}
                onDone={() => console.log('Done')}
            />

            <View style={styles.popularItems}>
                <View style={styles.popularHeader}>
                    <Text style={styles.popularTitle}>Popular Items</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>View All</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.popularItemsRow}>
                    {popularItems.map((item, index) => (
                        <View key={index} style={styles.popularItemContainer}>
                            <Image source={item.image} style={styles.popularItemImage} />
                            <Text style={styles.popularItemName}>{item.name}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const OrderScreen = () => (
    <View style={styles.screenContainer}>
        <Text>Order Screen</Text>
    </View>
);

const InboxScreen = () => (
    <View style={styles.screenContainer}>
        <Text>Inbox Screen</Text>
    </View>
);

const ProfileScreen = () => (
    <View style={styles.screenContainer}>
        <Text>Profile Screen</Text>
    </View>
);

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'home';
                        } else if (route.name === 'Order') {
                            iconName = 'person';
                        } else if (route.name === 'Inbox') {
                            iconName = 'receipt';
                        } else if (route.name === 'Profile') {
                            iconName = 'person';
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#4CAF50',
                    inactiveTintColor: '#888',
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Order" component={OrderScreen} />
                <Tab.Screen name="Inbox" component={InboxScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff'
    },
    headerContainer: {
        height: 150,  
        position: 'relative',
        overflow: 'hidden',
    },
    gradientOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(254, 255, 191, 1)',
        height: '100%',
        width: '100%',
        opacity: 0.8, 
        borderRadius: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: '100%',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    locationContainer: {
        flex: 1,
    },
    locationLabel: {
        fontSize: 16,
        color: '#333',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    bellIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    location: {
        fontSize: 16,
        color: '#4CAF50',
    },
    bellContainer: {
        alignItems: 'flex-end',
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        margin: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchBar: {
        flex: 1,
        height: 40,
        color: '#fff',
    },
    picture: {
        width: 20,
        height: 20,
    },
    categories: {
        marginTop: 10,
    },
    categoryButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        margin: 5,
        height: 100,
    },
    categoryIcon: {
        width: 50,
        height: 50,
    },
    categoryText: {
        marginTop: 5,
        color: '#fff',
        fontWeight: 'bold',
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slideImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    slideTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    slideText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
    },
    dotStyle: {
        backgroundColor: '#ddd',
    },
    activeDotStyle: {
        backgroundColor: '#4CAF50',
    },
    sliderContainer: {
        marginVertical: 20,
    },
    popularItems: {
        padding: 10,
    },
    popularHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    popularTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewAllText: {
        color: '#4CAF50',
    },
    popularItemsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    popularItemContainer: {
        alignItems: 'center',
        width: 170,
    },
    popularItemImage: {
        width: 170,
        height: 170,
        borderRadius: 10,
    },
    popularItemName: {
        marginTop: 5,
        fontSize: 14,
    },
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
