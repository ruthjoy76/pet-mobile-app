const PickAnimalScreenStyles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    subHeader: {
        height: 90,
        justifyContent: 'center',
    },
    mainContainer: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#FFEAD1',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 10,
    },
    subHeaderText: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        marginTop: 10,
    },
    containerItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        marginHorizontal: 20,
        marginVertical: 5,
        height: 160,
        width: 145,
        justifyContent: 'center',
        },
    checkbox: {
        alignSelf: 'center', // Align the checkbox to the center horizontally
        marginBottom: 10, // Add margin at the bottom of the checkbox
        marginTop: 10, // Add margin at the top of the checkbox
    },

    subContainer: {
        alignItems: 'center',
      },
    containerText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#5A2828',
        textAlign: 'center',
        marginBottom: 10, // Add margin at the bottom of the text
    },
    imageStyle: {
        width: 70,
        height: 60,
    
        alignSelf: 'center', // Align the image to the center horizontally
        marginBottom: 0, // Add margin at the bottom of the image
    },
    enterButton: {
        backgroundColor: '#5A2828',
        width: '80%',
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
        paddingHorizontal: 40,
    },
    enterButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
};

export default PickAnimalScreenStyles;
