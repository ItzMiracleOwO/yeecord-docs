/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';

function Logo(props) {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {
      title: navbarTitle,
      logo = {
        src: '',
      },
    },
  } = useThemeConfig();
  const {imageClassName, titleClassName, ...propsRest} = props;
  const logoLink = useBaseUrl(logo.href || '/');
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };
  const themedImage = (
    <ThemedImage
      sources={sources}
      height={32}
      width={32}
      alt={logo.alt || navbarTitle || title}
    />
  );
  return (
    <Link
      to={logoLink}
      {...propsRest}
      {...(logo.target && {
        target: logo.target,
      })}>
      {logo.src &&
        (imageClassName ? (
          <div className={imageClassName}>{themedImage}</div>
        ) : (
          themedImage
        ))}
      {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
    </Link>
  );
}

export default Logo;
