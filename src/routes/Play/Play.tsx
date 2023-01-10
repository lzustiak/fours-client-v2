import Link from "@components/atoms/Link";

function Play() {
  return (
    <div>
      <h1>Play</h1>
      <Link to="/create" color="red">
        Create
      </Link>
      <Link to="/join" color="yellow">
        Join
      </Link>
    </div>
  );
}

export default Play;
