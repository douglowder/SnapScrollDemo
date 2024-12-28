import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

const MyScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 10,
      }}
      snapToOffsets={Array(10)
        .fill(10)
        .map((_, i) => i * 80)}
      style={{
        borderWidth: 1,
        borderColor: 'red',
        maxHeight: 300,
      }}
    >
      {Array(10)
        .fill(null)
        .map((_, rowIndex) => (
          <View
            key={rowIndex}
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 10,
            }}
          >
            {Array(3)
              .fill(null)
              .map((_, itemIndex) => (
                <Tile key={itemIndex} title={`${rowIndex}-${itemIndex}`} />
              ))}
          </View>
        ))}
    </ScrollView>
  );
};

export default MyScreen;

function Tile({ title }: { title: string }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Pressable
      style={{
        backgroundColor: isFocused ? 'blue' : 'green',
        height: 100,
        width: 200,
      }}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
    >
      <Text>{title}</Text>
    </Pressable>
  );
}
