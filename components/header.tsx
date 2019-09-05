import Link from "next/link";
import Button from "@material-ui/core/Button";

const linkStyle = {
  marginRight: 25,
  fontSize: 12,
  color: "#9B9B9B",
  textDecoration: "none"
};

const loginButtonStyle = {
  marginRight: 25,
  borderRadius: 0,
  borderWidth: 1,
  borderColor: "#ffffff",
  color: "#ffffff",
  left: 0,
  fontSize: 12,
  width: 80
};

const signupButtonStyle = {
  borderRadius: 0,
  borderWidth: 1,
  borderColor: "#ffffff",
  color: "#ffffff",
  left: 0,
  fontSize: 12,

  width: 80
};

const linestyle = {
  padding: 0,
  marginTop: 0,
  height: 5
};

export default function Header() {
  return (
    <header>
      <hr color="#13A8FE" style={linestyle}></hr>

      <div className="gridcontainer">
        <div className="convergeLogo">
          <img src="static\logo.png" />
        </div>
        <div className="logo_text_block">
          <a
            style={{
              fontSize: 18,
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Converge
          </a>
        </div>

        <div className="links">
          <Link href="about">
            <a style={linkStyle}>About</a>
          </Link>
          <Link href="Freelancers">
            <a style={linkStyle}>Freelancers</a>
          </Link>
          <Link href="Employers">
            <a style={linkStyle}>Employers</a>
          </Link>
        </div>

        <div className="BTN">
          <Link href="login">
            <Button variant="outlined" style={loginButtonStyle}>
              Login
            </Button>
          </Link>
          <Link href="signup">
            <Button variant="outlined" style={signupButtonStyle}>
              Signup
            </Button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        div a {
          font-weight: bold;
        }

        div.gridcontainer {
          display: grid;

          grid-template-columns: auto auto;
          grid-template-areas: "img txtBlock lnk a a a a a a a a a a buttons";
          align-items: start;
          margin-top: 20px;
          margin-left: 20px;
          align-items: center;
        }
        div.links {
          grid-area: lnk;
        }
        div.BTN {
          grid-area: buttons;
          margin-left: 400px;
        }

        img {
          grid-area: img;
          width: 30px;
          height: 30px;
          margin-left: 10px;
        }

        div.logo_text_block {
          grid-area: txtBlock;
          margin-left: -40px;
        }
      `}</style>

      <style jsx global>
        {`
          body {
            background: #000;
            color: #fff;
            margin: 0 !important;
            padding: 0 !important;
          }
        `}
      </style>
    </header>
  );
}
