import React from "react";

export default function About() {
  return (
    <>
      <div id="about" className="container">
        <div className="row">
          <div className="col p-5 m-5 shadow">
            <h3 style={{ color: "black", textAlign: "center" }}>
            会社概要
            </h3>
            <p style={{ color: "" }}>
              GICグループは日本、ミャンマーおよびUSの3社で構成されています。主な事業は日本およびミャンマーでシステム開発をラボ型・受託での請負開発含むオフショア形式で行っています。また、USではDXやIoTといった先進事例の各種調査業務を行う役割を担っています。
              当社は2011年4月に設立されて、今期は13期目となります。設立当初はミャンマーやフィリピン及びASEANの海外進出コンサルテーションが主な事業でしたが、現在ではオフショア開発/アウトソーシングを中心に、日本語・英語ともに堪能なミャンマー人バイリンガルITエンジニアの派遣事業等も行っています。
              DX（デジタル・トランスフォーメーション）推進やシステム開発を含めた様々な案件を、多くのクライアントの皆様と推進することができた結果、現在では近年注目されているミャンマーオフショア開発において、当社が圧倒的No.1のポジションとなっています。
              {/* Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
