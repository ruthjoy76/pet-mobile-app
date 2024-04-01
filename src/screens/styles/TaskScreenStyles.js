const TaskScreenStyles = {
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
    subHeaderText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#5A2828', 
        textAlign: 'left',  
        marginTop: 10,
    },
    containerItem: {
        backgroundColor: '#fff',
        borderRadius: 22,
        margin: 15,
        marginTop: 5,
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    checkedContainerItem: {
        backgroundColor: '#e5e5e5',
    },
    containerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#5A2828', 
        textAlign: 'left',  
        marginLeft: 20,
        marginBottom: 5,
    },
    subHeader: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 10,
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginRight: 10,
    },
    checkbox: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderColor: '#5A2828',
        borderRadius: 7,
        marginTop: 30,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checked: {
        backgroundColor: '#5A2828',
    },
    checkmark: {
        color: 'white',
    },
    button: {
        backgroundColor: '#FFEAD1',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 20,
        marginLeft: 10,
        marginBottom: 5,
        shadowColor: '#000002A',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    },
    buttonText: {
        color: '#464646',
        fontSize: 16,
    },
    divider: {
        height: 1,
        width: '90%',
        alignSelf: 'center', 
        backgroundColor: '#464646',
        marginVertical: 10,
        marginBottom: 10,
    },
    circleButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#fff',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusSymbol: {
        position: 'absolute',
        color: '#000000', // Change color to match your design
        fontSize: 80, // Adjust the font size to make the plus symbol bigger
        fontWeight: '200',
        
    },

    content: {
        width: '92%'
      },
    
      itemText: {
        marginLeft: 8,
        fontSize: 16,
      },
    
      itemTags: {
        flexDirection: 'row',
        flexGrow: 1,
        flexWrap: 'wrap',
      },
};
 export default TaskScreenStyles;