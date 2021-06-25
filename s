      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {error && error.message}
          {response &&
            response.meals.map((obj, id) => (
              <View id={obj.idMeal}>
                <Text>{obj.strMeal}</Text>
              </View>
            ))}
        </View>
      )}