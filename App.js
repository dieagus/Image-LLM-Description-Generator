import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { queryGeminiApi } from './gemini';
import { runModel } from './geminiChat';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [apiResponse, setApiResponse] = useState("");

  
  const handleSubmit = async () => {

    const response = await runModel(userInput);

    console.log(response.response.text());
    //setApiResponse(response); 
    
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your prompt"
        onChangeText={setUserInput}
        value={userInput}
      />
      <Button title="Submit" onPress={handleSubmit} />

      {apiResponse && (
        <Text style={styles.response}>{apiResponse}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '80%', 
  },
  response: {
    marginTop: 15,
    fontSize: 16, 
  }
});

export default App;
