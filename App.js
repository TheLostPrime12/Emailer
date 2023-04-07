import { Platform, StatusBar, StyleSheet, View } from "react-native";
import EmailContext from "./src/context/EmailContext";
import Messagecontext from "./src/context/Messagecontext";
import MobileContext from "./src/context/MobileContext";
import NameContext from "./src/context/NameContext";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <NameContext>
      <MobileContext>
        <EmailContext>
          <Messagecontext>
            <View style={styles.container}>
              <HomeScreen />
            </View>
          </Messagecontext>
        </EmailContext>
      </MobileContext>
    </NameContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
