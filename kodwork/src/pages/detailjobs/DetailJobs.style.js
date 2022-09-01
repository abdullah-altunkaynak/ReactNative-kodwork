import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Container: {
        backgroundColor: '#F5EDDC',
    },
    HeaderContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        padding: 10
    },
    JobName: {
        color: '#193182',
        fontSize: 20,
        fontWeight: 'bold'
    },
    TagText: {
        color: '#EB1D36',
        fontSize: 18,
        fontWeight: 'bold'
    },
    InnerText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    RenderContainer: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#e1e3e1',
        borderRadius: 10,
        padding: 10,
        marginTop: 5
    },
    Footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    FooterButton: {
        width: '40%',
        backgroundColor: '#EB1D36',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    ButtonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    ButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});