import { createServer, Model } from 'miragejs';

createServer({
  models: {
    rides: Model,
  },

  seeds(server) {
    server.create('ride', {
      id: '1',
      name: 'SkyHawk',
      price: 220,
      description:
        "The SkyHawk is a sleek and agile flying car that's perfect for zooming through the skies. With its powerful engines and advanced flight systems, the SkyHawk is the ultimate allround aerial machine.",
      imageUrl: 'https://i.ibb.co/GpvhKMH/skyhawk.jpg',
      type: 'simple',
      hostId: '1',
    });
    server.create('ride', {
      id: '2',
      name: 'Nimbus',
      price: 290,
      description:
        'The Nimbus is a high-performance flying car that combines speed and comfort in a stylish package. With its cutting-edge technology and luxurious interior, the Nimbus is the perfect way to travel in style.',
      imageUrl: 'https://i.ibb.co/KKqFpzT/nimbus.png',
      type: 'luxury',
      hostId: '1',
    });
    server.create('ride', {
      id: '3',
      name: 'StarCruiser',
      price: 300,
      description:
        "The StarCruiser is a powerful and versatile flying car that can take you anywhere you want to go. Whether you're exploring new horizons or just cruising around town, the StarCruiser is the perfect ride.",
      imageUrl: 'https://i.ibb.co/449NS6L/starcruiser.png',
      type: 'rugged',
      hostId: '1',
    });
    server.create('ride', {
      id: '4',
      name: 'SkyChaser',
      price: 300,
      description:
        "The SkyChaser is a fast and nimble flying car that's perfect for thrill-seekers and adventurers. With its agile handling and sleek design, the SkyChaser is the ultimate aerial sports car.",
      imageUrl: 'https://i.ibb.co/PFTR44g/skychaser.png',
      type: 'simple',
      hostId: '2',
    });
    server.create('ride', {
      id: '5',
      name: 'The Explorer',
      price: 340,
      description:
        "The Explorer is a rugged and reliable flying car that's built to take on any challenge. With its advanced navigation systems and sturdy construction, the Explorer is the perfect choice for explorers and adventurers.",
      imageUrl: 'https://i.ibb.co/Dbc6301/explorer.png',
      type: 'rugged',
      hostId: '3',
    });
    server.create('ride', {
      id: '6',
      name: 'Winged Voyager',
      price: 520,
      description:
        "The Winged Voyager is a luxurious flying car that's perfect for long-distance travel. With its spacious cabin and state-of-the-art entertainment systems, the Winged Voyager is the ultimate way to fly in comfort and style.",
      imageUrl: 'https://i.ibb.co/XSmYdV1/voyager.png',
      type: 'luxury',
      hostId: '3',
    });
  },

  routes() {
    this.namespace = 'api';
    this.logging = false;

    this.get('/rides', (schema: any, request) => {
      return schema.rides.all();
    });

    this.get('/rides/:id', (schema: any, request) => {
      const id = request.params.id;
      return schema.rides.find(id);
    });

    this.get('/host/rides', (schema: any, request) => {
      // hardcoding hostId temporarily TODO:
      return schema.rides.where({ hostId: '1' });
    });

    this.get('host/rides/:id', (schema: any, request) => {
      // hardcoding hostId temporarily TODO:
      const id = request.params.id;
      return schema.rides.where({ id, hostId: '1' });
    });
  },
});
