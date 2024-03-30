const PetNameStyles = {
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
        fontSize: 32,
        height: 90,
        width: '90%',
        fontWeight: '700',
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
        borderRadius: 20,
        margin: 40, 
        marginTop: 30,
    },
    petNameContainer: {
        position: 'absolute',
        bottom: 200, // Adjust the distance from the bottom as needed
        left: '60%', // Center the container horizontally
        transform: [{ translateX: -50 }],
        alignItems: 'center',
    },
    petName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        position: 'absolute',
        bottom: 20,
        left: '25%',
        transform: [{ translateX: -50 }],
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 50,
        paddingHorizontal: 100,
        paddingVertical: 10,
        textAlign: 'center',
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

export default PetNameStyles;
