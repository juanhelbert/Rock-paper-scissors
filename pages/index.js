import React, { useState } from 'react'
import Head from 'next/head'

const frank = <svg width="50px" height="50px" viewBox="-55 0 512 512">
  <defs />
  <path fill="#c66d5e" d="M152.941406 391.957031h-18.554687S70.585938 419.925781 70.585938 504.5h82.355468l19.316406-37.253906zm0 0M268.585938 391.957031h-18.558594l-19.316406 75.285157L250.027344 504.5h82.359375c0-84.574219-63.800781-112.542969-63.800781-112.542969zm0 0" />
  <path fill="#b85146" d="M250.027344 391.957031l-12.121094 47.242188c22.414062-3.945313 43.6875-11.515625 62.847656-22.382813-16.039062-17.785156-32.167968-24.859375-32.167968-24.859375zm0 0M102.214844 416.816406c19.164062 10.867188 40.433594 18.4375 62.847656 22.382813l-12.121094-47.242188h-18.554687s-16.132813 7.074219-32.171875 24.859375zm0 0" />
  <path fill="#efedee" d="M152.941406 391.957031h97.089844V504.5h-97.089844zm0 0" />
  <path fill="#80a287" d="M90.195312 258.8125c0 22.839844-18.511718 41.351562-41.347656 41.351562C26.011719 300.164062 7.5 281.652344 7.5 258.8125c0-22.835938 18.511719-41.347656 41.347656-41.347656 22.835938 0 41.347656 18.511718 41.347656 41.347656zm0 0M395.472656 258.8125c0 22.839844-18.515625 41.351562-41.351562 41.351562-22.835938 0-41.347656-18.511718-41.347656-41.351562 0-22.835938 18.511718-41.347656 41.347656-41.347656 22.835937 0 41.351562 18.511718 41.351562 41.347656zm0 0" />
  <path fill="#d4d4d4" d="M152.941406 436.691406c15.628906 3.738282 31.925782 5.675782 48.542969 5.675782 16.617187 0 32.914063-1.9375 48.546875-5.675782v-44.734375h-97.089844zm0 0" />
  <path fill="#8dbc92" d="M354.121094 217.46875v65.125c0 71.667969-68.339844 129.773438-152.636719 129.773438S48.847656 354.261719 48.847656 282.59375v-65.125l22.855469-40.886719V31.941406h260.222656V176.25zm0 0" />
  <path fill="#3a484a" d="M327.519531 7.5H75.449219c-14.691407 0-26.597657 11.910156-26.597657 26.601562V217.46875c22.832032 0 41.347657-18.519531 41.347657-41.351562v-82.75c0-24.257813 19.664062-43.921876 43.921875-43.921876h27.5625c6.882812 0 13.730468 1.390626 19.957031 4.328126 4.496094 2.117187 9.265625 5.265624 13.273437 9.921874 3.488282 4.054688 9.65625 4.054688 13.144532 0 4.003906-4.65625 8.777344-7.800781 13.273437-9.921874 6.226563-2.9375 13.074219-4.328126 19.957031-4.328126h27.5625c24.253907 0 43.917969 19.664063 43.917969 43.921876v82.75c0 22.832031 18.515625 41.351562 41.351563 41.351562V34.101562C354.121094 19.410156 342.210938 7.5 327.519531 7.5zm0 0" />
  <path fill="#f98084" d="M292.527344 288.433594h-21.292969c-4.140625 0-7.5-3.359375-7.5-7.5s3.359375-7.5 7.5-7.5h21.292969c4.140625 0 7.5 3.359375 7.5 7.5s-3.359375 7.5-7.5 7.5zm0 0M131.734375 288.433594h-21.289063c-4.140624 0-7.5-3.359375-7.5-7.5s3.359376-7.5 7.5-7.5h21.289063c4.144531 0 7.5 3.359375 7.5 7.5s-3.355469 7.5-7.5 7.5zm0 0" />
  <path d="M220.800781 268.042969c-3.117187-2.726563-7.855469-2.410157-10.582031.710937-2.109375 2.410156-5.292969 3.796875-8.734375 3.796875-3.4375 0-6.621094-1.386719-8.730469-3.796875-2.726562-3.121094-7.464844-3.4375-10.582031-.714844-3.121094 2.726563-3.4375 7.464844-.710937 10.585938 4.957031 5.671875 12.257812 8.925781 20.023437 8.925781 7.769531 0 15.070313-3.253906 20.027344-8.925781 2.726562-3.117188 2.410156-7.855469-.710938-10.582031zm0 0" />
  <path d="M82.699219 242.324219c0 4.144531 3.355469 7.5 7.5 7.5h23.390625V259.9375c0 4.144531 3.359375 7.5 7.5 7.5s7.5-3.355469 7.5-7.5v-10.113281h145.792968V259.9375c0 4.144531 3.355469 7.5 7.5 7.5 4.140626 0 7.5-3.355469 7.5-7.5v-10.113281h23.390626c4.140624 0 7.5-3.355469 7.5-7.5 0-4.140625-3.359376-7.5-7.5-7.5H90.199219c-4.144531 0-7.5 3.359375-7.5 7.5zm0 0M121.074219 170.015625c1.917969.003906 3.847656-.703125 5.300781-2.15625l7.324219-7.324219 1.089843 1.089844c1.464844 1.464844 3.382813 2.195312 5.304688 2.195312 1.917969 0 3.835938-.730468 5.300781-2.195312 2.929688-2.929688 2.929688-7.679688 0-10.605469l-1.089843-1.089843 7.816406-7.816407 1.089844 1.085938c1.464843 1.464843 3.386718 2.199219 5.304687 2.199219 1.917969 0 3.839844-.734376 5.300781-2.199219 2.929688-2.925781 2.929688-7.675781 0-10.605469l-1.085937-1.085938 7.816406-7.820312 1.089844 1.089844c1.460937 1.464844 3.382812 2.199218 5.300781 2.199218 1.917969 0 3.839844-.734374 5.304688-2.199218 2.929687-2.929688 2.929687-7.675782 0-10.605469l-1.089844-1.089844 7.324218-7.324219c2.929688-2.929687 2.929688-7.675781 0-10.605468-2.929687-2.929688-7.679687-2.929688-10.605468 0l-7.324219 7.324218-1.089844-1.089843c-2.929687-2.925781-7.679687-2.925781-10.605469 0-2.929687 2.929687-2.929687 7.679687 0 10.605469l1.089844 1.089843-7.820312 7.816407-1.085938-1.085938c-2.929687-2.929688-7.679687-2.929688-10.605468 0-2.929688 2.925781-2.929688 7.675781 0 10.605469l1.085937 1.089843-7.816406 7.816407-1.089844-1.089844c-2.925781-2.929687-7.675781-2.929687-10.605469 0-2.929687 2.929687-2.929687 7.675781 0 10.605469l1.089844 1.089844-7.324219 7.324218c-2.929687 2.929688-2.929687 7.675782 0 10.605469 1.421875 1.421875 3.359375 2.152344 5.304688 2.15625zm0 0" />
  <path d="M0 258.8125c0 25.292969 19.324219 46.15625 43.980469 48.605469 7.953125 37.164062 33.417969 69.136719 68.765625 89.386719C92.550781 412.511719 63.085938 445.539062 63.085938 504.5c0 4.140625 3.359374 7.5 7.5 7.5h261.800781c4.140625 0 7.5-3.359375 7.5-7.5 0-58.960938-29.464844-91.988281-49.660157-107.695312 35.347657-20.25 60.8125-52.222657 68.765626-89.386719 24.65625-2.449219 43.980468-23.3125 43.980468-48.605469 0-24.382812-17.960937-44.652344-41.351562-48.273438v-176.4375C361.621094 15.296875 346.324219 0 327.519531 0h-46.375c-4.140625 0-7.5 3.359375-7.5 7.5s3.359375 7.5 7.5 7.5h46.375c10.535157 0 19.101563 8.566406 19.101563 19.101562v175.015626c-11.503906-2.609376-21.175782-11.464844-24.753906-22.714844-1.054688-3.320313-1.597657-6.804688-1.597657-10.289063v-82.75c0-28.351562-23.066406-51.417969-51.417969-51.417969h-27.5625c-14.554687 0-29.308593 5.691407-38.917968 16.855469-.496094.574219-1.277344.574219-1.773438.003907-.523437-.613282-1.066406-1.210938-1.628906-1.792969-9.628906-10.019531-23.539062-15.066407-37.289062-15.066407h-27.5625c-28.351563 0-51.417969 23.066407-51.417969 51.417969v82.75c0 11.652344-6.316407 22.890625-16.289063 28.925781-3.109375 1.882813-6.515625 3.273438-10.0625 4.078126V34.101562C56.347656 23.566406 64.917969 15 75.449219 15h175.695312c4.140625 0 7.5-3.359375 7.5-7.5s-3.359375-7.5-7.5-7.5H75.449219C56.648438 0 41.351562 15.296875 41.351562 34.101562v176.4375C17.960938 214.160156 0 234.429688 0 258.8125zm127.714844 145.652344c5.734375 2.554687 11.667968 4.8125 17.726562 6.753906V497h-23.585937v-29.753906c0-4.144532-3.359375-7.5-7.5-7.5s-7.5 3.355468-7.5 7.5V497H78.265625c2.609375-53.835938 32.980469-81.445312 49.449219-92.535156zm32.726562 10.851562c2.753906.621094 5.53125 1.167969 8.320313 1.664063 10.789062 1.933593 21.765625 2.886719 32.722656 2.886719 10.984375 0 21.914063-1.085938 32.742187-2.890626 2.78125-.496093 5.554688-1.039062 8.300782-1.660156V497h-82.085938zM324.707031 497h-28.589843v-29.753906c0-4.144532-3.355469-7.5-7.5-7.5-4.140626 0-7.5 3.355468-7.5 7.5V497H257.53125v-85.78125c6.058594-1.941406 11.992188-4.199219 17.726562-6.753906 16.46875 11.089844 46.839844 38.699218 49.449219 92.535156zm63.265625-238.1875c0 16.222656-11.464844 29.8125-26.71875 33.09375.011719-.160156.367188-6.367188.367188-9.3125v-56.792969c15.070312 3.421875 26.351562 16.925781 26.351562 33.011719zM97.699219 93.367188c0-20.082032 16.339843-36.421876 36.421875-36.421876h27.5625c10.199218 0 20.773437 3.769532 27.546875 11.640626 6.390625 7.429687 18.125 7.425781 24.511719 0 6.773437-7.871094 17.347656-11.640626 27.546874-11.640626h27.5625c20.082032 0 36.421876 16.339844 36.421876 36.421876v82.75c0 9.003906 2.503906 18.101562 7.339843 25.714843 7.589844 11.941407 19.972657 20.390625 34.007813 22.5625v58.203125c0 57.734375-47.507813 101.804688-100.28125 116.285156-14.574219 4-29.746094 5.984376-44.851563 5.984376-15.097656 0-30.292969-1.953126-44.851562-5.980469-52.246094-14.335938-91.5625-53.007813-99.003907-100.058594-.84375-5.363281-1.28125-10.804687-1.28125-16.230469v-58.203125C65.359375 223 73.863281 218.964844 80.78125 213.046875c10.683594-9.136719 16.921875-22.882813 16.921875-36.929687v-82.75zM41.351562 225.800781v56.792969c0 3.105469.125 6.21875.367188 9.3125C26.464844 288.625 15 275.035156 15 258.8125c0-16.085938 11.28125-29.589844 26.351562-33.011719zm0 0" />
