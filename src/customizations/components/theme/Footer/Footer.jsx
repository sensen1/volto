/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

 import React from 'react';
 import { Container, List, Segment } from 'semantic-ui-react';
 import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
 import { useSelector, shallowEqual } from 'react-redux';
 import config from '@plone/volto/registry';
 
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
         <List horizontal inverted>
           <div>
           <FormattedMessage
             id="copyright"
             defaultMessage="Copyright 2022 by {BHU}"
             values={{
               BHU: (
                 <a href="http://www.bhu.edu.cn">
                   <FormattedMessage
                     id="bhu"
                     defaultMessage="BHU"
                   />
                 </a>
               ),
             }}
           />
           </div>
           <div>
             <a href="mailto:zhangfang@qymail.bhu.edu.cn">
               <FormattedMessage
                 id="contatus"
                 defaultMessage=" 联系我们"
               />
             </a>
           </div>
         </List>
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
 