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
   
};

export default PetNameScreenStylesAndroid;