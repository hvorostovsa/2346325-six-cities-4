import { OfferType } from '../const';
import { Offers } from '../types/offers';
import { reviews } from './reviews';

export const offers: Offers = [
  {
    id: 1,
    title: 'Beautiful & luxurious studio at great location',
    description: 'Beautiful & luxurious studio at great location',
    isPremium: true,
    type: OfferType.Apartment,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    price: 120,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
    isFavorite: true,
    reviews: [reviews[0], reviews[1]],
    previewImage: 'img/apartment-01.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
  },

  {
    id: 2,
    title: 'Wood and stone place',
    description: 'Wood and stone place',
    isPremium: false,
    type: OfferType.Room,
    rating: 4.1,
    bedrooms: 1,
    maxAdults: 2,
    price: 80,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    images: ['img/room.jpg', 'img/room-small.jpg'],
    isFavorite: true,
    reviews: [reviews[3], reviews[2]],
    previewImage: 'img/room.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
  },

  {
    id: 3,
    title: 'Canal View Prinsengracht',
    description: 'Canal View Prinsengracht',
    isPremium: false,
    type: OfferType.Apartment,
    rating: 4.2,
    bedrooms: 2,
    maxAdults: 3,
    price: 132,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    images: ['img/apartment-03.jpg'],
    isFavorite: false,
    reviews: [reviews[4], reviews[5], reviews[6]],
    previewImage: 'img/apartment-03.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
  },

  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    description: 'Nice, cozy, warm big bed apartment',
    isPremium: true,
    type: OfferType.Apartment,
    rating: 5,
    bedrooms: 2,
    maxAdults: 3,
    price: 180,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
    ],
    images: ['img/apartment-small-03.jpg', 'img/apartment-small-04.jpg'],
    isFavorite: false,
    reviews: [reviews[7]],
    previewImage: 'img/apartment-small-03.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
  },
];
