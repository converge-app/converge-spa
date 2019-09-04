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
  height: 5,
  display: "block"
};

export default function Header() {
  return (
    <header>
      <hr color="#13A8FE" style={linestyle}></hr>
      <div>
        <img src="static\logo.png" />
        <Link href="/">
          <a
            style={{
              marginRight: 25,
              marginLeft: 10,
              fontSize: 18,
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Converge
          </a>
        </Link>
        <Link href="About">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="Freelancers">
          <a style={linkStyle}>Freelancers</a>
        </Link>
        <Link href="Employers">
          <a style={linkStyle}>Employers</a>
        </Link>

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

      <style jsx>{`
        img {
          float: left;
          margin-left: 10px;
          width: 30px;
          height: 30px;
        }
        div {
          margin-top: 25px;
          font-weight: "bold";
          display: inline-block;
        }
        div a {
          font-weight: bold;
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
