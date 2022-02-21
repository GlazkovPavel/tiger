import './Footer.css'

export function Footer() {
  return (
    <section className="footer">
      <p className="footer__text">Тигрёнок - он такой</p>
      <div className="footer__nav">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a href="https://yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс</a>
          </li>
          <li className="footer__links-item">
            <a href="https://github.com/GlazkovPavel" target="_blank" rel="noreferrer" className="footer__link">Github</a>
          </li>
          <li className="footer__links-item">
            <a href="https://t.me/glazkov_pavel" target="_blank" rel="noreferrer" className="footer__link">Telegram</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
