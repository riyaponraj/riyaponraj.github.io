// TODO Add a couple lines about each project
const data = [
  {
    title: 'Future Crypto Price Prediction',
    // subtitle: '2015 BVP Hackathon',
    link: 'https://github.com/riyaponraj/Future-Crypto-Price-Prediction',
    image: '/images/projects/crypto.png',
    date: '2023-07-01',
    desc:
      'The project demonstrates the integration of financial prediction models with real-time decision-making in cryptocurrency trading. It uses ARIMA models to predict future Bitcoin, Ethereum, and Litecoin prices, with pickled models for adaptation and continuous learning. Users receive price predictions and suggested trading decisions based on a straightforward threshold. ',
  },
  {
    title: 'Protein Classification',
    link: 'https://github.com/riyaponraj/Protein-Classification',
    image: '/images/projects/drug.jpg',
    desc:
      'Diverse peptides encompassing viral, bacterial, fungal, hypersensitivity, cancer, and allergenic categories, were systematically categorized. A pipeline for feature extraction from protein sequences was developed using the ProtBert model. Integration with the DeepPurpose framework resulted in distinguishing useful proteins from enzyme and protein datasets.',
  },
  {
    title: 'AI powered dual way communication system for people with Audio Impairments',
    link: 'https://github.com/riyaponraj/Real-time-communication-system-powered-by-AI-for-specially-abled',
    image: '/images/projects/asl.jpg',
    date: '2015-06-28',
    desc:
      'Developed a system using Convolutional Neural Networks to convert American Sign Language  gestures into text or speech, addressing challenges like lighting conditions. Implemented a user-friendly Flask web application with a live video feed for real-time ASL gesture recognition, aiming to enhance communication for Deaf-Mute individuals through advanced technology.',
  },
  {
    title: 'Cat Detector',
    subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    image: '/images/projects/catdetector.jpg',
    date: '2015-05-15',
    desc:
      'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
      + 'Over 60,000 cats were classified before server bills made the project too expensive '
      + 'to continue hosting.',
  },
];

export default data;
