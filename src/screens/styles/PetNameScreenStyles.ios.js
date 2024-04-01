const PetNameScreenStylesIOS = {
    safeAreaView: {
        flex: 1,
        backgroundColor: '#fff', // Set the background color of the SafeAreaView
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20, 
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#FFEAD1',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 50,
        overflow: 'hidden', 
    },
    headerText: {
        fontSize: 30,
        height: 90,
        width: '90%',
        fontWeight: '600',
        letterSpacing: -0.5,
        color: '#000000', 
        textAlign: 'center',  
        marginTop: 50, 
    },
    containerItem: {
        flexDirection: 'row',
        alignItems: 'flex-start', 
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 20,
        marginTop: 30,
        padding: 10,
        height: '80%',
        position: 'relative', 
    },
    imageContainer: {
        flex: 1,
        position: 'absolute', 
        top: 20, 
        alignItems: 'center',
        
    },
    imageStyle: {
        width: 260, 
        height: 310, 
        borderRadius: 30,
        margin: 10, 
        marginTop: 30,
    },
    petNameContainer: {
        position: 'absolute',
        bottom: 140, // Adjust the distance from the bottom as needed
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        backgroundColor: '#fff',
        borderColor: '#f1f1f1',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        minWidth: 90,
        margin: 50,
        width: '75%', // Adjust the width as needed
    },
    petName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        position: 'absolute',
        bottom: 40, // Adjust the distance from the bottom as needed
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        margin: 30,
        padding: 10,
        width: '60%', // Adjust the width as needed
        textAlign: 'center',
        width: '88%',
    },
  
    buttonContainer: {
        position: 'absolute',
        bottom: 20, // Adjust the position of the button
        left: '25%',
        transform: [{ translateX: -50 }], // Center the button horizontally
        backgroundColor: '#FFBA69',
        borderWidth: 1,
        paddingHorizontal: 125,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#5A2828',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
};

export default PetNameScreenStylesIOS;
