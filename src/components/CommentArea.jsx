import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useState, useEffect } from "react";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // };

  const [comments, setComments] = useState([]);
  const [ilLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization:
  //             'Bearer inserisci-qui-il-tuo-token',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }

  const componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== props.asin) {
      // this.setState({
      //   isLoading: true,
      // });
      setIsLoading(true);
      try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY5OWU2ZjA0NTg5ZjAwMTk0OGU1YmQiLCJpYXQiOjE3MTA4NTc4MzksImV4cCI6MTcxMjA2NzQzOX0.BSotV1Bzo4OFxIJoRYB6sZkNh2CMOsE0paL3dkCUvE4",
          },
        });
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          // this.setState({
          //   comments: comments,
          //   isLoading: false,
          //   isError: false,
          // });
          setComments(comments);
          setIsLoading(false);
          setIsError(false);
        } else {
          // this.setState({ isLoading: false, isError: true });
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        // this.setState({ isLoading: false, isError: true });
        setIsLoading(false);
        setIsError(true);
      }
    }
  };

  return (
    <div className="text-center">
      {this.state.isLoading && <Loading />}
      {this.state.isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
