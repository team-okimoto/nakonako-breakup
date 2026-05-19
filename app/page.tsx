"use client";

import { useState } from "react";

const RANDOM_REASONS = [
  "こーくんが購読しているASMRチャンネルの声がなごみより好みと判明したから",
  "なごみのいびきをこーくんが「ちょっとASMRっぽくない？」と動画に入れたら再生数がチャンネル1位になったから",
  "こーくんの検索履歴に「彼女 寝言 うるさい 慣れる方法」が47件あったから",
  "デート中こーくんがセブンのフランクフルト食べたくて5分間無言で葛藤してたから",
  "なごみが「今何考えてる？」と聞くたびこーくんが「チキン南蛮」と答えるから（通算29回目）",
  "こーくんのYouTube「おすすめ」欄がなごみより先になごみの好みを完全に把握してたから",
  "「付き合って何日？」クイズでこーくんが盛大に外れ「え、俺たちそんな浅かったっけ」と言ったから",
  "なごみがスキンケアに使う時間がこーくんとのLINE返信より長いと気づいてしまったから",
  "こーくんが選んだ記念日レストランのGoogleレビューに「虫でました」が3件あったから",
  "撮影用リングライトが明るすぎて、なごみの毛穴が4K画質で全世界に公開されたから",
  "なごみがこーくんの部屋の観葉植物に話しかけてる間、こーくんより植物の方が嬉しそうだったから",
  "こーくんのスマホ待ち受けがなごみの写真だったが、なごみが撮った猫の写真だったから（なごみは映ってない）",
  "旅行動画のサムネを「二人の絆に亀裂！？」にしたらコメ欄が全員「はよ別れろ」で埋まったから",
  "こーくんがプロポーズのセリフを鏡で練習してる声を、なごみが壁越しに全部聞いてしまったから",
  "なごみのLINEアイコンがこーくんとのツーショから「好きな食べ物」シリーズに変わっていたから",
  "こーくんがファミマの新作スイーツの発売日は覚えてるのに記念日を毎回間違えるから",
  "なごみが怒ったとき「ごめん」より先に「これ動画のネタになるな」という顔をするから",
  "こーくんの夢に毎回なごみが出てくるのに、夢の中でもなごみはこーくんより飯を優先してたから",
  "お揃いで買ったペアグッズが、なごみ側だけメルカリに出品されてたから（送料込み・美品）",
  "こーくんが「なごみのどこが好き？」に4秒沈黙してから「声？」と答えたから（ASMRの影響が出てる）",
  "ご出身はどちらですか？と聞かれたときに、こーくんが「羊水出身です」と答えたから",
];

function getRandomReason(): string {
  return RANDOM_REASONS[Math.floor(Math.random() * RANDOM_REASONS.length)];
}

let lastKeywordIndex = -1;

function getKeywordReason(keyword: string): string {
  const templates = [
    `こーくんが寝言で「${keyword}...${keyword}...」と言っており、翌朝ケロッとしてたから`,
    `記念日プレゼントが「${keyword}」だったから（しかもメルカリ・送料込み・美品）`,
    `なごみが本気で怒ってるのにこーくんが「${keyword}ってASMRにならないかな」と言いだしたから`,
    `こーくんのYouTubeおすすめ欄が「${keyword}」で埋まっており、もうなごみの入る隙間がなかったから`,
    `コラボ動画で「${keyword}」の話になった瞬間なごみだけ目の輝きが3倍になったから`,
    `なごみのスマホ検索履歴1位が「${keyword}」で、2位以下もすべて「${keyword} 関連」だったから`,
    `こーくんが「もし${keyword}に生まれ変わったら？」に0.5秒で「いいね」と答えたから`,
    `視聴者アンケート「こーくんと${keyword}どっちが大事？」が97%「${keyword}」で、こーくんも票を入れてたから`,
    `喧嘩の最中になごみが突然「${keyword}って美味しいよね」と言って笑ったから`,
    `「将来の夢は？」に対するこーくんの回答欄に「${keyword}」とだけ書いてあったから（真剣な顔で）`,
    `なごみがこーくんより先に「${keyword}」にどハマりし、もうこーくんの話を聞く帯域が残ってなかったから`,
    `こーくんの夢の中でなごみが「${keyword}の方が好き」とはっきり言ったから`,
    `なごみが「こーくんと${keyword}どっちが大事？」と聞いたら5秒沈黙されたから`,
    `こーくんが「${keyword}」について語り始めたとき、なごみの目に初めて見る光が宿ったから`,
    `LINEのトーク画面で「${keyword}」という単語だけ既読がつくのが早いと判明したから`,
    `なごみの部屋に「${keyword}」グッズが増えるほどこーくんへのLINE返信が遅くなっていったから`,
    `こーくんが「${keyword}って羊水に似てるよな」と言ったから`,
    `二人でいるときより「${keyword}」の話をしてるときのなごみの方が明らかに楽しそうだったから`,
    `こーくんが撮影中に「${keyword}」と呟いてひとりで笑っていたが、理由を最後まで教えてくれなかったから`,
    `なごみのパスワードが「${keyword}suki」に変わっていたから（以前は「koukun_suki」だった）`,
    `こーくんが「${keyword}について1時間語れる」と言ったのに、なごみのことは3分で話し終えたから`,
    `「好きな言葉は？」のインタビューでこーくんが「${keyword}」と答え、カメラの前でなごみが固まったから`,
    `なごみがこーくんへのお土産を買い忘れたのに「${keyword}」グッズだけ忘れずに買ってきたから`,
    `こーくんが記念日に「${keyword}」の話を2時間してから「あ、今日記念日だっけ」と言ったから`,
    `なごみのスマホのアラーム名がすべて「${keyword}」になっていたから（「起きろ」とか「薬」とかじゃなく）`,
  ];

  let index;
  do {
    index = Math.floor(Math.random() * templates.length);
  } while (index === lastKeywordIndex && templates.length > 1);
  lastKeywordIndex = index;
  return templates[index];
}

