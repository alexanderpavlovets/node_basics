import {browser} from 'protractor'

async function setXhrListener() {
  await browser.executeScript(`
    const open = window.XMLHttpRequest.prototype.open  
    const send = window.XMLHttpRequest.prototype.send
    window.xhrState = 'untracked'
    window.xhrCount = 0
    
    function openReplacement(method, url, async, user, password) {
      this._url = url; // maybe unnecessary here 
      xhrCount += 1
      return open.apply(this, arguments);
    }
    
    function sendReplacement(data) {  
      if(this.onreadystatechange) {
        this._onreadystatechange = this.onreadystatechange;
      }
      this.onreadystatechange = onReadyStateChangeReplacement;
      return send.apply(this, arguments);
    }
    
    function onReadyStateChangeReplacement() {  
      
      if (this.readyState === 4) {
        xhrCount -= 1
      }
      xhrState = xhrCount ? 'inProgress' : 'complete'
      if(this._onreadystatechange) {
        return this._onreadystatechange.apply(this, arguments);
      }
    }
    window.XMLHttpRequest.prototype.open = openReplacement;  
    window.XMLHttpRequest.prototype.send = sendReplacement;
  `)
}

async function waitForXhrComplete(timeout = 10000) {
  await browser.wait(async () => {
    await sleep()
    return await browser.executeScript('return xhrState === "complete"')
  }, timeout, 'All XHR should be complete')
}

const sleep = async (ms = 200) => new Promise((res) => setTimeout(res, ms))

export {setXhrListener, waitForXhrComplete}
