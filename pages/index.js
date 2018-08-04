import React from 'react'
import styled, { hydrate, keyframes, css, injectGlobal } from 'react-emotion'
import PostsList from '~/shared/components/PostsList';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
  html, body {
    padding: 3rem 1rem;
    margin: 0;
    background: papayawhip;
    min-height: 100%;
    font-family: monospace;
    font-size: 24px;
  }
`;


export default ({ posts = [] }) => {
  return (
    <div>
      <PostsList />
    </div>
  )
};