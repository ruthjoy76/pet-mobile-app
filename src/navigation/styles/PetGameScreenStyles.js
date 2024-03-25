const PetGameScreenStyles = {
    container: {
        flex: 1,
      },
      circleButton: {
        position: 'absolute',
        width: 60,
        height: 60,
        top: 30,
        left: 20,
        borderRadius: 30,
        backgroundColor: "#FFBA69",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        
        zIndex: 1, // Ensures the button is above the image
      },
      imageContainer: {
        flex: 1, // Ensure the image takes up the entire space
      },
      imageStyle: {
        flex: 1,
        width: undefined, // Use undefined to maintain aspect ratio
        height: undefined, // Use undefined to maintain aspect ratio
        resizeMode: 'cover', // Maintain aspect ratio and fill entire space
      },
};

  export default PetGameScreenStyles;
  