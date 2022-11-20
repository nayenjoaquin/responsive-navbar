import Navbar from "./components/navbar/navbar"
import '../styles/globals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const pages = [
    {title: 'Home', ref: '/'},
    {title: 'About', ref: '/about'},
    {title: 'Contact', ref: '/contact'}
]

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navbar pages={pages} />
        {children}
      </body>
    </html>
  )
}
