import { Card } from '@/src/card/Card';
import cardMeta from '@/src/card/Card.stories';
import { Col, Grid } from '@/src/grid/Grid';

export default function Home() {
  const TestCard = () => <Card {...cardMeta.args} />;
  const TestCardBackground = () => (
    <Card {...cardMeta.args} background={true} />
  );

  return (
    <div className="flex items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <div className="mb-4 ml-8">
          <h1>Grid</h1>
        </div>
        <Grid>
          <Col xs={2} lg={3} xl={3}>
            <TestCard />
          </Col>
          <Col xs={2} lg={3} xl={3}>
            <TestCardBackground />
          </Col>
          <Col xs={4} lg={3} xl={3}>
            <TestCard />
          </Col>
          <Col xs={4} lg={3} xl={3}>
            <TestCardBackground />
          </Col>
          <Col xs={4} lg={4} xl={4}>
            <TestCard />
          </Col>
          <Col xs={4} lg={4} xl={4}>
            <TestCardBackground />
          </Col>
          <Col xs={4} lg={4} xl={4}>
            <TestCardBackground />
          </Col>
          <Col xs={4} lg={6} xl={6}>
            <TestCard />
          </Col>
          <Col xs={4} lg={6} xl={6}>
            <TestCardBackground />
          </Col>
          <Col xs={4} sm={6} md={6} lg={12} xl={12}>
            <TestCard />
          </Col>
        </Grid>
      </main>
    </div>
  );
}
