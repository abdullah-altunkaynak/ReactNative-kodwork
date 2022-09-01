import React, {useState} from "react";
import { TouchableHighlight, View, Text, Dimensions, Alert, ScrollView } from "react-native";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";
import RenderHtml from 'react-native-render-html';
import style from './DetailJobs.style';
import {useDispatch, useSelector} from 'react-redux';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function DetailJobs ({navigation, route}){
    const {id} = route.params;
    const {error, loading, data} = useFetch('https://www.themuse.com/api/public/jobs/' + id);
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height/2;
    const source = {html: data.contents};
    const dispatch = useDispatch();
    const list = useSelector(s => s.jobs);
    const handleAdd = () => {
        dispatch({type: 'Add_Favorite', payload: {
            id:data.id, name: data.name, locations: data.locations, levels: data.levels, company: data.company, publication_date: data.publication_date}});
        Alert.alert("Add Favorite!", "Favorilere eklendi.");    
    };
    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }
    return(
        <ScrollView style={style.Container}>
            <View style={style.HeaderContainer}>
                <Text style={style.JobName}>{data.name}</Text>
                <Text style={style.TagText}>Locations: <Text style={style.InnerText}>{data.locations[0].name}</Text></Text>
                <Text style={style.TagText}>Job Level: <Text style={style.InnerText}>{data.levels[0].name}</Text></Text>
            </View>
            <View style={style.RenderContainer}>
                <RenderHtml
                contentWidth={width}
                source={source}
                />
            </View>
            <View style={style.Footer}>
                <TouchableHighlight style={style.FooterButton} onPress={() => Alert.alert("Tebrikler!", data.name.toString() + " pozisyonu için başvuru başarılı.")}>
                    <View style={style.ButtonContainer}>
                        <Icon name="login-variant" size={25} color={'white'}/>
                        <Text style={style.ButtonText}>Submit</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={style.FooterButton} onPress={handleAdd}>
                    <View style={style.ButtonContainer}>
                        <Icon name="cards-heart" size={25} color={'white'}/>
                        <Text style={style.ButtonText}>Favorite Job</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </ScrollView>      
    );
};

export default DetailJobs;