import * as React from 'react';
import { Image } from '@fluentui/react-components';

export const Shadow = () => (
  <Image shadow src="https://fabricweb.azureedge.net/fabric-website/placeholders/300x300.png" alt="Image placeholder" />
);

Shadow.parameters = {
  docs: {
    description: {
      story: 'The shadow prop will apply box shadow styling to the image.',
    },
  },
};
