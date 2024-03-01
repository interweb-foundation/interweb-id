import { Box, Center } from '@chakra-ui/react';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  MdOutlineSentimentNeutral,
  MdOutlineSentimentSatisfied,
  MdOutlineSentimentVerySatisfied
} from 'react-icons/md';

import LearnCard from './LearnCard';
import LearnList from './LearnList';
import { LogoCloud, SimpleBrand } from './LogoCloud';

storiesOf('Template/market', module).add('LearnCard', () => {
  const showAvatar = boolean('show avatar', true);

  return (
    <Center>
      <Box maxW="xs">
        <LearnCard
          title="Basic Mnemonics"
          subTitle="Cosmology Courses"
          description="Get started using Cosmology and use plain-text mnemonics for test environments. Not recommended for production use."
          videoURL="https://www.youtube.com/watch?v=K46jMo5pjvQ&ab_channel=Cosmology"
          tags={[
            'cosmology',
            'tutorial',
            'other tag',
            'more tag',
            ...Array(10)
              .fill(undefined)
              .map((v, i) => `tag ${(i + 1) * 1000}`)
          ]}
          displayAvatar={showAvatar}
          avatar={{ author: 'Roel Aufderehar', uploadTime: 'July 15, 2022' }}
        />
      </Box>
    </Center>
  );
});

storiesOf('Template/market', module).add('LearnList', () => {
  const showAvatar = boolean('show avatar', true);
  const data = [
    {
      title: 'Basic Mnemonics',
      subTitle: 'Cosmology Courses',
      description:
        'Get started using Cosmology and use plain-text mnemonics for test environments. Not recommended for production use.',
      videoURL:
        'https://www.youtube.com/watch?v=K46jMo5pjvQ&ab_channel=Cosmology',
      tags: [
        'cosmology',
        'tutorial',
        'other tag',
        'more tag',
        ...Array(10)
          .fill(undefined)
          .map((v, i) => `tag ${(i + 1) * 1000}`)
      ],
      displayAvatar: showAvatar,
      avatar: { author: 'Roel Aufderehar', uploadTime: 'July 15, 2022' }
    },
    {
      title: 'Encrypted Mnemonics',
      subTitle: 'Cosmology Courses',
      description:
        'Learn how to encrypt mnemonics for safer use within the Cosmology CLI.',
      videoURL:
        'https://www.youtube.com/watch?v=gHIpLZOpHaw&ab_channel=Cosmology',
      tags: ['cosmology', 'tutorial'],
      displayAvatar: showAvatar,
      avatar: { author: 'Roel Aufderehar', uploadTime: 'July 15, 2022' }
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      subTitle: 'Cosmology Courses',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, incidunt quis nemo quod exercitationem iste perferendis possimus a eius consequatur cumque quasi officia assumenda aliquid voluptate voluptas saepe magni deleniti! Ipsum repellendus, quo aliquid magni quae similique amet accusamus tenetur harum ad necessitatibus, nesciunt delectus voluptatum veniam! Eius dicta eligendi praesentium ipsa commodi aut alias, nam quas numquam ipsum necessitatibus minima quidem explicabo porro neque repellendus impedit omnis est facere iste aspernatur incidunt nemo delectus quod. Inventore quidem, ab magni quo tempora numquam incidunt veniam fugiat quia voluptatibus est minima, minus, accusantium laudantium eum laboriosam molestiae saepe? Cupiditate doloremque, atque delectus labore similique facilis nisi tenetur tempore suscipit ea fugiat, alias officia iure quaerat autem ullam esse rerum hic reiciendis aliquid adipisci. Similique corrupti cupiditate dolorum hic mollitia alias accusantium distinctio magnam. Eum, doloremque aliquid eveniet veniam aperiam inventore hic, accusantium qui vitae temporibus commodi provident quia enim assumenda, natus saepe perferendis unde ab. Maxime minus non repellat consequuntur minima laudantium at illum a? Fugiat sunt amet voluptas illo dolorum neque nesciunt aspernatur quia ea. Aliquid nulla, maxime vitae ad modi assumenda placeat quisquam officiis quod saepe aspernatur perspiciatis fugit a illum praesentium? Quo, unde at consequuntur ad pariatur illum.',
      videoURL: 'https://youtu.be/3YqPKLZF_WU',
      tags: [
        'cosmjs',
        'chain-registry',
        'keplr',
        'telescope',
        'osmojs',
        ...Array(5)
          .fill(undefined)
          .map((v, i) => `tag ${(i + 2) * 1000}`)
      ],
      displayAvatar: showAvatar,
      avatar: { author: 'Roel Aufderehar', uploadTime: 'July 15, 2022' }
    }
  ];
  return (
    <Center>
      <Box w="full" maxW="5xl">
        <LearnList
          learnCards={data.map(
            ({
              title,
              subTitle,
              description,
              videoURL,
              tags,
              displayAvatar,
              avatar
            }) => (
              <>
                <LearnCard
                  title={title}
                  subTitle={subTitle}
                  description={description}
                  videoURL={videoURL}
                  tags={tags}
                  displayAvatar={displayAvatar}
                  avatar={avatar}
                />
              </>
            )
          )}
        />
      </Box>
    </Center>
  );
});

storiesOf('Template/market', module).add('LogoCloud', () => {
  const brands = [
    'https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720944_960_720.png',
    'https://cdn.pixabay.com/photo/2013/01/29/22/06/facebook-76658_960_720.png',
    'https://cdn.pixabay.com/photo/2016/05/08/14/53/camera-1379223_960_720.jpg',
    <SimpleBrand name="create-cosmos-app" icon={MdOutlineSentimentSatisfied} />,
    <SimpleBrand name="cosmos-kit" icon={MdOutlineSentimentVerySatisfied} />,
    <SimpleBrand name="osmojs" icon={MdOutlineSentimentNeutral} />
  ];

  return (
    <Center>
      <Box w="full" maxW="5xl" px={4} py={16}>
        <LogoCloud
          headline="These and other companies trust us"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore"
          brands={brands}
        />
      </Box>
    </Center>
  );
});
