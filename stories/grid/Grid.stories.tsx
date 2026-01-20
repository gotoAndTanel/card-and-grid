import { Col, Grid } from '@/stories/grid/Grid';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Component/Grid',
  parameters: {
    layout: 'fullscreen',
  },
  component: Grid,
  subcomponent: { Col },
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;
export default meta;
type Story = StoryObj<typeof meta>;

const Content = () => (
  <div style={{ height: '100px', backgroundColor: 'teal' }} />
);

export const Primary: Story = {
  render: (args) => (
    <Grid>
      <Col xs={2} sm={2} md={2} lg={3} xl={3}>
        <Content />
      </Col>
      <Col xs={2} sm={2} md={2} lg={3} xl={3}>
        <Content />
      </Col>
      <Col xs={4} sm={2} md={2} lg={3} xl={3}>
        <Content />
      </Col>
      <Col xs={1} sm={3} md={3} lg={3} xl={3}>
        <Content />
      </Col>
      <Col xs={1} sm={3} md={3} lg={4} xl={4}>
        <Content />
      </Col>
      <Col xs={1} sm={6} md={6} lg={4} xl={4}>
        <Content />
      </Col>
      <Col xs={1} sm={1} md={1} lg={4} xl={4}>
        <Content />
      </Col>
      <Col xs={1} sm={1} md={1} lg={6} xl={6}>
        <Content />
      </Col>
      <Col xs={1} sm={1} md={1} lg={6} xl={6}>
        <Content />
      </Col>
      <Col xs={1} sm={1} md={1} lg={12} xl={12}>
        <Content />
      </Col>
    </Grid>
  ),
};
