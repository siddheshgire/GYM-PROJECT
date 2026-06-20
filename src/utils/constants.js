// GymLife Website Constants & Config Data

export const SOCIAL_LINKS = [
  { platform: 'facebook', url: '#', icon: 'Facebook' },
  { platform: 'twitter', url: '#', icon: 'Twitter' },
  { platform: 'youtube', url: '#', icon: 'Youtube' },
  { platform: 'instagram', url: '#', icon: 'Instagram' },
  { platform: 'envelope', url: '#', icon: 'Mail' }
];

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Classes', path: '/class-details' },
  { name: 'Services', path: '/services' },
  { name: 'Our Team', path: '/team' },
  {
    name: 'Pages',
    path: '#',
    dropdown: [
      { name: 'About Us', path: '/about' },
      { name: 'Classes Timetable', path: '/timetable' },
      { name: 'Bmi Calculator', path: '/bmi' },
      { name: 'Our Team', path: '/team' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Our Blog', path: '/blog' },
      { name: '404', path: '/not-found' }
    ]
  },
  { name: 'Contact', path: '/contact' }
];

export const HERO_SLIDES = [
  {
    id: 1,
    bgImage: '/img/hero/hero-1.jpg',
    subtitle: 'Shape your body',
    title: 'Be strong training hard'
  },
  {
    id: 2,
    bgImage: '/img/hero/hero-2.jpg',
    subtitle: 'Shape your body',
    title: 'Be strong training hard'
  }
];

export const CHOOSE_US_ITEMS = [
  {
    id: 1,
    icon: 'Bike',
    title: 'Modern equipment',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.'
  },
  {
    id: 2,
    icon: 'Salad',
    title: 'Healthy nutrition plan',
    desc: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
  },
  {
    id: 3,
    icon: 'Dumbbell',
    title: 'Professional training plan',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.'
  },
  {
    id: 4,
    icon: 'HeartPulse',
    title: 'Unique to your needs',
    desc: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
  }
];

export const OFFER_CLASSES = [
  {
    id: 1,
    image: '/img/classes/class-1.jpg',
    category: 'STRENGTH',
    title: 'Weightlifting'
  },
  {
    id: 2,
    image: '/img/classes/class-2.jpg',
    category: 'Cardio',
    title: 'Indoor cycling'
  },
  {
    id: 3,
    image: '/img/classes/class-3.jpg',
    category: 'STRENGTH',
    title: 'Kettlebell power'
  },
  {
    id: 4,
    image: '/img/classes/class-4.jpg',
    category: 'Cardio',
    title: 'Indoor cycling'
  },
  {
    id: 5,
    image: '/img/classes/class-5.jpg',
    category: 'Training',
    title: 'Boxing'
  }
];

export const PRICING_PLANS = [
  {
    id: 1,
    title: 'Class drop-in',
    price: '39.0',
    type: 'SINGLE CLASS',
    features: [
      'Free riding',
      'Unlimited equipments',
      'Personal trainer',
      'Weight losing classes',
      'Month to month',
      'No time restriction'
    ]
  },
  {
    id: 2,
    title: '12 Month unlimited',
    price: '99.0',
    type: 'SINGLE CLASS',
    features: [
      'Free riding',
      'Unlimited equipments',
      'Personal trainer',
      'Weight losing classes',
      'Month to month',
      'No time restriction'
    ]
  },
  {
    id: 3,
    title: '6 Month unlimited',
    price: '59.0',
    type: 'SINGLE CLASS',
    features: [
      'Free riding',
      'Unlimited equipments',
      'Personal trainer',
      'Weight losing classes',
      'Month to month',
      'No time restriction'
    ]
  }
];

