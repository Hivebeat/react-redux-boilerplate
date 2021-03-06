import express from 'express';
import React from 'react';
import * as theApp from 'path/to/app/dir/js';
import App from 'path/to/app/dir/js/containers/App';

module.exports = function(app) {
  app.locals.routers.www.get('/path', function (req, res) {
      const store = theApp.create(theApp.reducers);
      const state = store.getState();
      res.render('template', {
            layout: 'redux',
            title: 'a title',
            GLOBAL_CONFIG: JSON.stringify({
              LOCALE: app.locals.locale,
              API_HOST: app.locals.API_HOST,
              FB_APP_ID: app.locals.FB_APP_ID,
              MP_TOKEN: app.locals.MP_TOKEN,
              HOST: app.locals.HOST.replace('//', '//www.'),
              APP_HOST: app.locals.APP_HOST
            }),
            react: React.renderToString(
                    <App store={store}/>
                  ),
            state: JSON.stringify(state)
          });
    });
};
