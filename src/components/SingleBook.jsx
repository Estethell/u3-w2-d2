import { Component } from "react";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
// import CommentArea from './CommentArea'

const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // }

  return (
    <>
      <Card
        // onClick={() => this.setState({ selected: !this.state.selected })}
        onClick={() => props.changeSelectedBook(props.myBook.asin)}
        style={{
          border: props.selectedBook === props.myBook.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={props.myBook.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.myBook.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
    </>
  );
};

export default SingleBook;
