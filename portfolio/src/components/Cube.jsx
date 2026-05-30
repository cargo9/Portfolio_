import '../styles/Cube.css';

export default function Cube() {
  return (
    <div className="cube-stage" aria-hidden="true">
      <div className="cube">
        <div className="face front" />
        <div className="face back" />
        <div className="face right" />
        <div className="face left" />
        <div className="face top" />
        <div className="face bottom" />
      </div>
    </div>
  );
}
