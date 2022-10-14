// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .json({ name: 'Beom ju Park', age: 30, email: 'bzpark@naver.com' });
}
