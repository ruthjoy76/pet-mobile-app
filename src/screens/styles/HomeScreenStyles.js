
const HomeScreenStyles = {
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
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        marginTop: 10,
    },
    pickAnimalContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFBA69',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        padding: 30,
        borderRadius: 10,
        top: 50,
        marginTop: 250,
        width: "100%",
       
    },
    containerItem: {
        flex: .9,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20, 
        top: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        marginHorizontal: 5,
        marginVertical: 5,
        height: 130, // Set the same height as pickAnimalContainer
        width: 125,
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
        fontSize: 12,
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

export default HomeScreenStyles;