export const GALLERY_IMAGES = [
  { id: 1, src: '/img/gallery/gallery-1.jpg', span: 'col-span-1 md:col-span-2' },
  { id: 2, src: '/img/gallery/gallery-2.jpg', span: 'col-span-1' },
  { id: 3, src: '/img/gallery/gallery-3.jpg', span: 'col-span-1' },
  { id: 4, src: '/img/gallery/gallery-4.jpg', span: 'col-span-1' },
  { id: 5, src: '/img/gallery/gallery-5.jpg', span: 'col-span-1' },
  { id: 6, src: '/img/gallery/gallery-6.jpg', span: 'col-span-1 md:col-span-2' }
];

export const TRAINERS = [
  { id: 1, image: '/img/team/team-1.jpg', name: 'Athart Rachel', role: 'Gym Trainer' },
  { id: 2, image: '/img/team/team-2.jpg', name: 'Athart Rachel', role: 'Gym Trainer' },
  { id: 3, image: '/img/team/team-3.jpg', name: 'Athart Rachel', role: 'Gym Trainer' },
  { id: 4, image: '/img/team/team-4.jpg', name: 'Athart Rachel', role: 'Gym Trainer' },
  { id: 5, image: '/img/team/team-5.jpg', name: 'Athart Rachel', role: 'Gym Trainer' },
  { id: 6, image: '/img/team/team-6.jpg', name: 'Athart Rachel', role: 'Gym Trainer' }
];

export const TESTIMONIALS = [
  {
    id: 1,
    image: '/img/testimonial/testimonial-1.jpg',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    author: 'Marshmello Gomez',
    rating: 5
  },
  {
    id: 2,
    image: '/img/testimonial/testimonial-2.jpg',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    author: 'Marshmello Gomez',
    rating: 5
  }
];

export const TIMETABLE_SLOTS = [
  {
    time: '6.00am - 8.00am',
    schedule: {
      Monday: { event: 'WEIGHT LOOSE', trainer: 'RLefew D. Loee', category: 'workout' },
      Tuesday: { event: 'Cardio', trainer: 'RLefew D. Loee', category: 'fitness' },
      Wednesday: { event: 'Yoga', trainer: 'Keaf Shen', category: 'workout' },
      Thursday: { event: 'Fitness', trainer: 'Kimberly Stone', category: 'fitness' },
      Friday: null,
      Saturday: { event: 'Boxing', trainer: 'Rachel Adam', category: 'motivation' },
      Sunday: { event: 'Body Building', trainer: 'Robert Cage', category: 'workout' }
    }
  },
  {
    time: '10.00am - 12.00am',
    schedule: {
      Monday: null,
      Tuesday: { event: 'Fitness', trainer: 'Kimberly Stone', category: 'fitness' },
      Wednesday: { event: 'WEIGHT LOOSE', trainer: 'RLefew D. Loee', category: 'workout' },
      Thursday: { event: 'Cardio', trainer: 'RLefew D. Loee', category: 'motivation' },
      Friday: { event: 'Body Building', trainer: 'Robert Cage', category: 'workout' },
      Saturday: { event: 'Karate', trainer: 'Donald Grey', category: 'motivation' },
      Sunday: null
    }
  },
  {
    time: '5.00pm - 7.00pm',
    schedule: {
      Monday: { event: 'Boxing', trainer: 'Rachel Adam', category: 'fitness' },
      Tuesday: { event: 'Karate', trainer: 'Donald Grey', category: 'motivation' },
      Wednesday: { event: 'Body Building', trainer: 'Robert Cage', category: 'workout' },
      Thursday: null,
      Friday: { event: 'Yoga', trainer: 'Keaf Shen', category: 'workout' },
      Saturday: { event: 'Cardio', trainer: 'RLefew D. Loee', category: 'motivation' },
      Sunday: { event: 'Fitness', trainer: 'Kimberly Stone', category: 'fitness' }
    }
  },
  {
    time: '7.00pm - 9.00pm',
    schedule: {
      Monday: { event: 'Cardio', trainer: 'RLefew D. Loee', category: 'motivation' },
      Tuesday: null,
      Wednesday: { event: 'Boxing', trainer: 'Rachel Adam', category: 'fitness' },
      Thursday: { event: 'Yoga', trainer: 'Keaf Shen', category: 'workout' },
      Friday: { event: 'Karate', trainer: 'Donald Grey', category: 'motivation' },
      Saturday: { event: 'Boxing', trainer: 'Rachel Adam', category: 'fitness' },
      Sunday: { event: 'WEIGHT LOOSE', trainer: 'RLefew D. Loee', category: 'workout' }
    }
  }
];

