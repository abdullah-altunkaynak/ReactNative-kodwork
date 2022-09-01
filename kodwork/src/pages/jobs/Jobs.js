import React from "react";
import { FlatList, SafeAreaView, TouchableHighlight, Text, View, Alert } from "react-native";
import JobCard from "../../components/JobCard/JobCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import style from './Jobs.style';
import {useDispatch, useSelector} from 'react-redux';
function Jobs ({navigation}){
    const {error, loading, data} = useFetch('https://www.themuse.com/api/public/jobs?page=1');
    const goDetail = id => {
        navigation.navigate('DetailJobs', {id});
    }
    const dispatch = useDispatch();
    const list = useSelector(s => s.jobs);
    const handleAdd = items => {
        dispatch({type: 'Add_Favorite', payload: {
            id:items.id, name: items.name, locations: items.locations, levels: items.levels, company: items.company, publication_date: items.publication_date}});
        Alert.alert("Add Favorite!", "Favorilere eklendi.");
    };
    const renderItem = ({item}) =>(
        <View>
            <JobCard job={item} onPress={() => {goDetail(item.id)}} />
            <TouchableHighlight style={[style.Button, {backgroundColor:'green'}]} onPress={() => {handleAdd(item)}}>
                <Text style={style.ButtonText}>Add Favorite</Text>
            </TouchableHighlight> 
        </View>
    
    );
    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }
    return(
        <SafeAreaView>
            <FlatList style={{backgroundColor: '#FFDEDE'}}  data={data.results} renderItem={renderItem}/>
        </SafeAreaView>
    );
};

export default Jobs;