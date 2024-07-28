import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './GamesStyles';
import {useGames} from '../../contexts/GameContext';
import axios from 'axios';
import GameCard from '../../components/GameCard';

type GameProps = {
  navigation: any;
};

const Games: React.FC<GameProps> = ({navigation}) => {
  const {games, setAllGames, handleFavourite,checkFavourites} = useGames();

  const {top, bottom} = useSafeAreaInsets();

  useEffect(() => {
    axios
      .get(`https://mock-game-api-9a408f047f23.herokuapp.com/api/games`, {
        headers: {
          'X-API-Key': '01964fa8-f0e5-40fc-a13b-9f5c3a5415f3',
        },
      })
      .then(response => {
        const games = response.data;
        setAllGames(games);
      });
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: top + 5,
        },
      ]}>
      <FlatList
        data={games}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          padding: 10,
        }}
        renderItem={({item}) => (
          <GameCard
            id={item?.id}
            iconUrl={item?.iconURL}
            title={item?.title}
            rating={item?.rating}
            navigate={() =>
              navigation.navigate('GameDetail', {gameId: item?.id})
            }
            handleFavourite={() => handleFavourite(item?.id)}
            checkFavourites={checkFavourites}
          />
        )}
      />
    </View>
  );
};

export default Games;
