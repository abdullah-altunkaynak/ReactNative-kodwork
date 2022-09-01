import { StyleSheet } from "react-native";

export default StyleSheet.create({
    WrapContainer: {
        width: '90%',
        alignSelf: 'center',
    },
    Container: {
        borderWidth: 1,
        borderColor: '#C9BBCF',
        backgroundColor: '#ABC9FF',
        borderRadius: 5,
        borderBottomRightRadius:0,
        padding: 5,
        marginTop: 10,
        flexDirection: 'row',
        minHeight: 130
    },
    LeftİnnerContainer: {
        flex:1.5,
        justifyContent: 'space-between',
        padding: 3
    },
    RightİnnerContainer: {
        flex:1,
        justifyContent: 'space-between',
        borderLeftWidth: 1,
        borderColor: 'darkgray',
        padding: 3,
        marginLeft: 3
    },
    JobNameText: {
        fontSize: 20,
        color: '#261C2C',
        fontWeight: 'bold',
    },
    CompanyNameText: {
        fontSize: 17,
        color: 'white',
    },
    LocationNameText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#FF8B8B',
        borderRadius: 5,
        padding: 4,
        textAlign: 'center'
    },
    DateText: {
        fontSize: 13,
        color: 'black',
        fontStyle: 'italic',
        textAlign: 'right'
    },
    LevelNameText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#EB4747',
        textAlign: 'right'
    }
});