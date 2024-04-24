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
    profilePictureContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFBA69',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        margin: 10, // Increased margin for more space between sections
    },
   
    imageStyle: {
        width: 50, // Increased width for better visibility
        height: 50, // Increased height for better visibility
        borderRadius: 60,
    },
    iconCircle: {
        width: 50, // Width of the circle
        height: 50, // Height of the circle
        borderRadius: 25, // Half of width/height to create a perfect circle
        backgroundColor: '#fff', // Background color of the circle
        justifyContent: 'center', // Center the icon within the circle
        alignItems: 'center', // Center the icon within the circle
        // Additional styling as needed, e.g., shadow, border, etc.
    },
    subHeaderText: {
        margin: 10, // Slight increase in margin for better spacing
        padding: 10, // Increased padding for comfort
        borderWidth: 1,
        borderColor: '#fff', // Matches button color for consistency
        borderRadius: 10, // Rounded corners for a modern look
        width: '80%', // Adjusted width to take up more screen space
        textAlign: 'center',
        fontSize: 16, // Increased font size for better readability
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