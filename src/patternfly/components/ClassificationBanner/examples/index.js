import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import classificationBannerSimpleExampleRaw from '!raw!./classification-banner-simple-example.hbs';
import classificationBannerComplexExampleRaw from '!raw!./classification-banner-complex-example.hbs';
import ClassificationbannerSimpleExample from './classification-banner-simple-example.hbs';
import ClassificationbannerComplexExample from './classification-banner-complex-example.hbs';
import classificationBannerComplexExampleDoc from '../docs/classification-banner-complex.md';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const classificationBannerSimpleExample = ClassificationbannerSimpleExample();
  const classificationBannerComplexExample = ClassificationbannerComplexExample();
  const headingText = 'Classification Banner';
  const variablesRoot = 'pf-c-classification-banner';

  return (
    <Documentation docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example
        heading="Classification Banner Simple"
        handlebars={classificationBannerSimpleExampleRaw}
        minHeight="20em"
      >
        {classificationBannerSimpleExample}
      </Example>
      <Example
        heading="Classification Banner Complex"
        handlebars={classificationBannerComplexExampleRaw}
        docs={classificationBannerComplexExampleDoc}
      >
        {classificationBannerComplexExample}
      </Example>
    </Documentation>
  );
};
