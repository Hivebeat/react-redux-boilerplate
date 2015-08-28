import express from 'express';
import React from 'react';
import * as theApp from 'path/to/app/dir/js';
import App from 'path/to/app/dir/js/containers/App';

module.exports = function(app) {
  app.locals.routers.www.get('/path', function (req, res) {
      const store = importEvent.create(importEvent.reducers);
      store.dispatch(importEvent.actions.IntlActions.loadMessages({
            locale: app.locals.locale
          }));
      const state = store.getState();
      res.render('template', {
            layout: 'layout',
            GLOBAL_CONFIG: JSON.stringify({
                    LOCALE: app.locals.locale,
                    API_HOST: app.locals.API_HOST,
                    FB_APP_ID: app.locals.FB_APP_ID,
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

