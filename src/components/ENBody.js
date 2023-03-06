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
            <p>implemented for a freeform assignment in an university course</p>
            <p>Language：Arduino（C/C++）</p>
          </div>

          <div className='port'>
            <h2><a href="https://github.com/janzeri/PascalCasl-Compiler">・PascalCasl-Compiler</a></h2>
            <p>pascal to casl compiler</p>
            <p>implemented for an assignment in an university course and updated</p>
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
          <div className='center'>
            <p className='text'>・C/C++：Experienced in developing TCP/IP communication programs and terminal game. Most skillful.<br/>
            ・Java：Experienced in develping a source code analizer/visualizer, a GUI app(Life game), a compiler.<br/>
            ・Python：Used for drawing graphs and simple machine learning.<br/>
            ・Javascript：Able to create simple web sites.<br/>
            ・HTML/CSS：Able to create simple web sites.<br/>
            ・VHDL：Experiened in a simpple cpu implementation.</p>
          </div>
          <h2>Tools</h2>
          <p className='text'>・git：Experienced in team development.<br/>
          ・Arduino：Experienced in implementing a calculator and a simple game.</p>
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