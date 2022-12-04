/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import { map } from 'lodash';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';
import { flattenToAppURL, addAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => {
  const { settings } = config;
  const { lang, siteActions = [] } = useSelector(
    (state) => ({
      lang: state.intl.locale,
      siteActions: state.actions?.actions?.site_actions,
    }),
    shallowEqual,
  );

  return (
    <Segment
      role="contentinfo"
      vertical
      padded
      inverted
      color="grey"
      textAlign="center"
      id="footer"
    >
      <Container>
        <Segment basic inverted color="grey" className="discreet">
          <FormattedMessage
            id="footer_sensen"
            defaultMessage="这是页脚"
          />{' '}
          <FormattedMessage
            id="license_sensen "
            defaultMessage="版权"
          />
        </Segment>
      </Container>
    </Segment>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
