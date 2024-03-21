const HomeScreenStyles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        justifyContent: 'center',
        marginBottom: 15,
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#FFEAD1',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headerText: {
        fontSize: 28,
        fontWeight: '700',
        letterSpacing: 0.5,
        color: '#000000', 
        textAlign: 'center',  
        marginTop: 10,
    },
    subHeaderText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#5A2828', 
        textAlign: 'left',  
        marginTop: 20,
        marginLeft: 25,
    },
    containerItem: {
        backgroundColor: 'white',
        borderRadius: 22,
        margin: 20,
        height: 110,
        paddingHorizontal: 10, // Horizontal padding
        paddingVertical: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    containerText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#5A2828', 
        textAlign: 'left', 
        marginLeft: 20,
        marginBottom: 5,
        marginTop: 0,
    },
    containerParagraphText: {
        fontSize: 14,
        fontWeight: '200',
        color: '#5A2828', 
        textAlign: 'left',
        marginLeft: 20,
        marginRight: 20,
    },
};

export default HomeScreenStyles;
