---
title: 'About modal'
cssPrefix: 'pf-c-about-modal-box'
---
## Simple about modal

import { AboutModal, Button, TextContent, TextList, TextListItem } from '@patternfly/react-core';
import brandImg from './examples/brandImg.svg';
import logoImg from './examples/logoImg.svg';

```js
import React from 'react';
import { AboutModal, Button, TextContent, TextList, TextListItem } from '@patternfly/react-core';
import brandImg from './examples/brandImg.svg';
import logoImg from './examples/logoImg.svg';

class SimpleAboutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.handleModalToggle}>
          Show About Modal
        </Button>
        <AboutModal
          isOpen={isModalOpen}
          onClose={this.handleModalToggle}
          trademark="Trademark and copyright information here"
          brandImageSrc={brandImg}
          brandImageAlt="Patternfly Logo"
          logoImageSrc={logoImg}
          logoImageAlt="Patternfly Logo"
          productName="Product Name"
        >
          <TextContent>
            <TextList component="dl">
              <TextListItem component="dt">CFME Version</TextListItem>
              <TextListItem component="dd">5.5.3.4.20102789036450</TextListItem>
              <TextListItem component="dt">Cloudforms Version</TextListItem>
              <TextListItem component="dd">4.1</TextListItem>
              <TextListItem component="dt">Server Name</TextListItem>
              <TextListItem component="dd">40DemoMaster</TextListItem>
              <TextListItem component="dt">User Name</TextListItem>
              <TextListItem component="dd">Administrator</TextListItem>
              <TextListItem component="dt">User Role</TextListItem>
              <TextListItem component="dd">EvmRole-super_administrator</TextListItem>
              <TextListItem component="dt">Browser Version</TextListItem>
              <TextListItem component="dd">601.2</TextListItem>
              <TextListItem component="dt">Browser OS</TextListItem>
              <TextListItem component="dd">Mac</TextListItem>
            </TextList>
          </TextContent>
        </AboutModal>
      </React.Fragment>
    );
  }
}
```

## About modal without product name

```js
import React from 'react';
import { AboutModal, Button, TextContent, TextList, TextListItem } from '@patternfly/react-core';
import brandImg from './examples/brandImg.svg';
import logoImg from './examples/logoImg.svg';

class SimpleAboutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.handleModalToggle}>
          Show About Modal
        </Button>
        <AboutModal
          isOpen={isModalOpen}
          onClose={this.handleModalToggle}
          trademark="Trademark and copyright information here"
          brandImageSrc={brandImg}
          brandImageAlt="Patternfly Logo"
          logoImageSrc={logoImg}
          logoImageAlt="Patternfly Logo"
        >
          <TextContent>
            <TextList component="dl">
              <TextListItem component="dt">CFME Version</TextListItem>
              <TextListItem component="dd">5.5.3.4.20102789036450</TextListItem>
              <TextListItem component="dt">Cloudforms Version</TextListItem>
              <TextListItem component="dd">4.1</TextListItem>
              <TextListItem component="dt">Server Name</TextListItem>
              <TextListItem component="dd">40DemoMaster</TextListItem>
              <TextListItem component="dt">User Name</TextListItem>
              <TextListItem component="dd">Administrator</TextListItem>
              <TextListItem component="dt">User Role</TextListItem>
              <TextListItem component="dd">EvmRole-super_administrator</TextListItem>
              <TextListItem component="dt">Browser Version</TextListItem>
              <TextListItem component="dd">601.2</TextListItem>
              <TextListItem component="dt">Browser OS</TextListItem>
              <TextListItem component="dd">Mac</TextListItem>
            </TextList>
          </TextContent>
        </AboutModal>
      </React.Fragment>
    );
  }
}
```