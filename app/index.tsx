import {
  Image,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import ShoppingListItem from "@/components/ShoppingListItem";
import { useState } from "react";

export default function Index() {
  const [items, setItems] = useState<Array<String>>([
    "Apple",
    "Banana",
    "Orange",
  ]);

  const [itemInput, setItemInput] = useState("");

  const handleAddItem = () => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    setItems([...items, itemInput]);
    setItemInput("");
  };

  const handleDelete = (name: String) => {
    Alert.alert(
      "Are you sure you want to delete this item?",
      "You can't reverse this.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => setItems(items.filter((item) => item !== name)),
        },
      ]
    );
  };

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          gap: 10,
        }}
      >
        <TextInput
          value={itemInput}
          onChangeText={(text) => setItemInput(text)}
          style={{
            borderWidth: 1,
            padding: 10,
            flexGrow: 1,
          }}
          placeholder="Add an item to shopping list"
        ></TextInput>

        <TouchableOpacity
          onPress={() => handleAddItem()}
          style={{ borderWidth: 1, backgroundColor: "black", padding: 10 }}
        >
          <Text style={{ color: "white" }}>ADD</Text>
        </TouchableOpacity>
      </View>

      {items.map((item: any, index: any) => (
        <ShoppingListItem
          key={index}
          name={item}
          onDelete={handleDelete}
        ></ShoppingListItem>
      ))}
    </ScrollView>
  );
}
