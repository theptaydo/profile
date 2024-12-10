'use client'; // Thêm dòng này để báo rằng đây là một Client Component
import React, { useState } from "react";
import '@/styles/flash-contact.css';
export default function AppContact() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  // Toggle mở/đóng chatbox
  const toggleChatbox = () => {
    console.log("Toggling chatbox. Current state:", isChatOpen);
    setIsChatOpen(!isChatOpen);
  };

  // Gửi tin nhắn
  const handleSendMessage = () => {
    if (input.trim() === '') return;

    setMessages((prevMessages) => [...prevMessages, input]);
    setInput('');
  };


  return (
    <div id="flash-contact">
      <div className="call">
        <a href="tel:02923841822" aria-label="Call">
          <button className="callBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 32 32" height="32" fill="none" className="svg-icon">
              <path strokeWidth="2" strokeLinecap="round" stroke="#fff" fillRule="evenodd" d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z" clipRule="evenodd"></path></svg>
          </button>
        </a>

      </div>

      <div className="chat"  >
        <button className="chatBtn" aria-label="Chat" onClick={toggleChatbox} >
          <svg height="1.6em" fill="white" xmlSpace="preserve" viewBox="0 0 1000 1000" y="0px" x="0px" version="1.1">
            <path d="M881.1,720.5H434.7L173.3,941V720.5h-54.4C58.8,720.5,10,671.1,10,610.2v-441C10,108.4,58.8,59,118.9,59h762.2C941.2,59,990,108.4,990,169.3v441C990,671.1,941.2,720.5,881.1,720.5L881.1,720.5z M935.6,169.3c0-30.4-24.4-55.2-54.5-55.2H118.9c-30.1,0-54.5,24.7-54.5,55.2v441c0,30.4,24.4,55.1,54.5,55.1h54.4h54.4v110.3l163.3-110.2H500h381.1c30.1,0,54.5-24.7,54.5-55.1V169.3L935.6,169.3z M717.8,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.5,24.7,54.5,55.2C772.2,420.2,747.8,444.8,717.8,444.8L717.8,444.8z M500,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.4,24.7,54.4,55.2C554.4,420.2,530.1,444.8,500,444.8L500,444.8z M282.2,444.8c-30.1,0-54.5-24.7-54.5-55.1c0-30.4,24.4-55.2,54.5-55.2c30.1,0,54.4,24.7,54.4,55.2C336.7,420.2,312.3,444.8,282.2,444.8L282.2,444.8z"></path>
          </svg>
          <span className="tooltip">Chat</span>
        </button>
      </div>

      {isChatOpen && (
        <div className="chatbox">
          <div className="col-md-6">
            <div className="card card-bordered">
              <div className="card-header">
                <h4 className="card-title fw-semibold">
                  <strong>TAYDOSTEEL BOT</strong>
                </h4>

                <span onClick={toggleChatbox}>
                  <i className="fa-regular fa-circle-xmark"></i>
                </span>

              </div>

              <div
                className="ps-container ps-theme-default ps-active-y"
                id="chat-content"
              >

                <div className="media media-chat d-flex">
                  <img
                    className="avatar"
                    src="https://img.icons8.com/color/36/000000/administrator-male.png"
                    alt="avatar"
                  />
                  <div className="media-body">
                    <p>Xin chào</p>
                    <p>Tôi là SteelBot, một chatbot tự động của Website <a href="https://theptaydo.com">theptaydo.com</a>. Được tạo ra bởi <a href="https://dangth.dev">Davis</a>.</p>
                    <p>
                      Tôi có thể giúp gì cho bạn hôm nay?<br />
                    </p>
                    <p className="meta">
                      <time dateTime="2018">23:58</time>
                    </p>
                  </div>
                </div>

                <div className="media media-meta-day text-center">Today</div>

                <div className="media media-chat media-chat-reverse">
                  <div className="media-body">
                    <p>Hiii, I&apos;m good.</p>
                    <p>How are you doing?</p>
                    <p>Long time no see! Tomorrow office. will be free on Sunday.</p>
                    <p className="meta">
                      <time dateTime="2018">00:06</time>
                    </p>
                  </div>
                </div>
              </div>
              <div className="publisher bt-1 border-light">
                <input
                  className="publisher-input"
                  type="text"
                  placeholder="Nhập lời nhắn của bạn tại đây"
                />
                <span className="publisher-btn file-group">
                  <i className="fa fa-paperclip file-browser"></i>
                  <input type="file" />
                </span>
                <a className="publisher-btn text-info" href="#" data-abc="true">
                  <i className="bi bi-emoji-smile"></i>
                </a>
                <a className="publisher-btn text-info" href="#" data-abc="true">
                  <i className="bi bi-send"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      )}
    </div>

  );
}
