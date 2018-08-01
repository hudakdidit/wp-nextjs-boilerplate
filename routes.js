const Router = require('nextjs-dynamic-routes')

const router = new Router();

router.add({ name: 'post', pattern: '/post/:slug' });

module.exports = router