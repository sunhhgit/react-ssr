/*
* // node环境
* const express = require('express')
* const React = require('react')
* const { renderToString } = require('react-dom/server')
* const app = class extends React.PureComponent{
*  render() {
*    return React.createElement('h1', null, 'This is just a demo !')
*  }
* }
* */

/*
* // 配置webpack后
* */
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createRouter } from './src/router'
const PORT = 3000

const http = express()
http.use(express.static('dist'))

http.get("*", (req, res) => {
  const context = {};
  const content = renderToString(createRouter('server')({ location: req.url, context }))
  //当Redirect被使用时，context.url将包含重新向的地址
  if(context.url) {
    // 302
    res.redirect(context.url);
  } else {
    // 判断是否设置状态码为404
    if(context.NOT_FOUND){
      res.status(404);
    }
    res.send(`
      <!doctype html>
      <html>
        <title>React-SRR-Demo</title>
        <body>
            <div id="root">${content}</div>
            <script src="/client/index.js"></script>
        </body>
      </html>
  `)
  }
})

http.listen(PORT, () => {
  console.log(`sever listen on ${PORT}`)
})
