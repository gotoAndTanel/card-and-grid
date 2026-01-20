import React from 'react';

import { Header } from './Header';
import './page.css';
import {Col, Grid} from '@/stories/grid/Grid';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <div>
      <Grid>
        <Col>
          Card
        </Col>
      </Grid>
    </div>
  );
};
