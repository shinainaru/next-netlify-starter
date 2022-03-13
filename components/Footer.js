import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={styles.footer__redes}>
        <ul className={styles.footer__redes-wrapper}>
          <li>
            <a href="//youtube.com/Teokure" className={styles.footer__link}>
              <i className={`${styles.fab} ${styles.fa-youtube}`}></i>
                YouTube
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
