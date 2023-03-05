import React from 'react'
import { Link } from 'react-router-dom';
import giticon from '.././images/giticon.png';
import myicon from '.././images/icon.JPG';
import menu from '.././images/menu.png';

const JPBody = () => {
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
          <h1>ポートフォリオ</h1>

          <div className='port'>
            <h2><a href="https://github.com/janzeri/Hit-Blow-Game">・Hit & Blow Game</a></h2>
            <p>Arduinoでプレイするヒットアンドブローゲーム</p>
            <p>大学の授業の自由課題で実装したもの</p>
            <p>使用言語：Arduino言語（C/C++）</p>
          </div>

          <div className='port'>
            <h2><a href="https://github.com/janzeri/PascalCasl-Compiler">・PascalCasl-Compiler</a></h2>
            <p>pascalで書かれたプログラムをアセンブリ言語caslに変換するコンパイラ</p>
            <p>大学の授業の課題で実装し改変を加えたもの</p>
            <p>使用言語：Java</p>
          </div>

          <div className='port'>
            <h2><a href="https://github.com/janzeri/2048Game">・2048game</a></h2>
            <p>ターミナル上でプレイする2048ゲーム・ソルバー</p>
            <p>個人開発</p>
            <p>使用言語：C++</p>
            <div className='detail'>
              <img src={menu}></img >
            </div>
          </div>

        </div>
        <div className='elem'>
          <h1>スキル</h1>
            <h2>プログラミング言語</h2>
            <p>・C/C++：TCP/IP通信プログラム, ターミナルアプリの開発経験あり.</p>
            <p>・Java：ソースコード可視化ツール, GUIアプリ（ライフゲーム）,コンパイラの作成経験あり.</p>
            <p>・Python：グラフの描画,簡単な機械学習用いた程度.</p>
            <p>・Javascript：簡単なwebサイトを作ることができる程度.</p>
            <p>・HTML/CSS：簡単なwebサイトを作ることができる程度.</p>
          <div className='content'>
            <h2>ツール</h2>
            <p>・git：チーム開発での使用経験もあり.</p>
            <p></p>
          </div>
        </div>

        <div className='append'>
          <h1>その他</h1>
          <div className='content'>
            <h2>趣味</h2>
            <p>・筋トレ</p>
            <p>・野球</p>
          </div>
        </div>

        <p>（2023/3/6 更新）</p>
    </div>
  )
}

export default JPBody