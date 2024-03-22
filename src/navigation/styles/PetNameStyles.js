const PetNameStyles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#FFEAD1',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 100,
        overflow: 'hidden', // I-clip ang nilalaman na nag-ooverflow
    },
    headerText: {
        fontSize: 48,
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
        alignItems: 'flex-start', // I-align ang mga item sa itaas
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 22,
        top: 30,
        margin: 20,
        marginTop: 80,
        padding: 10,
        height: '60%',
        position: 'relative', // Papaganahin ang absolute positioning sa loob ng container na ito
    },
    imageContainer: {
        flex: 1,
        position: 'absolute', // Papaganahin ang absolute positioning ng container
        top: -50, // Ilipat ang container pataas ng 50 unit (ayusin depende sa iyong kagustuhan)
        left: '50%',
        marginLeft: -65, // Ayusin depende sa sukat ng container
    },
    imageStyle: {
        width: 150, 
        height: 150, 
        borderRadius: 10, 
    },
    input: {
        position: 'absolute',
        bottom: 20,
        left: '40%',
        transform: [{ translateX: -50 }],
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 50,
        paddingHorizontal: 50,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20, // Adjust the position of the button
        left: '57%',
        transform: [{ translateX: -50 }], // Center the button horizontally
        backgroundColor: '#FFBA69',
        paddingHorizontal: 20,
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
