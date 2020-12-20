"use strict"

const path = require("path")

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // About
  createPage({
    path: "/",
    component: path.resolve("./src/components/About/About.tsx"),
  })
}

module.exports = createPages
