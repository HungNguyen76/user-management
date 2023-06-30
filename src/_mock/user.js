import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

// const users = [...Array(2)].map((_, index) => ({
//   id: faker.datatype.uuid(),
//   avatarUrl: '/assets/images/avatars/avatar_1.jpg',
//   name: "Do Thanh Tai",
//   company: "RA",
//   isVerified: faker.datatype.boolean(),
//   status: sample(['active', 'banned']),
//   role: sample([
//     'Leader',
//   ]),
// }
// ))
const users = [
  {
    id: faker.datatype.uuid(),
    avatarUrl: '/assets/images/avatars/avatar_1.jpg',
    name: 'Do Thanh Tai',
    company: 'RA',
    isVerified: faker.datatype.boolean(),
    status: 'active',
    role: 'Student',
  },
  {
    id: faker.datatype.uuid(),
    avatarUrl: '/assets/images/avatars/avatar_2.jpg',
    name: 'Thanh Thu',
    company: 'RA',
    isVerified: faker.datatype.boolean(),
    status: 'active',
    role: 'Student',
  },
  {
    id: faker.datatype.uuid(),
    avatarUrl: '/assets/images/avatars/avatar_3.jpg',
    name: 'Quoc Hai',
    company: 'RA',
    isVerified: faker.datatype.boolean(),
    status: 'active',
    role: 'Teacher',
  },
  {
    id: faker.datatype.uuid(),
    avatarUrl: '/assets/images/avatars/avatar_4.jpg',
    name: 'Thu Huong',
    company: 'RA',
    isVerified: faker.datatype.boolean(),
    status: 'active',
    role: 'Student',
  },
  {
    id: faker.datatype.uuid(),
    avatarUrl: '/assets/images/avatars/avatar_5.jpg',
    name: 'Trung trau',
    company: 'RA',
    isVerified: faker.datatype.boolean(),
    status: 'banned',
    role: 'Student',
  },
  {
    id: faker.datatype.uuid(),
    avatarUrl: '/assets/images/avatars/avatar_6.jpg',
    name: 'Heo Dat',
    company: 'RA',
    isVerified: faker.datatype.boolean(),
    status: 'active',
    role: 'Student',
  },
  {
    id: faker.datatype.uuid(),
    avatarUrl: '/assets/images/avatars/avatar_7.jpg',
    name: 'Keo Bong Gon',
    company: 'RA',
    isVerified: faker.datatype.boolean(),
    status: 'active',
    role: 'Student',
  },
];

export default users;
