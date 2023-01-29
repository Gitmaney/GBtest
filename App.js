import {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {

  const [username, setusername] = useState([]);
  const [country, setcountry] = useState([]);
  const [phonebrand, setphonebrand] = useState([]);
  const [phonenumber, setphonenumber] = useState([]);
  const [infolist, setinfolist] = useState([]);

  const InputHandler = (username, country, phonebrand, phonenumber) => {
   setusername(username);
   setcountry(country);
   setphonebrand(phonebrand);
   setphonenumber(phonenumber);
  []};

  const InsertHandler = () => {
    setinfolist(currentlist => 
      [...currentlist, 
        username, 
        country, 
        phonebrand, 
        phonenumber]);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.inputcontainer}>

        <TextInput 
        style={styles.input}
        placeholder = "Name"    
        onChangeText={InputHandler}
        />

        <TextInput 
        style={styles.input}
        placeholder = "Country"    
        onChangeText={InputHandler}
        
        />

        <TextInput 
        style={styles.input}
        placeholder = "Favourite Phone Brand" 
        onChangeText={InputHandler}   
           
        
        />

        <TextInput 
        style={styles.input}
        placeholder = "Phone Number"   
        onChangeText={InputHandler}   

        
        />

      </View>

      <Button 
        style={styles.buttoncontainer}
        title='Insert' 
        onPress={InsertHandler}
     
        />
      <View style={styles.list}>
       {infolist.map((list) => 
       <Text key ={list}>{list}</Text>
       )}
      </View>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex : 1,
    backgroundColor: '#f9fbfc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal : 20,
    },

  inputcontainer:{
    padding: 1,
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 10,
    paddingBottom: 24,
    marginVertical: 5,
    fontSize: 25,
    borderBottomColor: '#cccccc'
    
    },

  input:{
    padding: 15,
    width: 250,
    },

  buttoncontainer: {
    flex: 5,
    backgroundColor: '#3b71f3',
    width: 100,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
    },

  logo: {
    width: 200,
    height: 150,
    
  },

  list:{
    flex: 4,

  }
});

export default App;
