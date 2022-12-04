/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';

const Footer = ({ intl }) => {

  return (
    <Segment
      role="contentinfo"
      vertical
      padded
      inverted
      color="grey"
      textAlign="left"
      id="footer"
    >
      <Container>
        <Segment basic inverted color="grey" className="discreet">
          <FormattedMessage
            id="footer_sensen"
            defaultMessage="© 2022 by 森森"
          />
        </Segment>
        <List horizontal inverted>
        <div role="listitem" className="item">
            <a className="item" href="mailto:zhangfang@qymail.bhu.edu.cn">
              <FormattedMessage
                id="contatus "
                defaultMessage="  联系我们"
              />
            </a>
          </div>
        </List>
      </Container>
    </Segment>
  );
};

export default injectIntl(Footer);
