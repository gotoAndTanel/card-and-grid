import {Card} from '@/stories/card/Card';
import {Meta, StoryObj} from '@storybook/nextjs-vite';

const meta: Meta = {
    title: 'Example/Card',
    component: Card,
} satisfies Meta<typeof Card>

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Lorem ipsum dolor',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ligula tortor.',
        price: {
            text: 'Room starts at',
            value: 106
        },
        image: {
            src: 'https://placehold.co/1600x900',
            alt: 'card image'
        },
        background: false,
        href: '#'
    }
}

export const WithBackground: Story = {
    args: {
        title: "Lorem ipsum dolor",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ligula tortor.",
        price: {
            "text": "Room starts at",
            "value": 106
        },
        image: {
            "src": "https://placehold.co/1600x900",
            "alt": "card image"
        },
        background: true,
        href: '#'
    }
};