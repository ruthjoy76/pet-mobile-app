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
    scrollView: {
        flex: 1,
        marginTop: 10,
      },
    headerText: {
        fontSize: 28,
        fontWeight: '700',
        letterSpacing: 0.5,
        color: '#000000', 
        textAlign: 'center',  
        marginTop: 0,
    },
    subHeader: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 10,
    },
    subHeaderText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#5A2828', 
        textAlign: 'left',  
        marginTop: 10,
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginRight: 10,
    },
   
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 16,
    },
    items: {
        backgroundColor: '#FFEAD1',
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 60,
        width: '70%',
        borderWidth: 1,
        borderColor: '#c0c0c0',
    },
    addWrapper: {
        height: 60,
        width: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        borderColor: '#c0c0c0',
        borderWidth: 1
    },
    addText: {}
};
 export default TaskScreenStyles;