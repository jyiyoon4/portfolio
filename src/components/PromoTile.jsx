import { Link } from 'react-router-dom';

// 책장 행 맨 끝에 끼워 넣는 정사각형 홍보/소개 존.
// 뒤쪽 book이 hover로 커질 때 이 타일이 먼저 다음 줄로 밀려나면서
// book들 자체는 자기 줄에 남을 수 있는 여유 공간을 만들어줌.
// 문구는 자유롭게 바꿔서 사용하세요.
function PromoTile() {
  return (
    <Link to="/about" className="promo-tile" aria-label="More about me">
      <span className="promo-eyebrow">ABOUT</span>
      <p className="promo-text">
        ....
      </p>
      <span className="promo-more">MORE →</span>
    </Link>
  );
}

export default PromoTile;
