import styled from 'styled-components';

export const Container = styled.header`
  background: black;
  left: 0;
  min-height: 0;
  padding: 0;
  position: fixed;
  top: 0;
  transition: all 0.3s ease;
  width: 100%;
  z-index: 999;

  ul {
    position: relative;
  }

  ul li {
    color: #fff;
    float: left;
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
    margin-right: 70px;
    position: relative;
  }

  ul li a {
    color: #fff;
    display: block;
    line-height: 30px;
    position: relative;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
  }

  .header-top {
    background: none;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
    color: #fff;
    padding-bottom: 10px;
    padding-top: 10px;
    position: relative;
  }

  .auto-container {
    max-width: 1780px;
    padding: 0 20px;
  }

  .inner {
    border: none;
    font-size: 100%;
    line-height: inherit;
    margin: 0;
    outline: none;
    padding: 0;
  }

  .clearfix {
    clear: both;
    content: '';
    display: block;
  }

  .inner-left {
    float: left;
    line-height: 30px;
    position: relative;
  }

  .inner-right {
    float: right;
    line-height: 30px;
    position: relative;
  }
`;
