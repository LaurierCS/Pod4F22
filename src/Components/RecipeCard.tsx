import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Color from '../../assets/Color';

interface RecipeCardProps {
  image: string;
  title: string;
  price: '$' | '$$' | '$$$';
  cuisine: string;
  skill: string;
  time: string;
  onPress: () => void;
}

const RecipeCard = ({
  image,
  title,
  price,
  cuisine,
  skill,
  time,
  onPress,
}: RecipeCardProps) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.contentContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />

        <Text style={styles.title}>{title}</Text>
        <View style={styles.textContainer}>
          <View style={styles.textContainerLeft}>
            <Text style={styles.price}>{price} </Text>
            <View style={styles.circle}></View>
            <Text style={styles.cuisine}> {cuisine}</Text>
          </View>
          <View style={styles.textContainerRight}>
            <Text style={styles.skill}>{skill} </Text>
            <View style={styles.circle}></View>
            <Text style={styles.time}> {time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  textContainerLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textContainerRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  circle: {
    width: 8,
    height: 8,
    borderRadius: 100 / 2,
    backgroundColor: Color.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },

  cardContainer: {
    backgroundColor: Color.white,
    borderRadius: 10,
    elevation: 2,
    margin: 10,
    padding: 10,
    height: 290,
  },
  contentContainer: {
    flexDirection: 'column',
    //fontFamily: 'Poppins-light',
  },
  image: {
    width: '100%',
    height: '78%',
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-bold',
    marginBottom: 5,
    color: Color.black,
  },
  price: {
    fontSize: 16,
    color: Color.red,
  },
  cuisine: {
    fontSize: 16,
    color: Color.black,
  },
  skill: {
    fontSize: 16,
    color: Color.black,
  },
  time: {
    fontSize: 16,
    color: Color.black,
  },
});

RecipeCard.defaultProps = {
  image:
    'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
  title: 'Recipe Title',
  price: '$',
  cuisine: 'Cuisine',
  skill: 'Skill',
  time: 'Time',
  onPress: () => {
    console.log('You pressed me!');
  },
};
