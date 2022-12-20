export interface TeamBox {
  imgUrl: string;
  textTeam: string;
}
export interface OnGoingBox {
  imgUrl: string;
  title: string;
  content: string;
  subtitle: string;
  published: string;
}

export const teamsArray: TeamBox[] = [
  {
    imgUrl: './../assets/logos/aliPay.png',
    textTeam: 'Scientific movil techniques are growing',
  },
  {
    imgUrl: './../assets/logos/antDesign.png',
    textTeam: 'Secondary 2 G is coming',
  },
  {
    imgUrl: './../assets/logos/bootstrap.png',
    textTeam: 'High-force descend in every part of the world',
  },
  {
    imgUrl: './../assets/logos/angular.png',
    textTeam: 'Wi Yanzu',
  },
  {
    imgUrl: './../assets/logos/pro.png',
    textTeam: 'Programmer emerges from the hole',
  },
  {
    imgUrl: './../assets/logos/react.png',
    textTeam: 'Lie to learn comfort concepts about',
  },
];

export const onGoingArray: OnGoingBox[] = [
  {
    imgUrl: './../assets/logos/aliPay.png',
    title: 'Alipay',
    content: "It's an inner thing that they can't reach and can't reach.",
    subtitle: 'Science moving bricks',
    published: '2 days ago ',
  },
  {
    imgUrl: './../assets/logos/pro.png',
    title: 'Ant Design Pro',
    content:
      "At that time, I only thought about what I wanted, and I didn't want to",
    subtitle: 'Programmer everyday',
    published: '2 years ago',
  },
  {
    imgUrl: './../assets/logos/angular.png',
    title: 'Angular',
    content: 'Hope is a good thing, maybe the best, good things will not die.',
    subtitle: 'The whole group is Wu Ya...',
    published: '2 years ago',
  },
  {
    imgUrl: './../assets/logos/bootstrap.png',
    title: 'Bootstrap',
    content: 'Winter is coming',
    subtitle: 'High-force design team',
    published: '2 years ago',
  },
  {
    imgUrl: './../assets/logos/antDesign.png',
    title: 'Ant Design',
    content: 'There are so many pubs in town, but she walked into my pub. ',
    subtitle: '中二少女团',
    published: '2 days ago',
  },
  {
    imgUrl: './../assets/logos/react.png',
    title: 'React',
    content:
      'Life is like a box of chocolates, and the results are often unexpected.',
    subtitle: 'Lying you to learn computer',
    published: '2 years ago',
  },
];
