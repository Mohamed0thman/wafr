/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect} from "react";
import {StyleSheet} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import {persistor, store} from "./store/configureStore";
import {PersistGate} from "redux-persist/integration/react";
import RootNavigation from "./navigation/RootNavigation";
import FlashMessage from "react-native-flash-message";
import {connectToDatabase, createTables, getTableNames} from "./db/db-service";
import {addTransaction, getTransactions} from "./db/transactions";
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  const loadData = useCallback(async () => {
    try {
      const db = await connectToDatabase();
      await createTables(db);
      const tabels = await getTableNames(db);
      await addTransaction(db, {
        amount: 400,
        category: "asdasdsa",
        date: "2132132321",
        type: "expense",
        description: "2132132321",
      });
      const data = await getTransactions(db);
      console.log("data", data);

      console.log("tabels", tabels);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadData().then(() => {
      SplashScreen.hide();
    });
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <FlashMessage position="top" />
          <RootNavigation />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
