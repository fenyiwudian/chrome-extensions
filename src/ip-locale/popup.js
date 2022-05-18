const goBtn = document.getElementById('gogogo');
goBtn.onclick = async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log('changed');
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
}

// setInterval(async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   console.log('changed');
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// }, 2000)

function setPageBackgroundColor() {
    document.body.style.backgroundColor = 'green';
    console.log('changed');
  
}