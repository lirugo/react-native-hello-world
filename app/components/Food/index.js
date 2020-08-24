import * as React from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import FoodCard from './FoodCard'

const FoodList = () => (
    <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        marginHorizontal: 10,
    },
});

export default FoodList;