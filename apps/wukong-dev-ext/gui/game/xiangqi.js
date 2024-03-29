/****************************\
 ============================

         INIT ENGINE

 ============================              
\****************************/

// init engine
var engine = new Engine();

// run in browser mode  
console.log('\n  Wukong JS - BROWSER MODE - v' + engine.VERSION);
console.log('  type "engine" for public API reference');

/****************************\
 ============================

         DPXQ helpers

 ============================              
\****************************/

// DPXQ board (for movelist purposes)
var boardDPXQ = [];

function dpxqInit() {
  boardDPXQ = [
    'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
    'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
    'x', 'r1','n1','b1','a1','k', 'a2','b2','n2','r2','x',
    'x', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'x',
    'x', '.', 'c1', '.','.', '.', '.', '.','c2', '.', 'x',
    'x', 'p1','.', 'p2','.', 'p3','.', 'p4','.', 'p5','x',
    'x', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'x',
    'x', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'x',
    'x', 'P5','.', 'P4','.', 'P3','.', 'P2','.', 'P1','x',
    'x', '.', 'C2', '.','.', '.', '.', '.', 'C1','.', 'x',
    'x', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'x',
    'x', 'R2','N2','B2','A2','K', 'A1','B1','N1','R1','x',
    'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
    'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'
  ];
} dpxqInit();

var dpxqPieceOrder = [
  'R1', 'N1', 'B1', 'A1', 'K', 'A2', 'B2', 'N2', 'R2', 'C1', 'C2', 'P1', 'P2', 'P3', 'P4', 'P5',
  'r1', 'n1', 'b1', 'a1', 'k', 'a2', 'b2', 'n2', 'r2', 'c1', 'c2', 'p1', 'p2', 'p3', 'p4', 'p5',
];

function updateDPXQ(from, to) {
  boardDPXQ[to] = boardDPXQ[from];
  boardDPXQ[from] = '.';
}

function dpxqPieceList() {
  let pieceList = {};
  for (let i = 0; i < dpxqPieceOrder.length; i++) pieceList[dpxqPieceOrder[i]] = '99';
  for (let x = 0; x < dpxqPieceOrder.length; x++) {
    for (let i = 0; i < boardDPXQ.length; i++) {
      let piece = boardDPXQ[i];
      if (piece == dpxqPieceOrder[x]) pieceList[dpxqPieceOrder[x]] = engine.dpxqSquare(i);
    }
  } return Object.values(pieceList).join('')  
}

/****************************\
 ============================

           GLOBALS

 ============================              
\****************************/


var book = [];
var botName = ''


/****************************\
 ============================

        XIANGQI BOARD

 ============================              
\****************************/

// piece folder
var pieceFolder = 'romanized_pieces';

// import sounds
const MOVE_SOUND = new Audio('game/sounds/move.wav');
const CAPTURE_SOUND = new Audio('game/sounds/capture.wav');

// square size
const CELL_WIDTH = 46;
const CELL_HEIGHT = 46;

// select color
const SELECT_COLOR = 'brown';

// flip board
var flip = 0;

// flip board
function flipBoard() {
  flip ^= 1;
  drawBoard();  
}

// render board in browser
function drawBoard() {
  var chessBoard = '<table cellspacing="0"><tbody>'
  let isCCBridge = true;
  
  // board table
  for (let row = 0; row < 14; row++) {
    chessBoard += '<tr>'
    for (let col = 0; col < 11; col++) {
      let file, rank;
      
      // flip board
      if (flip) {
        file = 11 - 1 - col;
        rank = 14 - 1 - row;
      } else {
        file = col;
        rank = row;
      }
      
      let square = rank * 11 + file;
      let piece = engine.getPiece(square);
      var pieceImage = '<img style="width: 44px" draggable="true"';
      pieceImage += 'src="game/images/' + pieceFolder + '/' + piece + (isCCBridge ? '.png' : '.svg') + '"></img>';

      if (engine.squareToString(square) != 'xx') {
        chessBoard += 
          '<td align="center" id="' + square + 
          '" width="' + CELL_WIDTH + 'px" height="' + CELL_HEIGHT +  'px" ' +
          ' onclick="tapPiece(this.id)" ' + 
          ' onmousedown="highlightMoves(this.id);"' +
          ' ondragstart="dragPiece(event, this.id)" ' +
          ' ondragover="dragOver(event, this.id)"'+
          ' ondrop="dropPiece(event, this.id)">' + (piece ? pieceImage : '') +
          '</td>';
      }
    }

    chessBoard += '</tr>';
  }

  chessBoard += '</tbody></table>';
  document.getElementById('xiangqiboard').innerHTML = chessBoard;
}

