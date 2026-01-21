import { Card } from '@/src/card/Card';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Component/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Lorem ipsum dolor',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ligula tortor.',
    price: {
      text: 'Room starts at',
      value: 106,
    },
    image: {
      src: 'https://placehold.co/1600x900',
      alt: 'card image',
    },
    background: false,
    href: '#',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithBackground: Story = {
  args: {
    background: true,
  },
};

export const NoExcerpt: Story = {
  args: {
    excerpt: undefined,
  },
};

export const NoPrice: Story = {
  args: {
    price: undefined,
  },
};
