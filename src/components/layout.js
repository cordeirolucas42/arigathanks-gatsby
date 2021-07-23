import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText } from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <main className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}
export default Layout