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
          <h1>Projects</h1>

          <div className='port'>
            <h2><a href="https://github.com/janzeri/Hit-Blow-Game">・Hit & Blow Game</a></h2>
            <p>Hit and Blow game for Arduino</p>
            <p>Implemented for a freeform assignment in an university course</p>
            <p className='text'>
              Language：Arduino（C/C++）<br/>
              Extra：Enable 2-player play by connecting two Arduinos.<br/>
              　　　　Enable 2-player play by alternate input.
            </p>
          </div>

          <div className='port'>
            <h2><a href="https://github.com/janzeri/PascalCasl-Compiler">・PascalCasl-Compiler</a></h2>
            <p>pascal to casl compiler</p>
            <p>Implemented for an assignment in an university course and updated</p>
            <p className='text'>
              Language：Java<br/>
              Purpose：To learn programming language processor.<br/>
              　　　　　To experience Test-Driven Development.<br/>
              　　　　　To experience development with Git, CI(Jenkins).<br/>
              Improvements：Optimize the generated casl code.<br/>
              　　　　　　　　Some pascal instructions are not supported.
              </p>
          </div>

          <div className='port'>
            <h2><a href="https://github.com/janzeri/2048Game">・2048game</a></h2>
            <p>2048game / solver on terminal</p>
            <p>personal project</p>
            <p className='text'>
              Language：C++<br/>
              Purpose：Interested in 2048 game strategies and<br/>
              　　　　　evaluating the solution algorithm as a program.<br/>
              Devices：Simple and easy-to-understand board.<br/>
              　　　　　The movement direction input is set to w,a,s,d, <br/>
              　　　　　which is used in pc games.<br/>
              Improvements：It's time-consuming to press enter every time.<br/>
              　　　　　　　　Numbers are same color and difficult to read.<br/>
              　　　　　　　　Want to add animation for the movement of numbers.<br/>
              　　　　　　　　Want to be able to save high scores.<br/>
              Extra：Implement as a web app.
            </p>
            <div className='detail'>
              <img src={menu}></img >
            </div>
          </div>
        </div>
        <div className='elem'>
          <h1>Skills</h1>
          <h2>Programming Languages</h2>
          <div className='center'>
            <p className='text'>
            ・C：Experienced in developing simple TCP/IP communication programs.<br/>
            ・C++：Self-studying. Experienced in developing a terminal game. Most skillful.<br/>
            ・Java：Experienced in develping a source code analizer/visualizer, a GUI app(Life game), a compiler.<br/>
            ・Python：Used for drawing graphs and simple machine learning.<br/>
            ・Javascript：Self-studying. Able to create simple web sites.<br/>
            ・HTML/CSS：Self-studying. Able to create simple web sites.<br/>
            ・VHDL：Experiened in a simple cpu implementation.</p>
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