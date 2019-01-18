import React, {Component} from 'react';
import Link from "next/link";

class Navbar extends React.Component {
    constructor(props){
      super(props);
      this.props = props;
      this.state= {
          default : null
      };

    };
    render() {
        return (
            <nav>
                <div>
                    <section>
                        <Link href="/">
                            <a title="our API">Home</a>
                        </Link> &nbsp;
                        <Link href="/about">
                            <a title="about nextjs">About Next JS</a>
                        </Link>
                    </section>
                    <style jsx global>
                        {`
            a {
                padding: 10px;
                text-decoration:none;
                color: green;
                margin: 5px;
            }
            `}

                    </style>
                </div>
            </nav>
        );
    }
}

export default Navbar;