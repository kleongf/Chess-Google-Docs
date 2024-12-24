const getValue = async () => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['enabled'], (result) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(result.enabled !== undefined ? result.enabled : true);
            }
        });
    });
};

const replace = () => {
    var element = document.querySelector('div.board-layout-nav');
    
    element.parentElement.removeChild(element);

    var element3 = document.querySelector('div.board-layout-sidebar');
    
    element3.parentElement.removeChild(element3);

    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var i = 0; i < l; i++) {
        images[0].parentNode.removeChild(images[0]);
    }

    // Get the link element you want to remove
const linkToRemove = document.querySelector('link[rel="stylesheet"][href="/chesscom-artifacts/packages/@chesscom/chessboard-layout/2.1.0/style.client.css"]'); 

// Check if the link element exists
if (linkToRemove) {
  // Remove the link element from the head
  linkToRemove.parentNode.removeChild(linkToRemove);
}

    var flag = document.querySelector('.country-flags-component')
    flag.parentElement.removeChild(flag);
    // recommendation: dont activate the extension before you have found a game, then enable when playing
    // does not work if you do not have an opponent
    var opponentUsernames = document.querySelectorAll('.cc-text-medium-bold');
    console.log(opponentUsernames.length)
    for (i = 0; i < opponentUsernames.length; i++) {
      opponentUsernames[i].style.cssText = `
        font-family: "Arial"; 
        color: #000000;
        font-size: 24px;   
  `;
    }

    var opponentRatings = document.getElementsByClassName('cc-text-medium');
    console.log(opponentRatings.length)
    for (i = 0; i < opponentRatings.length; i++) {
      opponentRatings[i].style.cssText = `
        font-family: "Arial"; 
        color: #000000;
        font-size: 24px;   
  `;
    }

  var opponentInfoContainer = document.getElementById('board-layout-player-top');
    opponentInfoContainer.style.cssText = `
        display: flex;
        justify-content: flex-end;
  `;
  

  //display: flex; justify-content: flex-end

    document.body.style.backgroundColor = "#e8ebe9";
    var lameBoard = document.querySelector(".opened-chats-container")
    var mainBoard = document.querySelector('.board-layout-main');
    mainBoard.style.outline = "1px solid black";
    mainBoard.style.background = "white";
    mainBoard.style.width = "45em";
    mainBoard.style.marginLeft = "25em";

    // i want the header to expand to fill container
    var header = document.createElement('div')
    header.style.height = "9em"
    header.style.background = 'url("https://i.postimg.cc/wjmGc9WZ/header.png")'
    header.style.marginBottom = "1em"
    header.style.backgroundSize = "cover";                      /* <------ */
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundPosition = "center center";
    // header.style.position = "fixed"

    document.body.insertBefore(header, lameBoard);

    var top = document.getElementById("board-layout-player-top");
    top.style.height = "5em";


    // content.js

    const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        for (const node of mutation.addedNodes) {
          if (node.tagName === 'STYLE' && node.id === 'board-styles-play-computer') {
            node.remove();
          }
        }
      }
    }
  });

const newStyling = `#board-play-computer, .fade-in-overlay {
    background-image: url('https://i.postimg.cc/SR2DsLjX/Screenshot-2024-12-19-at-12-29-20-PM.png');
  }
  .coordinate-light {
    fill: #739552;
  }
  .coordinate-dark {
    fill: #EBECD0;
  }
  .highlight {
    background-color: #ffff33;
  }
#board-play-computer .piece.wk, #board-play-computer .promotion-piece.wk {
    background-image: url('https://i.postimg.cc/0QtN5dC2/Screenshot-2024-12-22-at-1-23-13-PM-removebg-preview.png');
  }#board-play-computer .piece.wq, #board-play-computer .promotion-piece.wq {
    background-image: url('https://i.postimg.cc/pdz8d79V/Screenshot-2024-12-22-at-1-23-01-PM-removebg-preview.png');
  }#board-play-computer .piece.wr, #board-play-computer .promotion-piece.wr {
    background-image: url('https://i.postimg.cc/RZWj61Qb/Screenshot-2024-12-22-at-1-21-13-PM-removebg-preview.png');
  }#board-play-computer .piece.wb, #board-play-computer .promotion-piece.wb {
    background-image: url('https://i.postimg.cc/9MyBv0Pp/Screenshot-2024-12-22-at-1-22-40-PM-removebg-preview.png');
  }#board-play-computer .piece.wn, #board-play-computer .promotion-piece.wn {
    background-image: url('https://i.postimg.cc/x1YV7NKs/Screenshot-2024-12-22-at-1-21-34-PM-removebg-preview.png');
  }#board-play-computer .piece.wp, #board-play-computer .promotion-piece.wp {
    background-image: url('https://i.postimg.cc/Y06MG66W/Screenshot-2024-12-22-at-1-23-25-PM-removebg-preview.png');
  }#board-play-computer .piece.bk, #board-play-computer .promotion-piece.bk {
    background-image: url('https://i.postimg.cc/GmWKzV6G/Screenshot-2024-12-22-at-1-28-04-PM-removebg-preview.png');
  }#board-play-computer .piece.bq, #board-play-computer .promotion-piece.bq {
    background-image: url('https://i.postimg.cc/yY6bZqzN/Screenshot-2024-12-22-at-1-24-47-PM-removebg-preview.png');
  }#board-play-computer .piece.br, #board-play-computer .promotion-piece.br {
    background-image: url('https://i.postimg.cc/wjjYgyB0/Screenshot-2024-12-22-at-1-24-31-PM-removebg-preview.png');
  }#board-play-computer .piece.bb, #board-play-computer .promotion-piece.bb {
    background-image: url('https://i.postimg.cc/YqNs4pPZ/Screenshot-2024-12-22-at-1-24-05-PM-removebg-preview.png');
  }#board-play-computer .piece.bn, #board-play-computer .promotion-piece.bn {
    background-image: url('https://i.postimg.cc/j5pRjs1C/Screenshot-2024-12-22-at-1-24-20-PM-removebg-preview.png');
  }#board-play-computer .piece.bp, #board-play-computer .promotion-piece.bp {
    background-image: url('https://i.postimg.cc/FzMDY6b9/Screenshot-2024-12-22-at-1-23-55-PM-removebg-preview.png');
  }#board-play-computer, #board-play-computer .piece {
  
}`
  
  observer.observe(document.head, { childList: true, subtree: true });

  var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = newStyling;
    document.getElementsByTagName('head')[0].appendChild(style);

  // this works, now we just need to add in our own styles

};

async function main() {
    try {
        const value = await getValue();
        if (value) {
            replace()
        }
    } catch (error) {
        console.error('Error retrieving value:', error);
    }
}

main();