// 聊天紀錄自動滑到最新
function scrollToBottom(id) {
  setTimeout(() => {
    const box = document.getElementById(id);
    box.scrollTop = box.scrollHeight;
  }, 0);
}
// 每個 label 綁定事件
document.getElementById("marinLabel").onclick = function () {
  scrollToBottom("marinMessageBox");
};
document.getElementById("annaLabel").onclick = function () {
  scrollToBottom("annaMessageBox");
};
document.getElementById("gojoLabel").onclick = function () {
  scrollToBottom("gojoMessageBox");
};
document.getElementById("maoLabel").onclick = function () {
  scrollToBottom("maoMessageBox");
};
document.getElementById("papaLabel").onclick = function () {
  scrollToBottom("papaMessageBox");
};
document.getElementById("ranaLabel").onclick = function () {
  scrollToBottom("ranaMessageBox");
};
document.getElementById("meguruLabel").onclick = function () {
  scrollToBottom("meguruMessageBox");
};
document.getElementById("testLabel").onclick = function () {
  scrollToBottom("testMessageBox");
};
// 按下enter後清空文字區 模擬傳送訊息
const chatInput = document.getElementById("msgInput");
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault(); // 防止換行
    chatInput.value = ""; // 清空文字區
  }
});
