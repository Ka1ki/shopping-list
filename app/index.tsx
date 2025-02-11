import { ScrollView, View } from "react-native";
import ShoppingListItem from "@/components/ShoppingListItem";

export default function Index() {
  const items = ["Coffee", "Milk", "Bread", "Butter"];

  return (
    <ScrollView>
      {items.map((item, index) => (
        <ShoppingListItem key={index} name={item}></ShoppingListItem>
      ))}
    </ScrollView>
  );
}
