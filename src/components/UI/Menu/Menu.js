import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div className="m-menu">
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="is-active-link">
              Почетна
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName="is-active-link">
              Блог
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="is-active-link">
              Kонтакт
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="is-active-link">
              О нама
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
