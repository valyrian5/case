import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

type GameCardProps = {
  id: number;
  title: string;
  rating: number;
  iconUrl: string;
  navigate: () => void;
  handleFavourite: (id: number) => void;
  checkFavourites: (id: number) => boolean;
};

const GameCard: React.FC<GameCardProps> = ({
  title,
  iconUrl,
  rating,
  navigate,
  id,
  handleFavourite,
  checkFavourites,
}) => {
  return (
    <View style={styles.card}>
      <Image resizeMode="cover" source={{uri: iconUrl}} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.rating}>{rating}</Text>
              <Text style={styles.stars}>★</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => handleFavourite(id)}>
            {checkFavourites(id) ? <Text>💔</Text> : <Text>❤️</Text>}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={navigate}>
          <Text style={styles.buttonText}>Go to detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    gap: 5,
  },
  image: {
    height: '100%',
    borderRadius: 5,
    minWidth: 90,
  },
  info: {
    marginLeft: 10,
    flex: 1,
    gap: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    gap: 5,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: '#ff9900',
    fontSize: 14,
    fontWeight: 'bold',
  },
  stars: {
    color: '#ff9900',
    marginLeft: 5,
  },
  heart: {
    color: '#ff9900',
  },
  button: {
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default GameCard;
