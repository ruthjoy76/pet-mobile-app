const PetNameScreenStyles = {
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
        marginTop: 20,
    },
   
    imageContainer: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        margin: 10,
      },
      
    imageStyle: {
        width: 120,
        height: 100,
        margin: 10,
        top: 10,
    },
    animalName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#5A2828',
        textAlign: 'center',
        width: '90%',
        margin: 5,
    },
    circleButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#FFBA69",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginLeft: 10,
      },
    editIconContainer: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5,
        borderWidth: 1,
        borderColor: '#5A2828',
        bottom: -5,
        right: 5,
        transform: [{ translateX: 5 }, { translateY: 0 }],
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
      
   
};

export default PetNameScreenStyles;