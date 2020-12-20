import { graphql, StaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

import styles from "./Layout.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

type Props = {
  children: React.ReactNode
  data?: Data
}

type Data = {
  site: {
    siteMetadata: {
      author: {
        name: string
      }
      title: string
      subTitle: string
    }
  }
}

export const LayoutImpl = ({ children, data }: Props) => {
  const title = data?.site?.siteMetadata?.title ?? "Austin Chiang"
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <div className={cx({ layout: true })}>
        <div className={styles["layout__left"]}>{children}</div>
      </div>
    </div>
  )
}

export const Layout = (props: Props) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            author {
              name
            }
            menu {
              label
              path
            }
            title
            subtitle
          }
        }
      }
    `}
    render={data => <LayoutImpl {...props} data={data} />}
  />
)

export default Layout
