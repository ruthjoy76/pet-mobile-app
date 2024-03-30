const GameScreenStyles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        justifyContent: 'center',
        marginTop: 15,
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#FFEAD1',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 50,
    },
    headerText: {
        fontSize: 28,
        fontWeight: '700',
        letterSpacing: 0.5,
        color: '#000000', 
        textAlign: 'center',  
        marginTop: 0,
    },
    
    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 15,
        padding: 5,
        height: 250,
        marginBottom: 5,
    },
    imageContainer: {
        flex: 1,
    },
    containerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#5A2828', 
        textAlign: 'left',  
        marginTop: 5,
        marginLeft: 20,
        marginBottom: 5,
    },
    containerParagraphText: {
        fontSize: 14,
        fontWeight: '300',
        color: '#5A2828', 
        textAlign: 'left',
        marginLeft: 20,
        marginRight: 20,
    },
    imageStyle: {
        width: 170, 
        height: 120, 
        borderRadius: 10, 
        marginBottom: 10, 
        marginLeft: 40,
        marginTop: 10, 
    },
    buttonContainer: {
        marginRight: 20,
        alignItems: 'flex-end', // Align button to the right
        justifyContent: 'flex-end', // Align button to the bottom
        marginTop: 130, // 
    },
    buttonImage: {
        width: 56,
        height: 56,
        resizeMode: 'contain',
    },
};

export default GameScreenStyles;
