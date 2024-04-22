const PetNameModalStyle = {
modalView: {
    margin: 20,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
},
modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
},
modalImage: {
    width: 100,
    height: 100,
    backgroundColor: '#FFBA69',
    borderColor: '#5A2828',
    marginBottom: 10,
    borderRadius: 50,
},
cameraIcon: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: '#5A2828',
    bottom: 9,
    right: 2,
    transform: [{ translateX: 5 }, { translateY: 0 }],
    alignItems: 'center',
},
input: {
    height: 40,
    width: '100%',
    borderColor: '#FFEAD1',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 20,
},
button: {
    backgroundColor: '#FFBA69',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,  
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    elevation: 5,    
},
buttonText: {
    color: '#5A2828',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
},

};
export default PetNameModalStyle;