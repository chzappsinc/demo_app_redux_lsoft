import React, {Fragment, useEffect} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../redux/reducers/getUserSlice';
import {add, customValue, minus} from '../redux/reducers/counterSlice';

const DemoScreen = () => {
  // Dispatch the functions
  const dispatch = useDispatch();
  useEffect(() => {
    // get fetchUsers from redux/reducers/getUserSlice
    dispatch(fetchUsers());
  }, []);

  // Selector Hook will help us to get state from reducers
  const users = useSelector(state => state.getUsers);
  const {count, anyOther} = useSelector(state => state.count);

  return (
    <View>
      <Text style={{fontSize: 50}}>{count}</Text>
      <Button title="ADD" onPress={() => dispatch(add())} />
      {/* Mapped Users Data */}
      {users.users &&
        users.users.map(i => {
          return (
            <View key={i.id}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  margin: 10,
                  marginBottom: 0,
                }}>
                {i.name}
              </Text>
              <Text
                style={{color: 'black', fontSize: 8, margin: 10, marginTop: 0}}>
                Fetched in 0s
              </Text>
            </View>
          );
        })}
    </View>
  );
};

export default DemoScreen;
