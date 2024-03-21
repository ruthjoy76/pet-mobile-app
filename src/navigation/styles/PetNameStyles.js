const PetNameStyles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 50,
        justifyContent: 'center',
        marginBottom: 15,
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#FFEAD1',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headerText: {
        fontSize: 28,
        fontWeight: '700',
        letterSpacing: 0.5,
        color: '#000000', 
        textAlign: 'center',  
        marginTop: 10,
    },
    subHeaderText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#5A2828', 
        textAlign: 'left',  
        marginTop: 10,
        marginLeft: 20,
    },
    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 22,
        margin: 20,
        padding: 10,
        height: 180,
    },
    imageContainer: {
        flex: 1,
    },
    containerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#5A2828', 
        textAlign: 'left',  
        marginTop: 20,
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
        width: 150, 
        height: 100, 
        borderRadius: 10, 
        marginBottom: 20, 
        marginLeft: 20,
        marginTop: 10, 
    },
    buttonContainer: {
        marginRight: 20,
        alignItems: 'flex-end', // Align button to the right
        justifyContent: 'flex-end', // Align button to the bottom
        marginTop: 90, // 
    },
    buttonImage: {
        width: 56,
        height: 56,
        resizeMode: 'contain',
    },
};

export default PetNameStyles;
