<View>
            {strMeasures.map((measures, index) =>
              measures !== "" ? (
                <Text
                  key={index}
                  style={{ textTransform: "uppercase", paddingBottom: 5 }}
                >
                  {measures}
                </Text>
              ) : null
            )}
          </View>

          <View>
            {strIngredients.map((ingredients, index) =>
              ingredients !== "" ? (
                <Text
                  key={index}
                  style={{ textTransform: "uppercase", paddingBottom: 5 }}
                >
                  {ingredients}
                </Text>
              ) : null
            )}
          </View>