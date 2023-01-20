import { useState } from "react";
import {
  toWish,
  wish,
  wishsRelatives,
  wishsParents,
  wishsCousin,
} from "./data.js";

function App() {
  const accessTokens = ["friends", "family", "TET", "tet", "Ngiu", "@Quin<3"];

  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [typeClass, setTypeClass] = useState("code");
  const [secret, setSecret] = useState(10);
  const [randnum, setRandnum] = useState(0);

  const handleDate = (e) => {
    const value = e.target.value;
    if (value in wish) setText(wish[value]);
    else setText("");
  };

  const handleRelative = (e) => {
    const value = e.target.value;
    setText(toWish(value, wishsRelatives));
  };

  const handleFamily = (e) => {
    const value = e.target.value;
    if (value === "Dung")
      setText(
        "Dung năm nay bớt trẻ trâu lại, bớt ăn lại đi chứ béo lắm rồi đó, rồi sống tiết kiệm lại tí thì a2 lâu lâu mới cho tí tiền sài, không thì mơ đi :))"
      );
    else setText(toWish(value, wishsParents));
  };

  const handleAccessToken = (e) => {
    setType(e.target.value);
    if (accessTokens.find((accessToken) => accessToken === e.target.value))
      setTypeClass("none");
    if (e.target.value === accessTokens[4]) generateRandnum();
    if (e.target.value === accessTokens[5]) {
      generateRandnum();
      handleSecret();
    }
  };

  const generateRandnum = () => {
    let randnum = window.localStorage.getItem("randnum");
    console.log(randnum);
    if (!randnum) {
      randnum = Math.floor(Math.random() * 4) + 1;
      window.localStorage.setItem("randnum", randnum);
    }
    setRandnum(Number(randnum));
  };

  const handleSecret = () => {
    if (secret > 0) {
      const interval = setInterval(() => {
        setSecret((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  };

  return typeClass === "code" ? (
    <input
      className="code"
      type="text"
      value={type}
      onChange={handleAccessToken}
      placeholder="Access token"
    />
  ) : (
    <>
      {type === accessTokens[0] && (
        <>
          <input className="date z-index" type="date" onChange={handleDate} />
          <p className="text z-index">{text}</p>
        </>
      )}
      {type === accessTokens[1] && (
        <>
          <select className="options z-index" onChange={handleFamily}>
            <option value="Cha">Cha</option>
            <option value="Mẹ">Mẹ</option>
            <option value="Dung">Dung</option>
          </select>
          <p className="text">{text}</p>
        </>
      )}
      {type === accessTokens[2] && (
        <>
          <select className="options z-index" onChange={handleRelative}>
            <option value="Gia đình Cậu 2 ">Gia đình Cậu 2</option>
            <option value="Gia đình Mẹ 3">Gia đình Mẹ 3</option>
            <option value="Gia đình Mẹ 4">Gia đình Mẹ 4</option>
            <option value="Gia đình Mẹ 5">Gia đình Mẹ 5</option>
            <option value="Gia đình Mẹ Út">Gia đình Mẹ Út</option>
          </select>
          <p className="text">{text}</p>
        </>
      )}
      {type === accessTokens[3] && (
        <p className="text">{toWish("", wishsCousin)}</p>
      )}
      {type === accessTokens[4] && (
        <p className="text z-index">
          Vẫn phải gặp mới chúc tết nhaaaa húy húy. Nhưng mà tui sẽ cho trước
          ngiu 1 số may mắn nè:
          <strong style={{ color: "red" }}>{` ${randnum}`}</strong>
        </p>
      )}
      {type === accessTokens[5] && (
        <>
          <p className="text z-index">
            Năm nay thật sự là 1 năm khá ý nghĩa với em luôn. Khi mà được gặp
            lại chị và thân với chị hơn đóoooooo. Nhưng mà điều ý nghĩa nhất là
            em phát hiện ra rằng em đã nới lỏng cảnh giác để có thể tin tưởng
            một người và thật sự gọi chị là bạn đúng nghĩa. Thiệc luôn là em đã
            coi chị là 1 người cực kì quan trọng, kể những chuyện mà chưa bao
            giờ kể với ai cho chị nghe đó, nên mong rằng chị mãi mãi là bạn thân
            thiết với em nhaaaaa. Chúc thì đã chúc bên kia òi, nhưng mốt gặp
            nhau toi chúc lại thêm lần nữa nhaa.
          </p>
          {secret > 0 ? (
            <p className="text z-index"></p>
          ) : (
            <p className="text z-index">
              {/* <br /> */}
              Tưởng hết rồi đúng hông ạaaaaa, Hổng có dễ đâu :v. Yêu chị muốn
              sỉu luôn thì tất nhiên nói nhiêu đó sao mà đủ, mà có nói cũng hông
              đủ nữa, tạo chúng ta là 2 con người cứ gặp nhau là tự nhiên chuyện
              tuông ra như suối, nói hoài hông hết, với cả còn nhây nhầy nhụa,
              có bao giờ ngừng đúng lịch đâu :v. Nhưng mà thật sự là rất thương
              chị nha, nên đôi khi tôi mới dỗi đó, chứ không thì không thèm tốn
              công đâu :v. Mốt em lên đi chơi với chị rồi lì xì sau nèeeeee. Yêu
              chị ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ Số may mắn của chị là:
              <strong style={{ color: "red" }}>{` ${randnum}`}</strong>
            </p>
          )}
        </>
      )}
      <div className="feliz">Happy new year</div>
      <div className="ano_novo">
        <span>202</span>
        <span className="seis">2</span>
        <span className="sete">3</span>
        <div className="balao"></div>
      </div>
      <div className="fogos">
        <div className="f1">
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
        </div>
        <div className="f2">
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
        </div>
        <div className="f3">
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
        </div>
        <div className="f4">
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
        </div>
      </div>
      {/* <a href="https://twitter.com/cecelabomfim" className="author">
        Marcela Bomfim
      </a> */}
    </>
  );
}

export default App;
