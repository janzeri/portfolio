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
          <h1>製作物</h1>

          <div className='port'>
            <h2><a href="https://github.com/janzeri/Hit-Blow-Game">・Hit & Blow Game</a></h2>
            <p>Arduinoでプレイするヒットアンドブローゲーム</p>
            <p>大学の授業の自由課題で実装したもの</p>
            <p className='text'>
              使用言語：Arduino言語（C/C++）<br/>
              発展：2つを接続して2人プレイを可能にする.<br/>
              　　　1つで交互に入力して2人プレイを可能にする.
            </p>
          </div>

          <div className='port'>
            <h2><a href="https://github.com/janzeri/PascalCasl-Compiler">・PascalCasl-Compiler</a></h2>
            <p>pascalで書かれたプログラムをアセンブリ言語caslに変換するコンパイラ</p>
            <p>大学の授業の課題で実装し改変を加えたもの</p>
            <p className='text'>
              使用言語：Java<br/>
              目的：言語処理を学ぶため.<br/>
              　　　テストファースト開発の体験.<br/>
              　　　Git,CI（Jenkins）を用いた開発の体験.<br/>
              改善点：生成caslコードを最適化する余地がある.<br/>
              　　　　対応していないpascal命令がある.
            </p>
          </div>

          <div className='port'>
            <h2><a href="https://github.com/janzeri/2048Game">・2048game</a></h2>
            <p>ターミナル上でプレイする2048ゲーム/ソルバー</p>
            <p>個人開発</p>
            <p className='text'>
              使用言語：C++<br/>
              目的：2048ゲームの攻略法が気になり,解法アルゴリズムを<br/>
              　　　プログラムとして実装し評価すると面白そうだったため.<br/>
              工夫点：画面をシンプルで分かりやすくした.<br/>
              　　　　移動方向入力をpcゲームで使われるw,a,s,dとした.<br/>
              　　　　ソルバーからヒントを得られるようにした.<br/>
              改善点：毎度エンターキー入力するのは手間がかかる.<br/>
              　　　　画面に色が無く数字が見にくい.<br/>
              　　　　数字の移動に動きをつけたい.<br/>
              　　　　ハイスコアを保存できるようにしたい.<br/>
              発展：webアプリとして実装.
              </p>
            <div className='detail'>
              <img src={menu}></img >
            </div>
          </div>

        </div>
        <div className='elem'>
          <h1>スキル</h1>
            <h2>プログラミング言語</h2>
            <div className='center'>
              <p className='text'>
              ・C：簡単なTCP/IP通信プログラムの開発経験あり.<br/>
              ・C++：独学.ターミナルゲームの開発経験あり.最も得意とする.<br/>
              ・Java：ソースコード分析/可視化ツール, GUIアプリ（ライフゲーム）,コンパイラの作成経験あり.<br/>
              ・Python：グラフの描画,簡単な機械学習で用いた程度.<br/>
              ・Javascript：独学.簡単なwebサイトを作ることができる程度.<br/>
              ・HTML/CSS：独学.簡単なwebサイトを作ることができる程度.<br/>
              ・VHDL：簡易的なCPUの実装経験あり.</p>
            </div>
          <div className='content'>
            <h2>ツール</h2>
            <div className='center'>
              <p className='text'>・git：チーム開発での使用経験もあり.<br/>
              ・Arduino：電卓や簡単なゲームの実装経験あり.</p>
            </div>
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