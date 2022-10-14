//rfc

export default function profile() {
  const name = '박범주';
  const email = 'bzpark@naver.com';
  const homepage = 'https://www.google.co.kr';
  return (
    <div>
      <h1>Profile</h1>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>Homepage : {homepage}</p>
    </div>
  );
}