export const TIMETABLE_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const SERVICES_STATS = [
  { percentage: 80, label: 'Body building' },
  { percentage: 85, label: 'Training' },
  { percentage: 75, label: 'Fitness' }
];

export const SERVICES_LIST = [
  {
    id: 1,
    image: '/img/services/services-1.jpg',
    title: 'Personal training',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore magna aliqua.'
  },
  {
    id: 2,
    image: '/img/services/services-2.jpg',
    title: 'Group fitness classes',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore magna aliqua.'
  },
  {
    id: 3,
    image: '/img/services/services-3.jpg',
    title: 'Strength training',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore magna aliqua.'
  },
  {
    id: 4,
    image: '/img/services/services-4.jpg',
    title: 'Body building',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore magna aliqua.'
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    image: '/img/blog/blog-1.jpg',
    title: 'Physical fitness may help prevent depression, anxiety',
    author: 'Admin',
    date: 'Dec 15, 2025',
    category: 'Trend',
    commentsCount: 20,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Aliquip ex ea commodo consequat sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      <p>Aenean sollicitudin lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      <blockquote>"The only way to keep your health is to eat what you don't want, drink what you don't like, and do what you'd rather not." - Mark Twain</blockquote>
      <p>Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.</p>
    `,
    tags: ['Gym', 'Fitness', 'Workout', 'Health']
  },
  {
    id: 2,
    image: '/img/blog/blog-2.jpg',
    title: 'Fitness: The best exercise to lose belly fat and tone up...',
    author: 'Admin',
    date: 'Dec 12, 2025',
    category: 'Workout',
    commentsCount: 15,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Aliquip ex ea commodo consequat sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      <p>Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>
    `,
    tags: ['Fitness', 'Cardio', 'Diet', 'Belly Fat']
  },
  {
    id: 3,
    image: '/img/blog/blog-3.jpg',
    title: 'The Secret to Building Muscle Without Supplements',
    author: 'Admin',
    date: 'Dec 09, 2025',
    category: 'Body building',
    commentsCount: 8,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      <p>Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>
    `,
    tags: ['Muscle', 'Nutrition', 'Weights', 'Gym']
  },
  {
    id: 4,
    image: '/img/blog/blog-4.jpg',
    title: '10 Minute HIIT Workouts for Busy Professionals',
    author: 'Admin',
    date: 'Dec 05, 2025',
    category: 'Workout',
    commentsCount: 12,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
    `,
    tags: ['HIIT', 'Workout', 'Short', 'Active']
  }
];

export const BLOG_CATEGORIES = [
  { name: 'Yoga', count: 12 },
  { name: 'Running', count: 18 },
  { name: 'Weightloss', count: 24 },
  { name: 'Cardio', count: 36 },
  { name: 'Body building', count: 48 },
  { name: 'Nutrition', count: 10 }
];

export const RECENT_COMMENTS = [
  { id: 1, author: 'Brandon Smith', postTitle: 'Physical fitness may help prevent depression...', date: '2 min ago' },
  { id: 2, author: 'Julia Roberts', postTitle: 'Fitness: The best exercise to lose belly fat...', date: '5 min ago' },
  { id: 3, author: 'Alex Reed', postTitle: 'The Secret to Building Muscle Without...', date: '10 min ago' }
];

export const BLOG_TAGS = ['Gym', 'Fitness', 'Cardio', 'Diet', 'Health', 'Workout', 'Bodybuilding', 'Yoga'];
