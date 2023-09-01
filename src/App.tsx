import { View, Text, StyleSheet, ImageSourcePropType, Image, Pressable } from 'react-native'
import type { PropsWithChildren } from 'react'
import React, { useState } from 'react'

import diceOne from '../assets/1.jpg'
import diceTwo from '../assets/2.png'
import diceThree from '../assets/3.jpg'
import diceFour from '../assets/4.jpg'
import diceFive from '../assets/5.jpg'
import diceSix from '../assets/6.jpg'

type DiceProps = PropsWithChildren<
  {
    imageUrl: ImageSourcePropType
  }
>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View >
      <Image style={styles.diceImage} source={imageUrl} />
    </View>

  )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceOne);

  const rollTheDice = () => {
    let random = Math.floor(Math.random() * 6) + 1;

    switch (random) {
      case 1:
        setDiceImage(diceOne);

        break;

      case 2:
        setDiceImage(diceTwo);

        break;
      case 3:
        setDiceImage(diceThree);

        break;
      case 4:
        setDiceImage(diceFour);

        break;
      case 5:
        setDiceImage(diceFive);

        break;
      case 6:
        setDiceImage(diceSix);

        break;


      default:
        setDiceImage(diceOne)
        break;
    }
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollTheDice}>

        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App