// highlight legal moves
function highlightMoves(square) {  
  if (document.getElementById('showMoves').checked == false) return;
  
  let legalMoves = engine.generateLegalMoves();
  
  for (let count = 0; count < legalMoves.length; count++) {
    let move = legalMoves[count].move;
    let sourceSquare = engine.getSourceSquare(move);
    let targetSquare = engine.getTargetSquare(move);
    if (square == sourceSquare) document.getElementById(targetSquare).classList.add('highlight');
  }
}

// highlight check
function highlightCheck() {
  let kingSquare = engine.kingSquare(engine.getSide());
  if (engine.inCheck(engine.getSide()))
    document.getElementById(kingSquare).classList.add('check');
}

// set bot
function setBot(bot) {
  botName = bot;
  document.getElementById('current-bot-image').src = bots[bot].image;
  fixedTime = bots[bot].time;
  fixedDepth = bots[bot].depth;
  book = JSON.parse(JSON.stringify(bots[bot].book));
  document.getElementById('pgn').value = bots[bot].description;
}

// set board theme
function setBoardTheme(theme) {
  document.getElementById('xiangqiboard').style.backgroundImage = 'url(' + theme + ')';
  drawBoard();
}

// set piece theme
function setPieceTheme(theme) {
  pieceFolder = theme;
  drawBoard();
}

// play sound
function playSound(move) {
  if (engine.getCaptureFlag(move)) CAPTURE_SOUND.play();
  else MOVE_SOUND.play();
}


/****************************\
 ============================

          USER INPUT

 ============================              
\****************************/

// stats
var guiScore = 0;
var guiDepth = 0;
var guiTime = 0;
var guiPv = '';
var guiSide = 0;
var userTime = 0;
var gameResult = '*';
var guiFen = '';

// difficulty
var fixedTime = 0;
var fixedDepth = 0;

// user input controls
var clickLock = 0;
var allowBook = 1;
var userSource, userTarget;

// 3 fold repetitions
var repetitions = 0;

// pick piece handler
function dragPiece(event, square) {
  userSource = square;
  highlightMoves(square);
}

// drag piece handler
function dragOver(event, square) {
  event.preventDefault();
  if (square == userSource) event.target.src = '';
}

// drop piece handler
function dropPiece(event, square) {
  userTarget = square;
  let valid = validateMove(userSource, userTarget);  
  movePiece(userSource, userTarget);
  if (engine.getPiece(userTarget) == 0) valid = 0;
  clickLock = 0;
  
  if (engine.getPiece(square) && valid) {
    userTime = Date.now() - userTime;
    //document.getElementById(square).style.backgroundColor = SELECT_COLOR;
    playSound(valid);
    updatePgn();
  }
  
  event.preventDefault();
  if (valid) setTimeout(function() { think(); }, 100);
}

// click event handler
function tapPiece(square) {
  drawBoard();
  
  if (engine.getPiece(square)) {
    //document.getElementById(square).style.backgroundColor = SELECT_COLOR;
    highlightMoves(square);
  }
  
  var clickSquare = parseInt(square, 10)
  
  if(!clickLock && engine.getPiece(clickSquare)) {      
    userSource = clickSquare;
    clickLock ^= 1;
  } else if(clickLock) {      
    userTarget = clickSquare;

    let valid = validateMove(userSource, userTarget);
    movePiece(userSource, userTarget);
    if (engine.getPiece(userTarget) == 0) valid = 0;
    clickLock = 0;
    
    if (engine.getPiece(square) && valid) {
      //document.getElementById(square).style.backgroundColor = SELECT_COLOR;
      playSound(valid);
      updatePgn();
    }

    if (valid) setTimeout(function() { think(); }, 1);
  }
}


/****************************\
 ============================

        ENGINE MOVES

 ============================              
\****************************/

