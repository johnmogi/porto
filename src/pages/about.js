import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Appbar from '../components/appbar';

import ProTip from '../components/pro-tip';
import Link from '../components/link';
import Copyright from '../components/copyright';

export default function About() {
  return (
    <Container maxWidth="xl">
      <Appbar fixed />
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/"
        >
          Go to the main page
        </Button>
        <ProTip />
      </Box>
        <Copyright />
    </Container>
  );
}
