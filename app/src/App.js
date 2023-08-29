import React, { useState } from "react";
// useCookiesをimport
import { useCookies } from "react-cookie";

const App = () => {
  // usernameの状態を管理するためのuseStateを定義
  const [UserNameVal, setUserNameVal] = useState("");
  // ageの状態を管理するためのuseStateを定義
  const [AgeVal, setAgeVal] = useState("");
  // cookie名として、usernameとageを設定する
  const [cookies, setCookie, removeCookie] = useCookies(["username", "age"]);

  const userNameChange = (e) => {
    setUserNameVal(e.target.value);
  };

  const AgeChange = (e) => {
    setAgeVal(e.target.value);
  };

  const CookieDataDelete = () => {
    removeCookie("username");
    removeCookie("age");
  };

  const CookieDataAdd = () => {
    setCookie("username", UserNameVal);
    setCookie("age", AgeVal);
  };

  return (
    <div className="wrap">
      <div className="main">
        <h2>ユーザー登録</h2>
        {/* // 氏名が変更されたらuserNameChange関数を呼び出す */}
        <input type="text" name="useradd" onChange={(e) => userNameChange(e)} className="input_margin" />
        {/* // 年齢が変更されたらAgeChange関数を呼び出す */}
        <input type="text" name="useradd" onChange={(e) => AgeChange(e)} className="input_margin" />
        <div className="button-group">
          {/* // 保存ボタンを押下したら、CookieDataAdd関数を呼び出す */}
          <button onClick={() => CookieDataAdd()}>保存</button>
          {/* // 削除ボタンを押下したら、CookieDataDelete関数を呼び出す */}
          <button onClick={() => CookieDataDelete()}>削除</button>
        </div>
        <br />
        <hr />
        <h3>値を参照(取得)</h3>
        <p>
          氏名<br />
          {cookies.username ? cookies.username + "さん" : ""}</p>
        <p>
          年齢<br />
          {cookies.age ? cookies.age + "歳" : ""}
        </p>
      </div>
    </div>
  );
}

export default App;