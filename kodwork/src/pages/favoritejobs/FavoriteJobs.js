import React from "react";
import { FlatList, View, Text, SafeAreaView, Button, TouchableHighlight } from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import JobCard from "../../components/JobCard";
import style from './FavoriteJobs.style';
function FavoriteJobs ({navigation}){
    const list = useSelector(s => s.jobs);
    const dispatch = useDispatch();
    const goDetail = id => {
        navigation.navigate('DetailJobs', {id});
    }
    const removeJobItems = item => {
        dispatch({type: 'REMOVE_FAVOURITE', payload: {job: item}});
      };
    const renderItem = ({item}) =>(
        <View>
            <JobCard job={item} onPress={() => {goDetail(item.id)}} />
            <TouchableHighlight style={[style.Button, {backgroundColor:'red'}]} onPress={() => removeJobItems(item)}>
                <Text style={style.ButtonText}>Remove Favorite</Text>
            </TouchableHighlight>
            
        </View>
    
    );
    return(
        <SafeAreaView style={{backgroundColor: '#FFEEAF', height: '100%'}}>
            <FlatList data={list} renderItem={renderItem} />
        </SafeAreaView>     
    );
};

export default FavoriteJobs;