import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

export class CardDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Card isHoverable={true}>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
  }
}
