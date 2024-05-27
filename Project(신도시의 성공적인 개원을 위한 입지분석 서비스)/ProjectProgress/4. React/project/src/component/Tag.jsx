import { Link } from 'react-router-dom';

function A(props) {
  return (
    <Link id={props.id} className={props.className} to={props.link}>{props.text}</Link>
  );
}
function Img(props) {
  return (

    <img src={props.src} alt=''></img>

  );
}
function CarouselBtn(props) {
  return (
    <button type='button' data-bs-target='#mainCarousel' data-bs-slide-to={props.number} className={props.className}>
      <span></span>
    </button>
  );
}
function CarouselItem(props) {
  return (
    <div className={props.firClassName}>
      <img src={props.src} alt={props.alt} />
      <div className={props.secClassName}>
        <div className={props.thirdClassName}>
          <div id={props.firId}>{props.title}</div>
          <div id={props.secId} className="col-xs-12 col-sm-12 col-lg-6">{props.text}</div>
        </div>
      </div>
    </div>
  );
}
function Table(props) {
  return (
    <table id={props.id} className={props.className}>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}
function Option(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td><input type={props.type} name={props.value} vlaue={props.value} id={props.value} checked={props.checked} onChange={props.onChange} ref={props.ref} /></td>
    </tr>
  );
}
function Div(props) {
  return (
    <div className={props.className} id={props.id} style={props.style} tabIndex={props.tabIndex} data-bs-ride={props.ride} data-bs-interval={props.interval}>{props.text}
      {props.children}
    </div>
  );
}
function Form(props) {
  return (
    <form action={props.action} method={props.method} >
      {props.children}
    </form>
  );
}
function Input(props) {
  return (
    <input id={props.id} type={props.type} value={props.value} onClick={props.onClick}></input>
  );
}
function P(props) {
  return (
    <p className={props.className}>{props.children}</p>
  );
}
function Td(props) {
  return (
    <td id={props.id} className={props.className} onClick={props.onClick}>{props.children}</td>
  );
}
function Tr(props) {
  return (
    <tr>{props.children}</tr>
  );
}
function Th(props) {
  return (
    <th>{props.children}</th>
  );
}
function Button(props) {
  return (
    <button className={props.className} type={props.type} data-bs-toggle={props.toggle} data-bs-slide={props.slide} data-bs-target={props.targer} data-bs-dismiss={props.dismiss} ></button>
  );
}
function Span(props) {
  return (
    <span className={props.className}></span>
  );
}
export { A, P, Td, Tr, Th, Span, Button, Img, CarouselBtn, CarouselItem, Table, Option, Div, Form, Input };