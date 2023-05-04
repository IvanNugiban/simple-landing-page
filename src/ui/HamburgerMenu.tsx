import React from 'react';
import {slide as Menu} from "react-burger-menu";
import styled from "styled-components";
import HeaderItem from "./HeaderItem";

const HamburgerMenuWrapper = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 30px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
  }

  /* General sidebar styles */
  .bm-menu {
    background: white;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

const HamburgerMenu = () => {


    return (
        <HamburgerMenuWrapper className="sm:hidden">
            <Menu right>
                <nav>
                    <ul className="flex flex-col justify-center items-center mr-2 lg:mr-24">
                        <HeaderItem text={"contact"}/>
                        <HeaderItem text={"testimonials"}/>
                        <HeaderItem text={"about"}/>
                        <HeaderItem text={"terms"}/>
                        <HeaderItem text={"Search"}/>
                    </ul>
                </nav>
            </Menu>
        </HamburgerMenuWrapper>
    );
};

export default HamburgerMenu;