// use opening book
function getBookMove() {
  if (allowBook == 0) return 0;

  let moves = engine.getMoves();
  let lines = [];
  
  if (moves.length == 0) {
    let randomLine = book[Math.floor(Math.random() * book.length)];
    let firstMove = randomLine.split(' ')[0];
    return engine.moveFromString(firstMove);
  } else if (moves.length) {
    for (let line = 0; line < book.length; line++) {
      let currentLine = moves.join(' ');

      if (book[line].includes(currentLine) && book[line].split(currentLine)[0] == '')
        lines.push(book[line]);
    }
  }
  
  if (lines.length) {
    let currentLine = moves.join(' ');
    let randomLine = lines[Math.floor(Math.random() * lines.length)];

    try {
      let bookMove = randomLine.split(currentLine)[1].split(' ')[1];
      return engine.moveFromString(bookMove);
    } catch(e) { return 0; }
  }

  return 0;
}

// check for game state
function isGameOver(reps) {
  if (reps && engine.isRepetition()) repetitions++;
  /*if (repetitions >= 6) {
    gameResult = '3 fold repetition ' + (engine.getSide() ? 'red' : 'black') + ' lost';
    return 1;
  } else */if (engine.generateLegalMoves().length == 0) {
    gameResult = (engine.getSide() ? '1-0' : '0-1') + ' mate';  
    return 1;
  } else if (engine.getSixty() >= 120) {
    gameResult = '1/2-1/2 Draw by 60 rule move';
    return 1;
  } // TODO: material draw?

  if (engine.generateLegalMoves().length == 0) {
    gameResult = (engine.getSide() ? '1-0' : '0-1') + ' mate';
    return 1;
  }
  
  return 0;
}

// engine move
function think() {
  highlightCheck();
  if (isGameOver(true)) {updatePgn(); return;}
  if (document.getElementById('editMode').checked == true) return;
  engine.resetTimeControl();

  let timing = engine.getTimeControl();
  let startTime = new Date().getTime();
  
  if (fixedTime) {
    fixedDepth = 64;
    timing.timeSet = 1;
    timing.time = fixedTime * 1000;
    timing.stopTime = startTime + timing.time
    engine.setTimeControl(timing);
  }
  
  let bookMoveFlag = 0;
  let delayMove = 0;
  let bestMove = getBookMove();

  if (botName == 'Baihua') {
    let moves = engine.generateLegalMoves();
    try { bestMove = moves[Math.floor(Math.random() * moves.length)].move;
    } catch(e) {}
  } else {
    if (bestMove) bookMoveFlag = 1;
    else if (bestMove == 0) bestMove = engine.search(fixedDepth);
  }
  
  if (bestMove == 0) return;
  if (bookMoveFlag || fixedDepth || typeof(guiScore) == 'string') delayMove = 1000;
  
  let sourceSquare = engine.getSourceSquare(bestMove);
  let targetSquare = engine.getTargetSquare(bestMove);

  setTimeout(function() {
    movePiece(sourceSquare, targetSquare);
    drawBoard();
    highlightCheck();
 
    if (engine.getPiece(targetSquare)) {
      document.getElementById(targetSquare).classList.add('last');
      //document.getElementById(targetSquare).style.backgroundColor = SELECT_COLOR;             
      playSound(bestMove);
      updatePgn();
      userTime = Date.now();
    }
  
  }, delayMove);
}

// move piece in GUI
function movePiece(userSource, userTarget) {
  let moveString = engine.squareToString(userSource) +
                   engine.squareToString(userTarget);
    
  if (isGameOver() == 0) engine.loadMoves(moveString);
  else updatePgn();
  drawBoard();
}

// take move back
function undo() {
  gameResult = '*';
  try {
    engine.takeBack();
    drawBoard();
  } catch(e) {}
}

// validate move
function validateMove(userSource, userTarget) {
  let moveString = engine.squareToString(userSource) + 
                   engine.squareToString(userTarget);

  let move = engine.moveFromString(moveString);
  return move;
}


/****************************\
 ============================

             PGN

 ============================              
\****************************/

