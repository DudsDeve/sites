import React from 'react'
import styles from './menu.module.css'
import tractian from '../Assets/tractian.png'

const Menu = () => {
  return (

    <header className={styles.header}>
      <img src={tractian}/>
      <nav>
        <ul className={styles.menuHeader}>
          <li><a>Sobre nós</a></li>
          <li><a>Soluções</a></li>
          <li><a>Produtos</a></li>
          <li><a>Indústrias</a></li>
          <li><a>Materiais</a></li>
          <li><a>Blog</a></li>
        </ul>
      </nav>
      <div>
        <h2>
          Área do cliente
        </h2>
        <h2>
          Demonstração
        </h2>
      </div>
    </header>

  )
}

export default Menu