</svg>

export default function Home() {
  const [scores, setScores] = useState({
    user: 0,
    computer: 0,
    tie: 0
  })

  const [game, setGame] = useState({
    user: '',
    computer: ''
  })

  const [winner, setWinner] = useState()

  const getWinner = (p, c) => {
    return (p == 1 && c == 3) ? 'user'
      : (c == 1 && p == 3) ? 'computer'
        : p > c ? 'user'
          : c > p ? 'computer'
            : "tie"
  }

  const toImage = (n) => {
    return n == 1 ? 'rock' : n == 2 ? 'paper' : 'scissors'
  }

  const handleClick = (user) => {
    const computer = Math.floor(Math.random() * 3) + 1
    const winner = getWinner(user, computer)
    setWinner(winner)
    setGame({ ...game, user, computer })
    setScores({ ...scores, [winner]: scores[winner] + 1 })
  }

  return (
    <>
      <div className="container">
        <Head>
          <title>Rock, paper, scissors with Frank!</title>
          <meta name="description" content="Play rock paper scissors in a creepy way!" />
          <meta name="keywords" content="HTML, CSS, React, NextJS" />
          <meta name="author" content="Juan Helbert" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <div className='frank'>
            {frank}
          </div>
          <span className='title'>Rock, paper, scissors</span>
        </header>
        <main>
          <div className='score'>
            <div>
              <p>User</p>
              {scores.user}
            </div>
            <div>
              <p>Ties</p>
              {scores.tie}
            </div>
            <div>
              <p>Comp</p>
              {scores.computer}
            </div>
          </div>

          <div className='game'>
            <span className='badge'>user</span>
            {winner && (
              <>
                <img className={`${toImage(game.user)}`} src={`/${toImage(game.user)}.png`} alt={toImage(game.user)} />
                <img className={`${toImage(game.computer)}`} src={`/${toImage(game.computer)}.png`} alt={toImage(game.computer)} />
              </>
            )}
            <span className='badge'>Comp</span>
          </div>

          <div className='winner'>
            <p>{winner && (winner === 'tie' ? "It's a tie" : `${winner} wins`)}</p>
          </div>

          <div className="play-area">
            <img className='rock' src="/rock.png" onClick={() => handleClick(1)} alt="Rock" />
            <img className='paper' src="/paper.png" onClick={() => handleClick(2)} alt="Paper" />
            <img className='scissor' src="/scissors.png" onClick={() => handleClick(3)} alt="Scissors" />
          </div>
        </main>
      </div>

      <footer>
        Made with
        <span role="img" aria-label="heart">
          <svg width="12" height="12" style={{ margin: '2px 6px 0 5px' }} viewBox="0 0 24 24">
            <path fill="#f44336" d="M11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721C26.129 9.002 23.286 2 17.596 2 14.179 2 12.611 4.511 12 4.98 11.386 4.509 9.828 2 6.404 2 .732 2-2.146 8.984 1.873 13.055z" />
          </svg>
        </span>
        by <a href='https://helbert.netlify.app/' target='_blank' rel='noopener' style={{ marginLeft: '4px', fontWeight: 'bold' }}> Juan Helbert</a>
      </footer>

      <style jsx>{`
        .container {
          width: 310px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-bottom: 40px;
        }

        header {
          display: flex;
          width: 100%;
          justify-content: start;
          align-items: center;
        }

        .frank {
          display: flex;
          justify-content: start;
          margin-bottom: -1px;
        }

        header .title {
          font-size: 28px;
          margin-left: 4px;
          letter-spacing: 1px;
        }

        main {
          width: 100%;
          text-align: center;
          border: 2px solid black;
          border-radius: 8px;
        }

        .score {
          display: flex;
          justify-content: space-around;
          padding: 10px 0;
          border-bottom: 2px solid black;
          width: 100%;
          font-size: 24px;
          font-weight: bold;
        }

        .score p {
          margin-bottom: 6px;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 1px;
          font-weight: normal;
        }

        .game {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 150px;
          padding: 40px 15px;
        }

        .badge {
          background-color: black;
          color: #9fd4a1;
          font-weight: bold;
          border-radius: 8px;
          padding: 3px 6px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .game img {
          width: 45px;
        }

        .winner {
          min-height: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
        }

        .winner p:first-letter {
          text-transform: uppercase;
        }

        .play-area {
          padding: 30px 0 15px;
        }

        .play-area img {
          max-width: 45px;
          cursor: pointer;
          margin: 0 15px;
          transition: .3s ease;
        }

        .play-area img:hover {
          transform: scale(1.08);
          filter: drop-shadow(0px 10px 5px #00000022);
        }

        footer {
          display: flex;
          width: 100%;
          text-align: center;
          padding: 10px 0;
          font-size: 12px;
          letter-spacing: 1px;
          justify-content: center;
          align-items: center;
          color: #000;
          position: fixed;
          bottom: 0;
        }

        a {
          color: black;
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Creepster|Roboto&display=swap');

        html,
        body {
          font-family: Roboto, sans-serif;
            background-color: #8dbc92;
            font-size: 18px;
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        .title {
          font-family: 'Creepster', cursive;
        }
      `}</style>
    </>
  )
}
