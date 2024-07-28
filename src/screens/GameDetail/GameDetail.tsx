import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {GameDetail} from '../../types';
import {useGames} from '../../contexts/GameContext';
import styles from './GameDetailStyles';

type GameDetailProps = {
  navigation: any;
  route: any;
};

const GameDetailScreen: React.FC<GameDetailProps> = ({
  navigation,
  route,
}) => {
  const [game, setGame] = useState<GameDetail | null>(null);

  const {handleFavourite} = useGames();

  useEffect(() => {
    axios
      .get(
        `https://mock-game-api-9a408f047f23.herokuapp.com/api/games/${route.params.gameId}`,
        {
          headers: {
            'X-API-Key': '01964fa8-f0e5-40fc-a13b-9f5c3a5415f3',
          },
        },
      )
      .then(response => {
        const gameData = response.data;
        setGame(gameData);
      });
  }, [route.params.gameId]);

  if (!game) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ImageBackground source={{uri: game.bannerURL}} style={styles.banner}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleFavourite(route?.params?.gameId)}
              style={styles.button}>
              <Text style={styles.buttonText}>Heart</Text>
            </TouchableOpacity>
          </View>
          <Image source={{uri: game.iconURL}} style={styles.icon} />
        </ImageBackground>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.rating}>Rating: {game.rating}</Text>
          <Text style={styles.description}>{game.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default GameDetailScreen;
