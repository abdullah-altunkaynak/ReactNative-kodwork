import React from "react";
import { TouchableHighlight, Text, View } from "react-native";
import style from './JobCard.style';

function JobCard ({job, onPress}) {
    return(
        <TouchableHighlight style={style.WrapContainer} onPress={onPress}>
            <View style={style.Container}>
                <View style={style.LeftİnnerContainer}>
                    <Text style={style.JobNameText}>{job.name}</Text>
                    <Text style={style.CompanyNameText}>{job.company.name}</Text>
                    <Text style={style.LocationNameText}>{job.locations[0].name}</Text>
                </View>
                <View style={style.RightİnnerContainer}>
                    <Text style={style.DateText}>{job.publication_date}</Text>
                    <Text style={style.LevelNameText}>{job.levels[0].name}</Text>
                </View>
            </View>  
        </TouchableHighlight>
    );
}

export default JobCard;