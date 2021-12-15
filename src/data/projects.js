// TODO Add a couple lines about each project
const data = [
  {
    title: 'Face Recognition',
    subtitle: 'Face Recognition for authentication',
    link: 'https://github.com/anukchat/face-watcher',
    image: '/images/projects/face-recognition.jpg',
    date: '2020-11-20',
    desc:
      'Built as a part of hackathon '
      + 'Clicks ypur photo and registers your face with name 1 time'
      + 'Next time, it automatically detects and recognizes the person , irrespective of their changed look '
      + 'Uses similarity score algorithm to group similar images together and map it with name',
  },
  {
    title: 'Cassava Leaf Disease identifier',
    subtitle: 'Created as a part of Kaggle competition',
    link: 'https://github.com/anukchat/cassava_leaf_classifier',
    image: '/images/projects/cassava-leaves.jpg',
    date: '2020-12-20',
    desc:
      'Built with Pytorch + react, it classifies disease on a Cassava Leaf into 4 major categories '
      + 'built with PyTorch and ResNet model, frontend created in React, '
      + 'it can be used in relatime detection of the cassava leaf disease by clicking its photograph',
  },
  {
    title: 'Space Potato',
    subtitle: 'A kickstarter funded potato powered weather balloon.',
    link: 'http://www.spacepotato.org',
    image: '/images/projects/spacepotato.jpg',
    date: '2015-06-28',
    desc:
      'Launched a potato battery powered weather balloon with two cameras '
      + 'and gps transponder. Resulting photos were published in a coffee table book. '
      + 'You can email me for a copy.',
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
