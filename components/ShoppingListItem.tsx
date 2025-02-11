import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import THEME from "@/constants/theme";

interface ShoppingListItemProps {
  name: string;
  onDelete: Function;
}

export default function ShoppingListItem({
  name,
  onDelete,
}: ShoppingListItemProps) {
  return (
    <View style={style.container}>
      <Text>{name}</Text>
      <TouchableOpacity onPress={() => onDelete(name)} style={style.button}>
        <Text style={style.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },

  button: { backgroundColor: THEME.colorBlack, padding: 10 },

  buttonText: { color: THEME.colorWhite, textTransform: "uppercase" },
});
