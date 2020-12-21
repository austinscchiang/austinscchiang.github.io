import { graphql, StaticQuery } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(faGithub, faLinkedinIn, faTwitter, faInstagram)

import styles from "./ContactLinks.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

type Props = {
  data?: Data
}

type ContactLink = {
  name: string
  href: string
  fontAwesomeClass: string
}

type Data = {
  site: {
    siteMetadata: {
      author: {
        contactLinks: [ContactLink]
      }
    }
  }
}

export const ContactLinksImpl = ({ data }: Props) => {
  const contactLinks = data?.site?.siteMetadata?.author?.contactLinks ?? []
  const contactLinksRendered = contactLinks.map(
    contactLink =>
      (
        <a href={contactLink.href} title={contactLink.name}>
          <FontAwesomeIcon icon={["fab", contactLink.fontAwesomeClass]} />
        </a>
      )
  )
  return (
    <div className={cx({ contactLinks: true })}>{contactLinksRendered}</div>
  )
}

export const ContactLinks = (props: Props) => (
  <StaticQuery
    query={graphql`
      query ContactLinksQuery {
        site {
          siteMetadata {
            author {
              contactLinks {
                name
                href
                fontAwesomeClass
              }
            }
          }
        }
      }
    `}
    render={data => <ContactLinksImpl {...props} data={data} />}
  />
)

export default ContactLinks