export default function Home() {
  const [reason, setReason] = useState<string | null>(null);
  const [keyword, setKeyword] = useState("");
  const [mode, setMode] = useState<"random" | "keyword">("random");
  const [shaking, setShaking] = useState(false);

  const triggerShake = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 600);
  };

  const handleRandom = () => {
    triggerShake();
    setTimeout(() => setReason(getRandomReason()), 100);
  };

  const handleKeyword = () => {
    if (!keyword.trim()) return;
    triggerShake();
    setTimeout(() => setReason(getKeywordReason(keyword.trim())), 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 flex flex-col items-center justify-center p-4">
      {/* ヘッダー */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-3">💔</div>
        <h1 className="text-2xl font-black text-rose-700 leading-tight">
          なこなこカップルが別れた
        </h1>
        <h1 className="text-2xl font-black text-rose-700 leading-tight">
          本当の理由
        </h1>
      </div>

      {/* メインカード */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full border-4 border-rose-200">
        {/* モード切替 */}
        <div className="flex rounded-2xl overflow-hidden border-2 border-rose-200 mb-6">
          <button
            onClick={() => { setMode("random"); setReason(null); }}
            className={`flex-1 py-2 text-sm font-bold transition-all ${
              mode === "random"
                ? "bg-rose-500 text-white"
                : "bg-white text-rose-400 hover:bg-rose-50"
            }`}
          >
            🎲 ランダム
          </button>
          <button
            onClick={() => { setMode("keyword"); setReason(null); }}
            className={`flex-1 py-2 text-sm font-bold transition-all ${
              mode === "keyword"
                ? "bg-rose-500 text-white"
                : "bg-white text-rose-400 hover:bg-rose-50"
            }`}
          >
            ✏️ キーワード
          </button>
        </div>

        {/* キーワード入力 */}
        {mode === "keyword" && (
          <div className="mb-4">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleKeyword()}
              placeholder="なんでも入れてね（例：ゲーム、ラーメン、元カノ）"
              className="w-full border-2 border-rose-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 text-gray-700 placeholder-gray-300"
              maxLength={20}
            />
          </div>
        )}

        {/* ボタン */}
        <button
          onClick={mode === "random" ? handleRandom : handleKeyword}
          disabled={mode === "keyword" && !keyword.trim()}
          className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-300 text-white font-black py-4 rounded-2xl text-lg transition-all active:scale-95 shadow-lg disabled:cursor-not-allowed"
        >
          💔 本当の理由をみる
        </button>

        {/* 結果 */}
        {reason && (
          <div
            className={`mt-6 bg-rose-50 border-2 border-rose-200 rounded-2xl p-5 transition-all ${
              shaking ? "animate-bounce" : ""
            }`}
          >
            <div className="text-xs font-bold text-rose-400 mb-2 text-center">
              ── なこなこカップルが別れた本当の理由 ──
            </div>
            <p className="text-gray-800 font-bold text-base leading-relaxed text-center">
              {reason}
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
