import "./App.css";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <div id="content">
        <div id="page">
          <Home />
        </div>
        <div id="footer">
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <a href="mailto:ewlsh@fujilinux.org" title="Contact Evan Welsh">
              Evan Welsh
            </a>
          </p>

          <p>
            The Arch Linux name and logo are recognized trademarks and are used
            under the{" "}
            <a
              href="https://terms.archlinux.org/docs/trademark-policy/"
              title="Arch Linux Trademark Policy"
            >
              Arch Linux Trademark Policy
            </a>
            .
          </p>

          <p>
            Linux® is the registered trademark of Linus Torvalds in the U.S. and
            other countries. All other product names, logos, and brands are
            property of their respective owners.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
