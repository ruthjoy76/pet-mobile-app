const PetNameScreenStylesAndroid = {
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },
      
    imageStyle: {
        width: 140,
        height: 120,
        borderRadius: 30,
        margin: 10,
    },
    enterButton: {
        position: 'absolute',
        backgroundColor: '#5A2828',
        width: '80%',
        borderRadius: 20,
        top: 500,
        padding: 10,
       

        
        alignItems: 'center',
    },
    enterButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    editIconContainer: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5,
        borderWidth: 1,
        borderColor: '#5A2828',
        bottom: 20,
        right: 10,
        transform: [{ translateX: 5 }, { translateY: 0 }],
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
      
   
};

export default PetNameScreenStylesAndroid;