// get pgn
function getGamePgn() {
  let moveStack = engine.moveStack();
  let pgn = '';
  dpxqInit();
  
  for (let index = 0; index < moveStack.length; index++) {
    let move = moveStack[index].move;
    let moveScore = moveStack[index].score;
    let moveDepth = moveStack[index].depth;
    let moveTime = moveStack[index].time;
    let movePv = moveStack[index].pv;
    
    
    let dpxqMove = engine.moveToDPXQ(move);
    let dpxqPieces = dpxqPieceList();
    let moveString = getMovelistString(dpxqMove, dpxqPieces);
    updateDPXQ(engine.getSourceSquare(move), engine.getTargetSquare(move));
    
    let moveNumber = ((index % 2) ? '': ((index / 2 + 1) + '. '));
    let displayScore = (((moveScore / 100) == 0) ? '-0.00' : (moveScore / 100)) + '/' + moveDepth + ' ';
    if (displayScore.toString().includes('NaN') && moveScore.includes('M'))
      displayScore = moveScore.replace('M', 'mate in ') + ' # ';
    
    let stats = (movePv ? '(' + movePv.trim() + ')' + ' ': '') + 
                (moveDepth ? ((moveScore > 0) ? ('+' + displayScore) : displayScore): '') +
                Math.round(moveTime / 1000);
    
    let nextMove = moveNumber + moveString;// + (moveTime ? ' {' + stats + '}' : '');
    
    pgn += nextMove + ' ';
    userTime = 0;      
  }

  return pgn;
}

// update PGN
function updatePgn() {
  let pgn = getGamePgn();
  let gameMoves = document.getElementById('pgn');
  
  gameMoves.value = pgn;
  
  if (gameResult == '1-0 Mate' || gameResult == '0-1 Mate') {
    gameMoves.value += '# ' + gameResult;
  } else if (gameResult != '*') {
    gameMoves.value += ' ' + gameResult;
  }
  
  gameMoves.scrollTop = gameMoves.scrollHeight;
  updateMoveList();

  if (isGameOver()) {
    let moveList = document.getElementById('moveList');
    moveList.innerHTML += '<li class="list-group-item">' + gameResult + '</li>';
    moveList.scrollTop = moveList.scrollHeight;
  }    
}

// update move list
function updateMoveList() {
  let pgn = getGamePgn().split(' ').slice(0, -1);
  let moveList = document.getElementById('moveList');
  moveList.innerHTML = '';
  
  for (let i = 0; i < pgn.length; i++) {
    if (pgn[i][1] == '.' || pgn[i][2] == '.' || pgn[i][3] == '.') {
      if (pgn[i].length < 3) moveList.innerHTML += '<li style="font-size: 15px;" class="list-group-item text-right">' + pgn[i] + pgn[i + 1] + '</li>';
      else moveList.innerHTML += '<li style="font-size: 15px;" class="list-group-item text-left">' + pgn[i] + pgn[i + 1] + '</li>';
      i++;
    } else
      moveList.innerHTML += '<li class="list-group-item text-right">' + pgn[i] + '</li>';
  }
  
  moveList.scrollTop = moveList.scrollHeight;
}

// download PGN
function downloadPgn() {
  let userName = prompt('Enter your name:', 'Player');
  if (userName == null) return;
  let userColor = (guiSide == 0) ? 'White' : 'Black';
  
  if (userColor != 'White' && userColor != 'Black') {
    alert('Wrong color, please try again');
    return;
  }

  let header = '';
  if (guiFen) header += '[FEN "' + guiFen + '"]\n';
  header += '[Event "Friendly chess game"]\n';
  header += '[Site "https://maksimkorzh.github.io/wukong-xiangqi/src/gui/xiangqi.html"]\n';
  header += '[Date "' + new Date() + '"]\n';
  header += '[White "' + ((userColor == 'White') ? userName : botName) + '"]\n';
  header += '[Black "' + ((userColor == 'Black') ? userName : botName) + '"]\n';
  header += '[Variant "xiangqi"]\n';
  header += '[Result "' + gameResult + '"]\n\n';

  let downloadLink = document.createElement('a');
  downloadLink.id = 'download';
  downloadLink.download = ((userColor == 'White') ? (userName + '_vs_' + botName + '.pgn') : (botName + '_vs_' + userName + '.pgn'));
  downloadLink.hidden = true;
  downloadLink.href = window.URL.createObjectURL( new Blob([header + getGamePgn() + ((gameResult == '*') ? ' *' : '')], {type: 'text'}));
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
}


/****************************\
 ============================

        GAME CONTROLS

 ============================              
\****************************/

// start new game
function newGame() {
  guiScore = 0;
  guiDepth = 0;
  guiTime = 0;
  guiPv = '';
  gameResult = '';
  userTime = 0;
  allowBook = 1;
  engine.setBoard(engine.START_FEN);
  drawBoard();
  document.getElementById('pgn').value = '';
  document.getElementById('moveList').innerHTML = '<li class="list-group-item">No Moves</li>';
  repetitions = 0;
}

/****************************\
 ============================

          ON STARTUP

 ============================              
\****************************/

newGame();
setBot('Wukong');

