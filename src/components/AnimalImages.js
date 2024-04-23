// Import images
import cat from '../../assets/cat.png';
import dog from '../../assets/dog.png';
import horse from '../../assets/horse.png';
import bird from '../../assets/bird.png';
import hamster from '../../assets/hamster.png';
import rabbit from '../../assets/rabbit.png';

const getImageSource = (animalName) => {
    switch (animalName) {
        case 'cat':
            return cat;
        case 'dog':
            return dog;
        case 'horse':
            return horse;
        case 'bird':
            return bird;
        case 'hamster':
            return hamster;
        case 'rabbit':
            return rabbit;
        default:
            return null; // Or provide a default image source
    }
};

export default getImageSource;
