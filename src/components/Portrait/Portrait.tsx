import { graphql, StaticQuery } from "gatsby"
import React from "react"

import styles from "./Portrait.module.scss"
import ContactLinks from "../ContactLinks"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

type Props = {
  data?: Data
}

type Data = {
  site: {
    siteMetadata: {
      author: {
        portrait: string
      }
    }
  }
}

export const PortraitImpl = ({ data }: Props) => {
  const portraitLink = data?.site?.siteMetadata?.author?.portrait ?? ""
  return (
    <div className={styles["portrait__container"]}>
      <div className={styles["portrait__wrapper"]}>
        <img src={portraitLink} />
        <ContactLinks />
      </div>
    </div>
  )
}

export const Portrait = (props: Props) => (
  <StaticQuery
    query={graphql`
      query PortraitQuery {
        site {
          siteMetadata {
            author {
              portrait
            }
          }
        }
      }
    `}
    render={data => <PortraitImpl {...props} data={data} />}
  />
)

export default Portrait
