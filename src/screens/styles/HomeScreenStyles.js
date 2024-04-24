
const HomeScreenStyles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    subHeader: {
        height: 90,
        justifyContent: 'center',
    },
    mainContainer: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#FFEAD1',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 10,
    },
    subHeaderText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        margin: 10,
    },
    profilePictureContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFBA69',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10, // Increased margin for more space between sections
    },
    profilePicture: {
        width: 50, // Increased width for better visibility
        height: 50, // Increased height for better visibility
        borderRadius: 60, // Retaining circular shape
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
    profileNameInput: {
        margin: 10, // Slight increase in margin for better spacing
        padding: 10, // Increased padding for comfort
        borderWidth: 1,
        borderColor: '#fff', // Matches button color for consistency
        borderRadius: 10, // Rounded corners for a modern look
        width: '80%', // Adjusted width to take up more screen space
        textAlign: 'center',
        fontSize: 16, // Increased font size for better readability
    },
    
    pickAnimalContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFBA69',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        padding: 10,
        borderRadius: 10,
        top: 30,
        width: "95%",
        margin: 10,  // Updated margin property to 10
    },
    
    pickAnimalText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        margin: 10,
    },
    containerItem: {
        flex: .7,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 40, 
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        marginHorizontal: 10,
        marginVertical: 10,
        height: 130, // Set the same height as pickAnimalContainer
        width: 125,
        justifyContent: 'center',
    },
    checkbox: {
        alignSelf: 'center', // Align the checkbox to the center horizontally
        top: 20, // Add margin at the top of the checkbox
        marginBottom: 10, // Add margin at the bottom of the checkbox
        borderWidth: 2, // Add a border around the checkbox
        borderColor: '#000000', // Match the button color for consistency
        borderRadius: 5, // Rounded corners for a modern look   
    },
    subContainer: {
        alignItems: 'center',
      },
    containerText: {
        fontSize: 16,
        width: '100%',
        fontWeight: '600',
        color: '#5A2828',
        textAlign: 'center',
        padding: 10,
        marginTop: 15, // Add margin at the top of the text
    },
    imageStyle: {
        width: 80,
        height: 70,
        alignSelf: 'center', // Align the image to the center horizontally
        margin: 10, // Add margin at the bottom of the image
    },
    enterButton: {
        backgroundColor: '#5A2828',
        width: '85%',
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        marginBottom: 30,
        bottom: 50,
        alignSelf: 'center',
        paddingHorizontal: 40,
    },
    enterButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
};

export default HomeScreenStyles;