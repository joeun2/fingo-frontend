/*! watch.js © yamoo9.net, 2016 */
'use strict';

let gulp   = require('gulp');
let log    = require('./utils/log');
let config = require('../config');

gulp.task('watch', ()=> {

  let watcher = {
    'html'    : gulp.watch(`${config.watch.html}`, ['html']),
<<<<<<< HEAD
=======
    'directives' : gulp.watch(`${config.watch.directives}`, ['move-directives']),
>>>>>>> b75f1573946bf7c557a930f3fe3e9204eb2402b6
    'sass'    : gulp.watch(`${config.watch.sass}`, ['sass']),
    'webpack' : gulp.watch(`${config.watch.js}`, ['webpack']),
  };

  let notify = event => {
    let path = event.path.split('/');
    log.Y(`
------------------------------------
  ${path[path.length - 1]} 파일 ${event.type} 이벤트 감지
------------------------------------
    `);
  };

  for ( let key in watcher ) {
    watcher[key].on('change', notify);
  }

});
