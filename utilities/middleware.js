const express = require('express');
const path = require('path');

function setupMiddleware(app) {
  // Enable request body parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Serve static files
  app.use(express.static(path.join(__dirname, '../public')));
}

module.exports = setupMiddleware;