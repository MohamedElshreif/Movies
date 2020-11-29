import React from 'react';
import Footer from '../components/footer';

export default function ContainerFooter({ children, ...restProps }) {
  return (
    <Footer {...restProps}>
      <Footer.Content>
        <Footer.Text>
          &copy; 2020 Jason Ujma-Alvis. All rights reserved.
          <Footer.LinkFooter>Cookie Policy</Footer.LinkFooter>.
        </Footer.Text>
        <Footer.Text>
          Designed and built by me, data provided by
          <Footer.LinkFooter>TMDb</Footer.LinkFooter>.
        </Footer.Text>
        <Footer.SocialMedia />
      </Footer.Content>
    </Footer>
  );
}
