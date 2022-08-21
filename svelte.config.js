import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    prerender: {
      default: true,
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    })
  }
};