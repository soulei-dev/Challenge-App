import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components";

const MealGrid = ({ title, onSelect, image, area, tags, ingredients }) => {
  return (
    <View style={{ flex: 1, margin: 10, height: 160 }}>
      <TouchableOpacity onPress={onSelect}>
        <ImageContainer
          imageStyle={{ borderRadius: 10 }}
          source={{ uri: image }}
        >
          <Container>
            <TitleContainer>
              <Text style={{ fontWeight: "800" }}>{title}</Text>
            </TitleContainer>
            <Header>
              <Area>{area}</Area>
            </Header>
            <View style={{ flex: 1, marginBottom: 20 }}>
              <Text>Ingredient: {ingredients.length}</Text>
            </View>
            <TagsContainer>
              {tags ? (
                <View style={{}}>
                  <Text
                    style={{
                      fontWeight: "600",
                      color: "#e69000",
                    }}
                  >
                    {tags}
                  </Text>
                </View>
              ) : (
                <NoTag>
                  <Text>No Tag</Text>
                </NoTag>
              )}
            </TagsContainer>
          </Container>
        </ImageContainer>
      </TouchableOpacity>
    </View>
  );
};

const ImageContainer = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 250px;
  height: 350px;
`;

const Container = styled.View`
  background-color: white;
  border: 1px solid #ededed;
  border-radius: 10px;
  padding: 10px;
  width: 230px;
  height: 180px;
  top: 140px;
  box-shadow: 0px 5px rgba(0, 0, 0, 0.198);
  shadow-radius: 5px;
`;

const Header = styled.View`
  justify-content: center;
  width: 100px;
  height: 20px;
  background-color: #ffda9c;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const NoTag = styled.View`
  flex: 1;
  top: 15px;
  margin-top: 5px;
  align-items: center;
`;

const TitleContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 5px;
`;

const Area = styled.Text`
  font-weight: 600;
  color: #ffa44a;
  text-align: center;
`;

const TagsContainer = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: center;
`;

export default MealGrid;
