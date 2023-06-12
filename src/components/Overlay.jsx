import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""} ${
        hasScroll ? "overlay--scrolled" : ""
      }`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">EVENTORY.</h1>
          <p className="intro__scroll">Deslize para baixo para começar</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
        </div>
      )}
      <div  className={`outro ${end ? "outro--appear" : ""}`}>
        <textarea className="outro__input" placeholder="seuemail@email.com" />
        {/* <button className="explore" onClick={setPlay(false)}>Contate-nos</button> */}
      </div>
    </div>
  );
};
