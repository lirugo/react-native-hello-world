import * as React from 'react';
import { Avatar, Button, Card, Title, DataTable, Chip } from 'react-native-paper';
import { StyleSheet } from 'react-native'

const LeftContent = props => <Avatar.Icon {...props} icon="food-drumstick" style={{ backgroundColor: 'red' }} />

const FoodCard = () => (
    <Card style={styles.foodCard}>
        <Card.Title
            left={LeftContent}
            title="Food Title"
            subtitle="Card Subtitle" />
        <Card.Content>
            <Chip>kcal 200</Chip>
        </Card.Content>
        <Card.Actions>
            <Button>SELECT</Button>
        </Card.Actions>
    </Card>
);

const styles = StyleSheet.create({
    foodCard: {
        marginBottom: 10,

    },
});

export default FoodCard;