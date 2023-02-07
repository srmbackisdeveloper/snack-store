import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="footer-content">
            <h3>More snacks?</h3>
            <div className="arrow"><a href="#header"><div></div></a></div>
            <p>Snacks <mark>sponsored</mark> companies: Lays, ChupaChups and Galmart</p>

            <ul className="social-networks">
                <li><a className='telegram' href="/">Telegram</a></li>
                <li><a className='facebook' href="/">Facebook</a></li>
                <li><a className='google' href="/">Google</a></li>
                <li><a className='youtube' href="/">Youtube</a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>Copyright &copy;2023 Snack Store designed by <a href="https://github.com/srmbackisdeveloper"><span>srmbackisdeveloper</span></a></p>
        </div>
    </footer>
  )
}
