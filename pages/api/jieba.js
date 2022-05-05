// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodejieba from "nodejieba";

export default function handler(req, res) {
  let sentence = "";
  let topN = 0;
  if (req.query) {
    sentence = sentence || req.query.sentence;
    topN = topN || req.query.topN;
  }
  if (req.body) {
    sentence = sentence || req.body.sentence;
    topN = topN || req.body.topN;
  }
  sentence = sentence || "";
  topN = topN || 30;

  const normalResult = nodejieba.extract(sentence, topN);
  const rankResult = nodejieba.textRankExtract(sentence, topN);
  res.status(200).json({ topN, normalResult, rankResult });
}
