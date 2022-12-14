import { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handleAdd = () => {
    if (todo.trim() === "") {
      Alert.alert(
        "Todo kiritilmadi !",
        "Iltimos bo'sh bo'lmagan todo kiriting !"
      );
    } else {
      setTodos([
        ...todos,
        {
          id: Math.random(),
          text: todo,
        },
      ]);
      setTodo("");
    }
  };

  const handleRemove = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };
  return (
    <View style={styles.container}>
      <View style={styles.todoWrapper}>
        <View style={styles.todoHeader}>
          <Text style={styles.headerText}>TO-DO LIST</Text>
          <Text style={styles.headerPlus}></Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#2F81B7",
            borderWidth: 2,
            borderColor: "yellow",
          }}
        >
          <TextInput
            placeholder="Add New Todo"
            style={styles.input}
            onChangeText={(e) => setTodo(e)}
            value={todo}
          />
          <Text style={styles.headerPlus} onPress={handleAdd}>
            +
          </Text>
        </View>
        <View style={styles.todoItems}>
          {todos.map((item) => (
            <View style={styles.todoItem} key={item.id}>
              <TouchableOpacity onPress={() => handleRemove(item.id)}>
                <Image
                  source={require("./assets/deleteIcon.png")}
                  style={styles.deleteIcon}
                />
              </TouchableOpacity>
              <Text style={styles.todoText}>{item.text}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsla(204, 72%, 68%, 1)",
    padding: 30,
  },
  todoWrapper: {
    width: "100%",
    height: 450,
    marginTop: 40,
    flexDirection: "column",
  },
  todoHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#2F81B7",
  },
  headerText: {
    fontSize: 22,
    color: "white",
  },
  headerPlus: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    width: "10%",
    textAlign: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
    fontSize: 18,
    width: "90%",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#F7F7F7",
    borderBottomColor: "#7E7E7E",
    borderBottomWidth: 1,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  todoText: {
    fontSize: 18,
    color: "grey",
  },
});
