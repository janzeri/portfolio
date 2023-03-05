import React from 'react'
import { Link } from 'react-router-dom';
import giticon from '.././images/giticon.png';
import myicon from '.././images/icon.JPG';
import menu from '.././images/menu.png';

const ENBody = () => {
  return (
    <div className='container text-center'>
        <div className='profile'>
          <img src={myicon} />
          <div className='giticon'>
            <h1>Ryotaro Eguchi</h1>
            <a href="https://github.com/janzeri"><img src={giticon} /></a>
          </div>
        </div>

        <div className='elem'>
          <h1>Portfolio</h1>

          <div className='port'>
            <h2><a href="https://github.com/janzeri/Hit-Blow-Game">・Hit & Blow Game</a></h2>
            <p>Hit and Blow game for Arduino</p>
            <p>implemented as a freeform assignment in a university course</p>
            <p>Language：Arduino（C/C++）</p>
          </div>

          <div className='port'>
            <h2><a href="https://github.com/janzeri/PascalCasl-Compiler">・PascalCasl-Compiler</a></h2>
            <p>pascal to casl compiler</p>
            <p>implemented as an assignment in a university course and updated</p>
            <p>Language：Java</p>
          </div>

          <div className='port'>
            <h2><a href="https://github.com/janzeri/2048Game">・2048game</a></h2>
            <p>2048game / solver on terminal</p>
            <p>personal project</p>
            <p>Language：C++</p>
            <div className='detail'>
              <img src={menu}></img >
            </div>
          </div>
        </div>
        <div className='elem'>
          <h1>Skills</h1>
          <h2>Programming Language</h2>
          <p>・C/C++：</p>
          <p>・Java：source code visualizer, GUI app(Life game), compiler</p>
          <p>・Python：</p>
          <p>・Javascript：簡単なwebサイトを作ることができる程度.</p>
          <p>・HTML/CSS：簡単なwebサイトを作ることができる程度.</p>

          <h2>Tools</h2>
          <p>・git</p>
        </div>

        <div className='append'>
          <h1>Others</h1>
          <div className='content'>
            <h2>Hobbies</h2>
            <p>・workout</p>
            <p>・Baseball</p>
          </div>
        </div>

        <p>(updated March 6th 2023)</p>
    </div>
  )
}

export default ENBody