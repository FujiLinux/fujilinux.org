const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div
        style={{
          width: "100%",
          height: "30vh",
          backgroundColor: "#1a1a1a",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{ maxHeight: 100 }}
          src="/static/logos/fujilinux-logo.svg"
        />
        <p
          style={{
            color: "white",
          }}
        >
          (logo in progress)
        </p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: "1.5rem", marginBottom: 5 }}>
          The remix bringing the simplicity of Arch Linux to Apple Silicon.
        </p>
        <p style={{ fontSize: "1.5rem", marginTop: 0, marginBottom: 30 }}>
          We'll try to Keep It Simple.
        </p>
        <p>
          Arch Linux is the "
          <a href="https://en.wikipedia.org/wiki/Arch_Linux#cite_ref-pronunciation-of-archlinux_12-1">
            principal
          </a>
          " distribution of Linux while{" "}
          <a href="https://en.wikipedia.org/wiki/Mount_Fuji">Mount Fuji</a> is
          the principal peak in Japan.
        </p>
        <p>
          (Japan is also where{" "}
          <a href="https://en.wikipedia.org/wiki/Fuji_%28apple%29">
            Fuji apples
          </a>{" "}
          come from 😉)
        </p>
      </div>
    </div>
  );
};

export default Home;
